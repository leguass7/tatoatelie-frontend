import { User } from '.prisma/client'

import { createHash } from 'crypto'

import { saltKey } from '~/config'
import prisma from '~/serverSide/database/prisma'

export function hashPassword(payload: string, secret = '') {
  const data = `${payload}${secret}`
  return createHash('md5').update(data).digest('hex')
}

export async function userAutorize(email: string, password: string): Promise<User> {
  const passHash = hashPassword(password, saltKey)
  const user = await prisma.user.findFirst({ where: { email, password: passHash, actived: true } })
  return user || null
}
