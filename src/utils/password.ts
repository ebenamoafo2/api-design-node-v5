import bcrypt from 'bcrypt'
import env from '../../env.ts'
import { hash } from 'crypto'

export const hashPassword = async (password: string): Promise<string> => {
  return bcrypt.hash(password, env.BCRYPT_ROUNDS)
}

export const comparePasswords = async (
  password: string,
  hash: string,
): Promise<boolean> => {
  return bcrypt.compare(password, hash)
}
