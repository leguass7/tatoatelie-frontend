import { IReponseApi } from './types'

export type PayMethod = 'pix'

export enum PayMode {
  CASH = 1,
  HALF = 2
}

export interface IPaymentCreatePayload {
  paymentId?: number
  purchaseId: number
  payMethod: PayMethod
  payMode: PayMode
}

export interface IResponseCreatePayment extends IReponseApi {
  paymentId?: number
  txid: string
  pix: {
    stringQRCode: string
    base64QRCode: string
  }
}
