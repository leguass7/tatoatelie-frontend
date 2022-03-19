import type { NextApiRequest, NextApiResponse } from 'next'

import { AuthorizedApiRequest } from '../middlewares/protect'
import { findUserByEmail, updateUser, userAutorize } from '../repositories/users.repository'

// export async function me(_req: NextApiRequest, _res: NextApiResponse): Promise<void> {}

export async function updateUserController(req: AuthorizedApiRequest, res: NextApiResponse): Promise<void> {
  const { body, auth } = req

  const user = await updateUser({ ...body, id: auth.userId })

  return res.status(201).json({ success: true, user })
}

export async function getUserByEmailController(req: AuthorizedApiRequest, res: NextApiResponse): Promise<void> {
  const { email = null } = req.query

  const user = await findUserByEmail(email as string)

  return res.status(201).json({ success: true, user })
}

export async function autorize(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  const { email, password } = req.body

  // FIXME: validate body

  const user = await userAutorize(email, password)
  if (user) {
    return res.status(200).json({ success: true, userId: user?.id })
  }
  return res.status(401).json({ success: false, message: 'email/senha inválidos' })
}
