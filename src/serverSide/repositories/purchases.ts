import { Purchase } from '.prisma/client'

import prisma from '~/serverSide/database/prisma'

import { IPurchase } from './dto/purchase.dto'

export async function createPurchase(data: IPurchase): Promise<Purchase> {
  const purchase = await prisma.purchase.create({
    data: {
      ...data,
      fileId: data.fileId || 0,
      userId: data.userId,
      createdBy: data.createdBy
    }
  })
  return purchase
}
