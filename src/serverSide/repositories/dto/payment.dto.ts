export interface IPayment {
  id?: number
  uuid?: string
  purchaseId: number
  method: 'pix'
  value: number
  paid: boolean
  payday?: Date
  txid?: string
  overdue?: Date
  createdBy: number
  readonly createdAt?: Date
  updatedBy?: number
  readonly updatedAt?: Date
  meta?: string
  actived?: boolean
}
