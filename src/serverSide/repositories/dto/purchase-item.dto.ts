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
