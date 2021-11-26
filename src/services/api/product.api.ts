import { IResponseProducts } from '~/serverSide/controllers/product.types'

import Api from './index'

export async function findProductsByIds(ids: number[]): Promise<IResponseProducts> {
  try {
    const response = await Api.post(`/products/find`, { ids })
    return response && response.data
  } catch (error) {
    return { success: false }
  }
}
