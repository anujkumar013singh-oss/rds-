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
    return callback(new Error(`CORS policy: origin ${origin} not allowed`))
  },
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
})

module.exports = corsConfig
