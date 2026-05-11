require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const { body, validationResult } = require('express-validator')
const corsConfig = require('./middleware/corsConfig')
const Inquiry = require('./models/Inquiry')
const { sendInquiryNotification, sendAutoReply } = require('./utils/mailer')

const app = express()
const PORT = process.env.PORT || 5000

/**
 * MIDDLEWARE ORDER (Critical for CORS):
 * 1. OPTIONS handling (preflight)
 * 2. CORS middleware
 * 3. Body parsing
 * 4. Routes
 */

// ─── 1. PREFLIGHT REQUEST HANDLING ────────────────────────────────────────────
// Handle OPTIONS requests on all routes
app.options('*', corsConfig)

// ─── 2. CORS MIDDLEWARE ──────────────────────────────────────────────────────
// Apply to all routes
app.use(corsConfig)

// ─── 3. BODY PARSING ─────────────────────────────────────────────────────────
app.use(express.json())

// ─── 4. LOGGING ──────────────────────────────────────────────────────────────
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`)
  next()
})

// ─── 5. TEST ROUTE ───────────────────────────────────────────────────────────
app.get('/test', (req, res) => {
  res.json({ message: 'Backend is ALIVE and reachable!' })
})

// ─── 6. CONTACT ROUTE ────────────────────────────────────────────────────────
app.post('/api/contact', [
  body('fullName').notEmpty(),
  body('phone').notEmpty(),
  body('email').isEmail(),
  body('service').notEmpty(),
], async (req, res) => {
  console.log('Received contact submission:', req.body)
  
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ success: false, errors: errors.array() })
  }

  try {
    const { fullName, phone, email, company, city, service, requirement } = req.body
    
    // Save to DB
    await Inquiry.create({ fullName, phone, email, company, city, service, requirement })
    console.log('Saved to DB')

    // Send Mail
    await sendInquiryNotification(req.body)
    console.log('Email notification sent')
    
    await sendAutoReply(req.body)
    console.log('Auto-reply sent')

    res.status(200).json({ success: true, message: 'Success!' })
  } catch (err) {
    console.error('Submission error:', err)
    res.status(500).json({ success: false, message: err.message })
  }
})

// ─── DATABASE & START ─────────────────────────────────────────────────────
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('✅ DATABASE CONNECTED')
    app.listen(PORT, () => {
      console.log(`🚀 SERVER RUNNING ON PORT ${PORT}`)
      console.log(`🌍 TEST AT http://localhost:${PORT}/test`)
    })
  })
  .catch(err => {
    console.error('❌ DATABASE CONNECTION FAILED:', err)
    process.exit(1)
  })
