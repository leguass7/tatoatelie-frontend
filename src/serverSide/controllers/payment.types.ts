import type { IPaymentPixData, PayMethod, PayMode } from '../repositories/dto/payment.dto'
import type { IReponseApi } from './types'

export interface IPaymentCreatePayload {
  paymentId?: number
  purchaseId: number
  payMethod: PayMethod
  payMode: PayMode
}

export interface IResponseCreatePayment extends IReponseApi {
  paymentId?: number
  txid: string
  pix: IPaymentPixData
}
