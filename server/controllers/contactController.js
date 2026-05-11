const { validationResult } = require('express-validator')
const Inquiry = require('../models/Inquiry')
const { sendInquiryNotification, sendAutoReply } = require('../utils/mailer')

const submitContact = async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ success: false, errors: errors.array() })
  }

  const { fullName, phone, email, company, city, service, requirement } = req.body
  const ipAddress = req.ip || req.headers['x-forwarded-for'] || 'unknown'

  let autoReplySent = false

  // 1. Send auto-reply to user (primary action)
  try {
    await sendAutoReply({ fullName, phone, email, service })
    autoReplySent = true
  } catch (replyErr) {
    process.stderr.write(`[Mail Error - AutoReply] ${replyErr.message}\n`)
    process.stderr.write(`[Mail Error Details] ${JSON.stringify(replyErr, Object.getOwnPropertyNames(replyErr))}\n`)
  }

  // 2. Save to MongoDB (non-blocking)
  try {
    await Inquiry.create({ fullName, phone, email, company, city, service, requirement, ipAddress })
  } catch (dbErr) {
    process.stderr.write(`[DB Error] ${dbErr.message}\n`)
  }

  // 3. Send notification email to RDS Group (non-blocking)
  try {
    await sendInquiryNotification({ fullName, phone, email, company, city, service, requirement, ipAddress })
  } catch (mailErr) {
    process.stderr.write(`[Mail Error - Notification] ${mailErr.message}\n`)
  }

  // 4. Return response - success if auto-reply was sent
  if (!autoReplySent) {
    return res.status(500).json({
      success: false,
      message: 'Something went wrong. Please call us directly at +91 63899 00496.',
    })
  }

  return res.status(200).json({
    success: true,
    message: 'Inquiry received. We will contact you within 2 business hours.',
  })
}

module.exports = { submitContact }
