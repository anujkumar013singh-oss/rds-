const cors = require('cors')

/**
 * CORS Configuration for Express.js
 *
 * This middleware handles:
 * ✓ Specific origin whitelist (production-safe)
 * ✓ Preflight OPTIONS requests
 * ✓ Credentials/cookies support
 * ✓ Proper header forwarding
 */

// Parse allowed origins from environment variable
const allowedOrigins = (process.env.ALLOWED_ORIGINS || '')
  .split(',')
  .map((o) => o.trim())
  .filter((o) => o.length > 0)

// Development origins
const devOrigins = ['http://localhost:5173', 'http://localhost:3000']

// Combine all allowed origins
const allAllowedOrigins = [...new Set([...allowedOrigins, ...devOrigins])]

// CORS options - Production-safe, no wildcard
const corsOptions = {
  // Validate origin against whitelist
  origin: (origin, callback) => {
    // Allow requests without origin (server-to-server, Postman)
    if (!origin) {
      return callback(null, true)
    }

    // Check if origin is in the whitelist
    if (allAllowedOrigins.includes(origin)) {
      console.log(`✅ CORS allowed: ${origin}`)
      return callback(null, true)
    }

    // Reject origins not in whitelist
    console.warn(`❌ CORS rejected: ${origin}`)
    return callback(new Error('Not allowed by CORS'))
  },

  // HTTP methods allowed
  methods: ['GET', 'POST', 'OPTIONS'],

  // Headers that can be sent by the client
  allowedHeaders: ['Content-Type', 'Authorization'],

  // Headers that the client can read from the response
  exposedHeaders: [],

  // Allow credentials (cookies, auth headers)
  credentials: true,

  // How to handle OPTIONS requests
  preflightContinue: false,

  // Success status for OPTIONS requests (200 or 204)
  optionsSuccessStatus: 200,

  // Cache preflight response for 24 hours
  maxAge: 86400,
}

console.log('🔐 CORS Configuration:')
console.log('   Allowed Origins:', allAllowedOrigins)
console.log('   Credentials: true')
console.log('   Preflight Cache: 24 hours')

module.exports = cors(corsOptions)
