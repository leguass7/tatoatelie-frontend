import type { NextApiRequest, NextApiResponse } from 'next'

import { productsFindAll } from '../repositories/products'

interface IRequestProductsByIds {
  ids: number[]
}

interface ProductsByIdsApiRequest extends NextApiRequest {
  body: IRequestProductsByIds
}

export async function productsByIds(req: ProductsByIdsApiRequest, res: NextApiResponse): Promise<void> {
  const { ids = [] } = req.body

  const findIds = ids.filter(f => !!f)
  const products = await productsFindAll({ id: { in: findIds } })
  return res.status(200).json({
    success: true,
    products
  })
}
