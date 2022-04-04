export type PayMethod = 'pix'

export enum PayMode {
  CASH = 1,
  HALF = 2
}

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

export interface IBankData {
  bankCode?: string
  bankName: string
  name: string
  ag: string
  cc: string
  doc: string
}

export interface IPaymentPixData {
  stringQRCode?: string
  base64QRCode?: string
}

export interface IPaymentMetaData {
  dev?: boolean
  pix?: IPaymentPixData
  bank?: IBankData
}

export function parsePaymentMetaDto(meta: string): Partial<IPaymentMetaData> {
  try {
    if (!meta) return {}
    return typeof meta === 'string' ? JSON.parse(meta) || {} : meta
  } catch (error) {
    return {}
  }
}
