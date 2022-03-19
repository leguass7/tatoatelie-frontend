import { NextApiResponse } from 'next'

import { AuthorizedApiRequest } from '../middlewares/protect'
import {
  adressesFindAll,
  createAddress,
  listStates,
  listCities,
  findAddressById,
  updateAddress
} from '../repositories/adresses'
import type { ICreateAddress } from '../repositories/dto/adresses.dto'

export async function getAdressesController(req: AuthorizedApiRequest, res: NextApiResponse) {
  const { auth } = req
  const adresses = await adressesFindAll({ userId: auth.userId })

  return res.status(200).json({
    success: true,
    adresses
  })
}

export async function getAddressController(req: AuthorizedApiRequest, res: NextApiResponse) {
  const { addressId } = req.query
  const id = addressId ? parseInt(`${addressId}`) || 0 : 0

  const address = await findAddressById(id)

  return res.status(200).json({
    success: true,
    address
  })
}

export async function updateAdressesController(req: AuthorizedApiRequest, res: NextApiResponse) {
  const { body, query, auth } = req

  const id = (query?.addressId && parseInt(`${query?.addressId}`, 10)) || 0
  const stateId = (body?.stateId && parseInt(`${body?.stateId}`, 10)) || 0
  const cityId = (body?.cityId && parseInt(`${body?.cityId}`, 10)) || 0

  const address = await updateAddress({ ...body, actived: true, cityId, stateId, id, userId: auth.userId })

  return res.status(201).json({
    success: true,
    address
  })
}

export async function createAdressesController(req: AuthorizedApiRequest, res: NextApiResponse) {
  const { auth } = req
  const body = req.body as ICreateAddress
  const stateId = (body?.stateId && parseInt(`${body?.stateId}`, 10)) || 0
  const cityId = (body?.cityId && parseInt(`${body?.cityId}`, 10)) || 0

  const address = await createAddress({ ...body, actived: true, userId: auth.userId, cityId, stateId })

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
