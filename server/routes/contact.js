const express = require('express')
const { body } = require('express-validator')
const { submitContact } = require('../controllers/contactController')
const { contactLimiter } = require('../middleware/rateLimiter')

const router = express.Router()

const contactValidation = [
  body('fullName').trim().notEmpty().withMessage('Full name is required').isLength({ max: 100 }),
  body('phone').trim().notEmpty().withMessage('Phone number is required'),
  body('email').trim().isEmail().withMessage('Valid email is required').normalizeEmail(),
  body('service')
    .trim()
    .notEmpty()
    .withMessage('Service selection is required')
    .isIn([
      'Talent Acquisition / Hiring',
      'HR Compliance Consulting',
      'Employee Training',
      'Payroll Management',
      'HR Policy Development',
      'HR Audit & Advisory',
      'Other / Not sure yet',
    ])
    .withMessage('Invalid service selection'),
  body('company').optional().trim().isLength({ max: 200 }),
  body('city').optional().trim().isLength({ max: 100 }),
  body('requirement').optional().trim().isLength({ max: 2000 }),
]

router.post('/', contactLimiter, contactValidation, submitContact)

module.exports = router
