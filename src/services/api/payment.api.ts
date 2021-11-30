import type { IPaymentCreatePayload, IResponseCreatePayment } from '~/serverSide/controllers/payment.types'

import Api from './index'

export async function createPayment(data: IPaymentCreatePayload): Promise<IResponseCreatePayment> {
  const response = await Api.post(`/users/payments`, data)
  return response && response?.data
}
