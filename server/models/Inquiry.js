const mongoose = require('mongoose')

const inquirySchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: [true, 'Full name is required'],
    trim: true,
    maxLength: [100, 'Name must be under 100 characters'],
  },
  phone: {
    type: String,
    required: [true, 'Phone number is required'],
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    lowercase: true,
    trim: true,
  },
  company: {
    type: String,
    trim: true,
  },
  city: {
    type: String,
    trim: true,
  },
  service: {
    type: String,
    required: [true, 'Service selection is required'],
    enum: [
      'Talent Acquisition / Hiring',
      'HR Compliance Consulting',
      'Employee Training',
      'Payroll Management',
      'HR Policy Development',
      'HR Audit & Advisory',
      'Other / Not sure yet',
    ],
  },
  requirement: {
    type: String,
    maxLength: [2000, 'Requirement must be under 2000 characters'],
  },
  submittedAt: {
    type: Date,
    default: Date.now,
  },
  ipAddress: {
    type: String,
  },
})

module.exports = mongoose.model('Inquiry', inquirySchema)
