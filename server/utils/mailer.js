const nodemailer = require('nodemailer')

const createTransporter = () =>
  nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '587', 10),
    secure: process.env.SMTP_SECURE === 'true', // false for STARTTLS on port 587
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
    tls: {
      rejectUnauthorized: false, // Required for some Render environments
    },
  })

const sendInquiryNotification = async (data) => {
  const transporter = createTransporter()

  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
      <div style="background: #00BFFF; padding: 24px; text-align: center;">
        <h1 style="color: #000; margin: 0; font-size: 22px;">New HR Inquiry — RDS Group</h1>
      </div>
      <div style="padding: 32px;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold; width: 40%; color: #555;">Full Name</td><td style="padding: 10px 0; border-bottom: 1px solid #eee;">${data.fullName}</td></tr>
          <tr><td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #555;">Phone</td><td style="padding: 10px 0; border-bottom: 1px solid #eee;">${data.phone}</td></tr>
          <tr><td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #555;">Email</td><td style="padding: 10px 0; border-bottom: 1px solid #eee;">${data.email}</td></tr>
          <tr><td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #555;">Company</td><td style="padding: 10px 0; border-bottom: 1px solid #eee;">${data.company || '—'}</td></tr>
          <tr><td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #555;">City</td><td style="padding: 10px 0; border-bottom: 1px solid #eee;">${data.city || '—'}</td></tr>
          <tr><td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #555;">Service Required</td><td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #00BFFF; font-weight: bold;">${data.service}</td></tr>
          <tr><td style="padding: 10px 0; font-weight: bold; color: #555; vertical-align: top;">Requirement</td><td style="padding: 10px 0;">${data.requirement || '—'}</td></tr>
        </table>
        <div style="margin-top: 24px; padding: 16px; background: #f9f9f9; border-radius: 6px; font-size: 13px; color: #888;">
          Submitted: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST &nbsp;|&nbsp; IP: ${data.ipAddress || 'unknown'}
        </div>
      </div>
    </div>
  `

  await transporter.sendMail({
    from: `"RDS Group Website" <${process.env.SMTP_USER}>`,
    to: process.env.MAIL_TO,
    replyTo: data.email,
    subject: `New HR Inquiry from ${data.fullName} — ${data.service}`,
    html,
  })
}

const sendAutoReply = async (data) => {
  const transporter = createTransporter()

  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
      <div style="background: #000; padding: 24px; text-align: center;">
        <h1 style="color: #00BFFF; margin: 0; font-size: 24px; font-family: Georgia, serif;">RDS Group</h1>
        <p style="color: #fff; margin: 8px 0 0; font-size: 13px;">India's Trusted HR Partner</p>
      </div>
      <div style="padding: 32px;">
        <p style="color: #333; font-size: 16px;">Dear <strong>${data.fullName}</strong>,</p>
        <p style="color: #555; line-height: 1.7;">Thank you for reaching out to RDS Group. We have received your inquiry regarding <strong>${data.service}</strong> and will contact you on <strong>${data.phone}</strong> within 2 business hours.</p>
        <div style="margin: 24px 0; padding: 20px; background: #f0f9ff; border-left: 4px solid #00BFFF; border-radius: 0 6px 6px 0;">
          <p style="margin: 0; color: #333; font-size: 14px;">Need immediate assistance? Reach us directly:</p>
          <p style="margin: 8px 0 0; color: #00BFFF; font-weight: bold;">📞 +91 63899 00496 &nbsp;|&nbsp; WhatsApp: +91 78972 99378</p>
        </div>
        <p style="color: #555; line-height: 1.7;">We look forward to speaking with you.</p>
        <p style="color: #333; margin-top: 24px;">Warm regards,<br><strong>The RDS Group Team</strong><br><span style="color: #888; font-size: 13px;">info@rdsgroupp.in</span></p>
      </div>
      <div style="background: #f5f5f5; padding: 16px; text-align: center; font-size: 12px; color: #aaa;">
        © 2025 RDS Group, Uttar Pradesh, India. Your details are private and will never be shared.
      </div>
    </div>
  `

  await transporter.sendMail({
    from: `"RDS Group" <${process.env.SMTP_USER}>`,
    to: data.email,
    subject: 'We received your inquiry — RDS Group',
    html,
  })
}

module.exports = { sendInquiryNotification, sendAutoReply }
