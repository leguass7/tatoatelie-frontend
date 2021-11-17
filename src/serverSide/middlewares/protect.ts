import { NextApiRequest, NextApiResponse } from 'next'
import { getToken } from 'next-auth/jwt'
import { NextHandler } from 'next-connect'

import { saltKey } from '~/config'

export async function protect(req: NextApiRequest, res: NextApiResponse, next: NextHandler) {
  const unauthorize = (msg?: string) => res.status(401).json({ message: msg || 'não autorizado' })
  try {
    const session = await getToken({ req, secret: saltKey })
    if (!session) {
      return unauthorize()
    }
  } catch (error) {
    return unauthorize()
  }

  next()
}
