import type { NextApiRequest, NextApiResponse } from 'next'

import { userAutorize } from '../repositories/users.repository'

export async function me(_req: NextApiRequest, _res: NextApiResponse): Promise<void> {}

export async function autorize(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  const { email, password } = req.body

  // FIXME: validate body

  const user = await userAutorize(email, password)
  if (user) {
    return res.status(200).json({ success: true, userId: user?.id })
  }
  return res.status(401).json({ success: false, message: 'email/senha inválidos' })
}
