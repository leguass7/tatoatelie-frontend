import { NextApiResponse } from 'next'

import { AuthorizedApiRequest } from '../middlewares/protect'
import { adressesFindAll } from '../repositories/adresses'

export async function getAdressesController(req: AuthorizedApiRequest, res: NextApiResponse) {
  const { auth } = req
  const adresses = await adressesFindAll({ userId: auth.userId })

  return res.status(200).json({
    success: true,
    adresses
  })
}

export async function updateAdressesController(req: AuthorizedApiRequest, res: NextApiResponse) {
  return res.status(201).json({
    success: true,
    adresses: []
  })
}

export async function createAdressesController(req: AuthorizedApiRequest, res: NextApiResponse) {
  return res.status(201).json({
    success: true,
    adresses: []
  })
}
