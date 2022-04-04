import { NextApiRequest, NextApiResponse } from 'next'

import { findUserByEmail } from '~/serverSide/repositories/users.repository'

import { createUser } from './users.controller'
interface IBody {
  name: string
  password: string
  cellPhone?: string
  email: string
}

interface IRequestRegisterBody extends NextApiRequest {
  body: IBody
}

export async function registerUserController(req: IRequestRegisterBody, res: NextApiResponse): Promise<void> {
  const { body } = req
  const { email } = body

  const hasEmail = await findUserByEmail(email)
  if (hasEmail) {
    return res.status(400).json({ success: false, message: 'e-mail já cadastrado' })
  }

  const user = await createUser({ ...body })
  if (!user) {
    return res.status(400).json({ success: false, message: 'Usuário não foi registrado, tente novamente' })
  }

  return res.status(201).json({ success: true, userId: user.id })
}
