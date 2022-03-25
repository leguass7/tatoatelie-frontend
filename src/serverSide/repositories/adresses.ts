import { Prisma } from '.prisma/client'

import prisma from '../database/prisma'
import { addressDto, ICreateAddress, IUpdateAddress } from './dto/adresses.dto'

export async function adressesFindAll(where: Prisma.AdressesWhereInput = {}) {
  const query: Prisma.AdressesFindManyArgs = { where: { actived: true, ...where } }
  const result = await prisma.adresses.findMany(query)
  return result.map(addr => addressDto(addr))
}

export async function findAddressById(addressId: number) {
  const query: Prisma.AdressesFindFirstArgs = { where: { actived: true, id: addressId } }
  const result = await prisma.adresses.findFirst(query)
  return result || null
}

export async function createAddress(data: ICreateAddress) {
  const result = await prisma.adresses.create({ data: { ...data, actived: true, createdAt: new Date() } })
  return addressDto(result)
}

export async function updateAddress(data: IUpdateAddress) {
  const result = await prisma.adresses.update({
    data: {
      ...data,
      actived: true,
      updatedAt: new Date(),
      updatedBy: data.userId
    },
    where: {
      id: data.id
    }
  })

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
