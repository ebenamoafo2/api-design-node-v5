import { app } from './server.ts'
import { env } from '../env.ts'

app.listen(env.PORT, () => {
  console.log(`Habit Tracker API is running on http://localhost:${env.PORT}`)
})
