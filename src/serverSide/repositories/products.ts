import { wait } from '~/helpers'

import { products } from './makeData/mock'
import type { IProduct, QueryPagination } from './types'

export async function productsFindAll() {
  await wait(2000)
  return products
}

export async function productsPaginate(_pagination?: QueryPagination & Record<string, any>): Promise<IProduct[]> {
  await wait(2000)
  return products
}
