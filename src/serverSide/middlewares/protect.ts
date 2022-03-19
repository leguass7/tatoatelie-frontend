import { NextApiRequest, NextApiResponse } from 'next'
import { getToken, JWT } from 'next-auth/jwt'
import { NextHandler } from 'next-connect'

import { saltKey } from '~/config'

export interface IAuthorizedUser {
  userId: number
  name: string
  email?: string
}
export interface AuthorizedApiRequest extends NextApiRequest {
  auth: IAuthorizedUser
}

function authorizedDto(data: JWT): IAuthorizedUser {
  return {
    userId: parseInt(data?.sub, 10),
    name: data?.name,
    email: data?.email
  }
}

export async function protect(req: AuthorizedApiRequest, res: NextApiResponse, next: NextHandler) {
  const unauthorize = (msg?: string) => res.status(401).json({ message: msg || 'não autorizado' })
  try {
    const session = await getToken({ req, secret: saltKey })
    if (!session) {
      return unauthorize()
    }
    req.auth = authorizedDto(session)
    next()
  } catch (error) {
    return unauthorize()
  }
}
