import { Prisma } from '@prisma/client'

import { wait } from '~/helpers'
import { prismaPaginate, Pagination } from '~/serverSide/database/prisma-paginate'

import { productDto } from './dto/productDto'
import { products } from './makeData/mock'
import type { IProduct, ProductsListType, QueryPagination } from './types'

type ProductInclude = Prisma.ProductInclude
type ProductWhere = Prisma.ProductWhereInput

type ProductRequestFilter = {
  segmentId?: number
  segment?: string
}

export async function productsFindAll() {
  await wait(2000)
  return products
}

export async function productsPaginate(
  pagination: QueryPagination & ProductRequestFilter = {}
): Promise<Pagination<IProduct>> {
  const { segmentId, ...rest } = pagination

  const where: ProductWhere = {}
  if (segmentId) where.segmentId = segmentId
  const { data, ...pag } = await prismaPaginate<ProductsListType, ProductInclude, ProductWhere>({
    model: 'Product',
    ...rest,
    where,
    include: {
      images: {
        select: { path: true },
        where: { actived: true }
      }
    }
  })

  return { ...pag, data: data.map(d => productDto(d)) }
}
