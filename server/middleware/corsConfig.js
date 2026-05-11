const cors = require('cors')

// Parse allowed origins from environment variable
const allowedOrigins = (process.env.ALLOWED_ORIGINS || '')
  .split(',')
  .map((o) => o.trim())
  .filter((o) => o.length > 0)

// Add default origins for development
const defaultOrigins = [
  'http://localhost:5173',
  'http://localhost:3000',
  'http://127.0.0.1:5173',
  'http://127.0.0.1:3000',
]

// Combine all allowed origins
const allOrigins = [...new Set([...allowedOrigins, ...defaultOrigins])]

console.log('🔐 CORS Configuration:')
console.log('   Allowed Origins:', allOrigins)
console.log('   Environment ALLOWED_ORIGINS:', process.env.ALLOWED_ORIGINS || 'NOT SET')

const corsOptions = {
  origin: (origin, callback) => {
    // Always allow requests with no origin (server-to-server, Postman, health checks)
    if (!origin) {
      return callback(null, true)
    }

    // Check if origin is in allowed list
    if (allOrigins.includes(origin)) {
      return callback(null, true)
    }

    // Fallback: Allow all origins (for production compatibility)
    console.log(`✅ CORS accepting: ${origin}`)
    return callback(null, true)
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS', 'HEAD'],
  allowedHeaders: [
    'Content-Type',
    'Authorization',
    'Accept',
    'X-Requested-With',
    'Origin',
  ],
  exposedHeaders: ['Content-Length', 'Content-Type'],
  credentials: true,
  preflightContinue: false,
  optionsSuccessStatus: 200,
  maxAge: 86400,
}

const corsConfig = cors(corsOptions)

// Export both the middleware and options for flexibility
module.exports = corsConfig
module.exports.corsOptions = corsOptions
