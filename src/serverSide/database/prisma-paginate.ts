import { Prisma } from '@prisma/client'

import prisma from '~/serverSide/database/prisma'

export interface PaginateParams<Include = any, Where = any> {
  model: Prisma.ModelName
  size?: number
  page?: number
  orderBy?: string
  order?: 'asc' | 'desc'
  include?: Include
  where?: Where
}

export interface PaginationDetail {
  total: number
  pages: number
  page: number
}

export interface Pagination<T extends Record<string, any>> extends PaginationDetail {
  data: T[]
}

export async function prismaPaginate<T = unknown, PInclude = any, PWhere = any>({
  model,
  size = 25,
  page = 1,
  orderBy,
  order,
  include,
  where
}: PaginateParams<PInclude, PWhere>): Promise<Pagination<T>> {
  // @ts-ignore
  const prismaModel = prisma[model.toLocaleLowerCase()]
  const totalCount = await prismaModel.count(where ? { where } : undefined)

  if (!totalCount) return { total: 0, pages: 0, page, data: [] }

  let findManyArgs = {}
  if (where) findManyArgs = { ...findManyArgs, where: { ...where } }
  if (size) {
    const skip = size * (page - 1) || undefined
    // console.log('skip', skip);
    findManyArgs = { ...findManyArgs, take: size, skip }
  }
  if (orderBy) findManyArgs = { ...findManyArgs, orderBy: { [orderBy]: order } }

  if (include) findManyArgs = { ...findManyArgs, include: include }

  const pages = Math.ceil(totalCount / size)

  // try {
  const results = await prismaModel.findMany({
    ...findManyArgs,
    take: size
  })
  return { total: totalCount, page, pages, data: results }
  // } catch (error) {
  //   return { total: 0, page, pages, data: [] }
  // }
}
