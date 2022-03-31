import { Prisma, Purchase } from '.prisma/client'

import { PurchaseWithItems } from '~/components/Purchases/PurchaseList'
import { serializedDto } from '~/helpers/database'
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

export async function findUserPurchases(userId: number): Promise<PurchaseWithItems[]> {
  const purchases = await prisma.purchase.findMany({
    where: { userId },
    include: { items: true, payments: true, address: true }
  })

  // FIXME: fazer uma rotina para isso ou uma função mais genérica
  purchases.forEach(purchase => {
    if (purchase?.items?.length) {
      purchase.items = purchase.items?.map(item => {
        return serializedDto(item)
      })
    }

    if (purchase?.address) purchase.address = serializedDto(purchase.address)

    if (purchase?.payments?.length) {
      purchase.payments = purchase.payments?.map(payment => {
        return serializedDto(payment)
      })
    }
  })

  return serializedDto(purchases || []) as PurchaseWithItems[]
}

export async function createPurchaseItems(data: IPurchaseItem[]): Promise<number> {
  const items = purchaseCreateItemDto(data)
  const purchaseItems = await prisma.purchaseItem.createMany({ data: items })
  return purchaseItems.count
}

export async function purchaseFindOne(query: Prisma.PurchaseFindFirstArgs): Promise<Purchase> {
  const purchase = (await prisma.purchase.findFirst(query)) as PurchaseWithItems

  if (purchase?.items?.length) {
    // @ts-ignore
    purchase.items = purchase.items?.map(item => {
      return serializedDto(item)
    })
  }

  if (purchase?.address) purchase.address = serializedDto(purchase.address)

  if (purchase?.payments?.length) {
    purchase.payments = purchase.payments?.map(payment => {
      return serializedDto(payment)
    })
  }

  return serializedDto(purchase)
}
