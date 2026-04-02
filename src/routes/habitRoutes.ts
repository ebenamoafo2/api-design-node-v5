import { Router } from 'express'
import { validateBody, validateParams } from '../middleware/validation.ts'
import { z } from 'zod'
import { authenticateToken } from '../middleware/auth.ts'

// a placeholder schema for habit creation, will be expanded with more fields as needed
const createHabitSchema = z.object({
  name: z.string(),
})

const completeParamsSchema = z.object({
  id: z.string(),
})

const router = Router()

router.use(authenticateToken) // Apply authentication middleware to all habit routes

router.get('/', (req, res) => {
  // Placeholder for fetching habits logic
  res.status(200).json({ message: 'List of habits' })
})

router.get('/:id', (req, res) => {
  // Placeholder for fetching a single habit logic
  res.status(200).json({ message: `Details of habit with id ${req.params.id}` })
})

router.post('/', validateBody(createHabitSchema), (req, res) => {
  // Placeholder for habit creation logic
  res.status(201).json({
    message: 'Habit created successfully',
  })
})

router.post(
  '/:id/complete',
  validateParams(completeParamsSchema),
  validateBody(createHabitSchema),
  (req, res) => {
    // Placeholder for habit update logic
    res.status(200).json({
      message: `Habit with id ${req.params.id} updated successfully`,
    })
  },
)

router.delete('/:id', validateParams(completeParamsSchema), (req, res) => {
  // Placeholder for habit deletion logic
  res.status(200).json({
    message: `Habit with id ${req.params.id} deleted successfully`,
  })
})

export { router }
