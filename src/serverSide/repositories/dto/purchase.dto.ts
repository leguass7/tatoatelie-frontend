export interface IPurchase {
  id?: number
  userId: number
  fileId?: number
  addrId: number
  discount?: number
  status?: number
  paid?: boolean
  displayValue?: number
  meta?: string
  actived?: boolean
  obs?: string
  createdBy?: number
  readonly createdAt?: Date
  updatedBy?: number
  readonly updatedAt?: Date
}
