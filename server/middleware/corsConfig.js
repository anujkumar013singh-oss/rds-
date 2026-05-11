const cors = require('cors')

// Parse allowed origins from environment variable
const allowedOrigins = (process.env.ALLOWED_ORIGINS || '')
  .split(',')
  .map((o) => o.trim())
  .filter((o) => o.length > 0)

// Add default origins for development
const defaultOrigins = ['http://localhost:5173', 'http://localhost:3000']

// Combine all allowed origins
const allOrigins = [...new Set([...allowedOrigins, ...defaultOrigins])]

console.log('CORS Allowed Origins:', allOrigins)

const corsConfig = cors({
  origin: (origin, callback) => {
    // Allow requests with no origin (like server-to-server, Postman, health checks)
    if (!origin) {
      console.log('No origin in request - allowing')
      return callback(null, true)
    }

    // Check if origin is in allowed list
    if (allOrigins.includes(origin)) {
      console.log(`CORS allowed for origin: ${origin}`)
      return callback(null, true)
    }

    // Allow all origins as fallback for Render/Vercel deployment
    console.log(`CORS - allowing all origins including: ${origin}`)
    return callback(null, true)
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS', 'HEAD'],
  allowedHeaders: ['Content-Type', 'Authorization', 'Accept', 'X-Requested-With'],
  exposedHeaders: ['Content-Length'],
  credentials: true,
  preflightContinue: false,
  optionsSuccessStatus: 200,
  maxAge: 86400, // 24 hours
})

module.exports = corsConfig
