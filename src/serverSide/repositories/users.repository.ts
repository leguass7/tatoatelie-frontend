import { User } from '.prisma/client'

import { createHash } from 'crypto'

import { saltKey } from '~/config'
import prisma from '~/serverSide/database/prisma'

export function hashPassword(payload: string, secret = '') {
  const data = `${payload}${secret}`
  return createHash('md5').update(data).digest('hex')
}

export async function updateUser(data: User) {
  const { id, ...userData } = data
  const user = await prisma.user.update({
    data: { ...userData },
    where: { id }
  })

  return user
}

export async function findUserByEmail(email: string) {
  if (!email) return null
  const user = await prisma.user.findUnique({ where: { email } })
  return user || null
}

export async function userAutorize(email: string, password: string): Promise<User> {
  const passHash = hashPassword(password, saltKey)
  const user = await prisma.user.findFirst({ where: { email, password: passHash, actived: true } })
  return user || null
}
