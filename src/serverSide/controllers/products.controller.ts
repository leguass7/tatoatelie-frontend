import type { NextApiRequest, NextApiResponse } from 'next'

import { productsFindAll } from '~/serverSide/repositories/products'

interface IRequestProductsByIds {
  ids: number[]
}

interface ProductsByIdsApiRequest extends NextApiRequest {
  body: IRequestProductsByIds
}

export async function productsByIds(req: ProductsByIdsApiRequest, res: NextApiResponse): Promise<void> {
  const { ids = [] } = req.body

  const findIds = ids.filter(f => !!f)

  const products = await productsFindAll({ id: { in: findIds }, actived: true, unavailable: false }, true)
  return res.status(200).json({
    success: true,
    products
  })
}
