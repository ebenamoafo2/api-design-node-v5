import { Router } from 'express'

const router = Router()

router.get('/', (req, res) => {
  // Placeholder for fetching habits logic
  res.status(200).json({ message: 'List of habits' })
})

router.get('/:id', (req, res) => {
  // Placeholder for fetching a single habit logic
  res.status(200).json({ message: `Details of habit with id ${req.params.id}` })
})

router.post('/', (req, res) => {
  // Placeholder for habit creation logic
  res.status(201).json({
    message: 'Habit created successfully',
  })
})

router.put('/:id', (req, res) => {
  // Placeholder for habit update logic
  res.status(200).json({
    message: `Habit with id ${req.params.id} updated successfully`,
  })
})

router.delete('/:id', (req, res) => {
  // Placeholder for habit deletion logic
  res.status(200).json({
    message: `Habit with id ${req.params.id} deleted successfully`,
  })
})

export { router }
