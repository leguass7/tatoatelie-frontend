import type { IPaymentCreatePayload, IResponseCreatePayment } from '~/serverSide/controllers/payment.types'

import Api from './index'

export async function getPayment(paymentId: number): Promise<IResponseCreatePayment> {
  const response = await Api.get(`/users/payments/${paymentId}`)
  return response && response?.data
}

export async function createPayment(data: IPaymentCreatePayload): Promise<IResponseCreatePayment> {
  const response = await Api.post(`/users/payments`, data)
  return response && response?.data
}

export async function findOrGeneratePix(paymentId: number): Promise<IResponseCreatePayment> {
  const response = await Api.patch(`/users/payments/${paymentId}`)
  return response && response?.data
}

export async function storePayment({ paymentId, ...data }: IPaymentCreatePayload): Promise<IResponseCreatePayment> {
  const response = paymentId ? await getPayment(paymentId) : await createPayment(data)
  return response
}
