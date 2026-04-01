import express from 'express'
import { router as authRoutes } from './routes/authRoutes.ts'
import { router as userRoutes } from './routes/userRoutes.ts'
import { router as habitRoutes } from './routes/habitRoutes.ts'
// Global Middleware imports
import cors from 'cors'
import morgan from 'morgan'
import helmet from 'helmet'

// Create Express application
const app = express()
app.use(helmet()) // Security middleware
app.use(cors()) // Enable CORS for all routes
app.use(express.urlencoded({ extended: true })) // helps handle URL-encoded query strings in HTTP requests.
app.use(
  morgan('dev', {
    //skip: ()=> isTest(),
  }),
) // Logging middleware
app.use(express.json()) // ensures that request payloads can be accessed as objects

// Health check endpoint - always good to have!
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'OK',
    timestamp: new Date().toISOString(),
    service: 'Habit Tracker API',
  })
})

// Mounting Routes
app.use('/api/auth', authRoutes)
app.use('/api/users', userRoutes)
app.use('/api/habits', habitRoutes)

// Export the app for use in other modules (like tests)
export { app }

// Default export for convenience
export default app
