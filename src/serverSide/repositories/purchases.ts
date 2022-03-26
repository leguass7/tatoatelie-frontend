import { Prisma, Purchase } from '.prisma/client'

import prisma from '~/serverSide/database/prisma'

import { IPurchaseItem, purchaseCreateItemDto } from './dto/purchase-item.dto'
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

export async function findUserPurchases(userId: number) {
  const purchases = await prisma.purchase.findMany({ where: { userId } })
  return purchases || []
}

export async function createPurchaseItems(data: IPurchaseItem[]): Promise<number> {
  const items = purchaseCreateItemDto(data)
  const purchaseItems = await prisma.purchaseItem.createMany({ data: items })
  return purchaseItems.count
}

export async function purchaseFindOne(query: Prisma.PurchaseFindFirstArgs): Promise<Purchase> {
  const purchase = await prisma.purchase.findFirst(query)
  return purchase
}
