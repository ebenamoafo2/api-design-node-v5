import { app } from './server.ts'
// import { env } from '../env.ts'

app.listen(3000, () => {
  console.log(`Habit Tracker API is running on http://localhost:3000`)
})
