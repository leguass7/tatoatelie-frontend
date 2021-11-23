import { Prisma } from '.prisma/client'

import prisma from '../database/prisma'
import { addressDto } from './dto/adresses.dto'

export async function adressesFindAll(where: Prisma.AdressesWhereInput = {}) {
  const query: Prisma.AdressesFindManyArgs = { where: { actived: true, ...where } }
  const result = await prisma.adresses.findMany(query)
  return result.map(addr => addressDto(addr))
}
