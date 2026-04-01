import { drizzle } from 'drizzle-orm/node-postgres'
import { Pool } from 'pg'
import * as schema from './schema.ts'
import { env, isProd } from '../../env.ts'
import { remember } from '@epic-web/remember'

const createPool = () => {
  return new Pool({
    connectionString: env.DATABASE_URL,
  })
}

let client

if (isProd()) {
  client = createPool()
} else {
  // In development and testing, we want to reuse the same pool
  //  across hot reloads to avoid exhausting database connections.
  client = remember('dbPool', () => createPool())
}

export const db = drizzle({ client, schema })
export default db
