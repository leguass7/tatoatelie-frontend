import { NextApiResponse } from 'next'

import { AuthorizedApiRequest } from '../middlewares/protect'
import { adressesFindAll, createAddress, listStates, listCities } from '../repositories/adresses'
import type { ICreateAddress } from '../repositories/dto/adresses.dto'

export async function getAdressesController(req: AuthorizedApiRequest, res: NextApiResponse) {
  const { auth } = req
  const adresses = await adressesFindAll({ userId: auth.userId })

  return res.status(200).json({
    success: true,
    adresses
  })
}

export async function updateAdressesController(req: AuthorizedApiRequest, res: NextApiResponse) {
  return res.status(200).json({
    success: true,
    adresses: []
  })
}

export async function createAdressesController(req: AuthorizedApiRequest, res: NextApiResponse) {
  const { auth } = req
  const body = req.body as ICreateAddress
  const address = await createAddress({ ...body, actived: true, userId: auth.userId })

  return res.status(201).json({
    success: true,
    address
  })
}

export async function getUfController(req: AuthorizedApiRequest, res: NextApiResponse) {
  const states = await listStates()
  return res.status(200).json({
    success: true,
    states
  })
}

export async function getCitiesController(req: AuthorizedApiRequest, res: NextApiResponse) {
  const { query } = req
  const estateId = (query?.uf && parseInt(`${query?.uf}`, 10)) || 0
  const cities = estateId ? await listCities(estateId) : []
  return res.status(200).json({
    success: true,
    cities
  })
}
