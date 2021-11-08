import { User } from '.prisma/client'

import { NextApiRequest } from 'next'

import { userAutorize } from '../repositories/users.repository'

export async function emailAuthorizeDto(
  credentials: Record<string, string>,
  _req: NextApiRequest
): Promise<Partial<User>> {
  const { username = '', password } = credentials
  const user = await userAutorize(username, password)
  if (user) {
    return {
      email: user?.email,
      name: user?.name,
      image: user?.image,
      id: user.id,
      level: user?.level
    }
  }
  return null
}
