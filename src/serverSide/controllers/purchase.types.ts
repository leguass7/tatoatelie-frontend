import type { AuthorizedApiRequest } from '../middlewares/protect'
import { PayMethod, PayMode } from '../repositories/dto/payment.dto'
import type { IReponseApi } from './types'

export interface IPurchaseItemCreate {
  id?: number
  productId: number
  name: string
  size?: number
  price: number
  quantity: number
}

export interface IPurchaseCreatePayload {
  fileId?: number
  addrId: number
  payMethod: PayMethod
  payMode: PayMode
  items: IPurchaseItemCreate[]
}

export interface IResponseCreatePurchase extends IReponseApi {
  purchaseId?: number
}

export interface IRequestCreatePurchase extends AuthorizedApiRequest {
  body: IPurchaseCreatePayload
}
