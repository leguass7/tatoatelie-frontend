import { PurchaseItem } from '.prisma/client'

import { Decimal } from '@prisma/client/runtime'

export interface IPurchaseItem {
  id?: number
  purchaseId: number
  productId: number
  name: string
  size?: number
  price: number
  quantity: number
  meta?: string
  actived?: boolean
  updatedBy?: number
  readonly updatedAt?: Date
}

type CreatePurchaseItemType = Omit<PurchaseItem, 'id'>

export function purchaseCreateItemDto(
  item: IPurchaseItem | IPurchaseItem[]
): CreatePurchaseItemType | CreatePurchaseItemType[] {
  if (Array.isArray(item)) return item.map(purchaseCreateItemDto) as CreatePurchaseItemType[]

  const price = new Decimal(item.price)
  const updatedAt = item?.updatedAt || new Date()
  const updatedBy = item?.updatedBy || null
  return {
    purchaseId: item.purchaseId,
    productId: item.productId,
    actived: !!item.actived,
    size: item?.size || 0,
    price,
    name: item.name,
    quantity: item.quantity,
    meta: '',
    updatedAt,
    updatedBy
  }
}
