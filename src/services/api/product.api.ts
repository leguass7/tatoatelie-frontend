import { IProduct } from '~/serverSide/repositories/types'

import Api from './index'
import { IApiResponse } from './types.api'

export interface IResponseProducts extends IApiResponse {
  products?: IProduct[]
}

export async function findProductsByIds(ids: number[]): Promise<IResponseProducts> {
  try {
    const response = await Api.post(`/products/find`, { ids })
    return response && response.data
  } catch (error) {
    return { success: false }
  }
}
