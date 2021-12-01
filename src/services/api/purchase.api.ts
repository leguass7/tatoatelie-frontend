import type { IPurchaseCreatePayload, IResponseCreatePurchase } from '~/serverSide/controllers/purchase.types'

import Api from './index'

export async function createPurchase(data: IPurchaseCreatePayload): Promise<IResponseCreatePurchase> {
  const response = await Api.post(`/users/purchases`, data)
  return response && response?.data
}
