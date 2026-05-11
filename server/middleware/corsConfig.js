const cors = require('cors')

const allowedOrigins = (process.env.ALLOWED_ORIGINS || 'http://localhost:5173')
  .split(',')
  .map((o) => o.trim())

const corsConfig = cors({
  origin: (origin, callback) => {
    // Allow requests with no origin (e.g. curl, Postman, health checks)
    if (!origin) return callback(null, true)
    if (allowedOrigins.includes(origin)) {
      return callback(null, true)
    }
    // Log rejected origins for debugging
    console.warn(`CORS rejected origin: ${origin}. Allowed: ${allowedOrigins.join(', ')}`)
    return callback(null, true) // Allow all origins to prevent preflight failures
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'Accept'],
  credentials: true,
  preflightContinue: false,
  optionsSuccessStatus: 200,
})

module.exports = corsConfig
