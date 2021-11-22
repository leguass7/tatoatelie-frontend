import { Prisma } from '@prisma/client'

import prisma from '~/serverSide/database/prisma'
import { prismaPaginate, Pagination } from '~/serverSide/database/prisma-paginate'

import { productDto } from './dto/productDto'
import type { IProduct, ProductsListType, QueryPagination } from './types'

type ProductInclude = Prisma.ProductInclude
type ProductWhere = Prisma.ProductWhereInput

type ProductRequestFilter = {
  segmentId?: number
  segment?: string
}

export const producIncludes: Pick<Prisma.ProductFindManyArgs, 'include'> = {
  include: {
    images: {
      select: { id: true, label: true, main: true, actived: true, path: true },
      where: { actived: true }
    },
    kind: {
      select: { id: true, label: true }
    }
  }
}

export async function productsFindAll(where: Prisma.ProductWhereInput = {}, includes: boolean) {
  const query: Prisma.ProductFindManyArgs = { where: { actived: true, ...where } }
  if (includes) query.include = producIncludes.include
  const products = await prisma.product.findMany(query)
  return products.map(product => productDto(product, !!includes))
}

export async function productsFindOne(idOrSlug: number | string) {
  const where: Prisma.ProductWhereInput = {}

  if (typeof idOrSlug === 'number') where.id = idOrSlug
  if (typeof idOrSlug === 'string') where.slug = idOrSlug

  const product = await prisma.product.findFirst({
    where,
    include: producIncludes.include
    // include: {
    //   images: {
    //     select: { id: true, label: true, main: true, actived: true, path: true },
    //     where: { actived: true }
    //   },
    //   kind: {
    //     select: { id: true, label: true }
    //   }
    // }
  })

  return productDto(product, true)
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
        select: { path: true, meta: true },
        where: { actived: true }
      }
    }
  })

  return { ...pag, data: data.map(d => productDto(d)) }
}
