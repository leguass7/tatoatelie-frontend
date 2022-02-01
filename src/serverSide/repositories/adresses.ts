import { Prisma } from '.prisma/client'

import prisma from '../database/prisma'
import { addressDto, ICreateAddress } from './dto/adresses.dto'

export async function adressesFindAll(where: Prisma.AdressesWhereInput = {}) {
  const query: Prisma.AdressesFindManyArgs = { where: { actived: true, ...where } }
  const result = await prisma.adresses.findMany(query)
  return result.map(addr => addressDto(addr))
}

export async function createAddress(data: ICreateAddress) {
  const result = await prisma.adresses.create({ data: { ...data, actived: true, createdAt: new Date() } })
  return addressDto(result)
}

export async function listStates() {
  const result = await prisma.uf.findMany({ orderBy: [{ name: 'asc' }] })
  return result || []
}

export async function listCities(stateId: number) {
  const result = await prisma.city.findMany({ where: { stateId }, orderBy: [{ name: 'asc' }] })
  return result || []
}
