import { ParsedUrlQuery } from 'querystring'

import { QueryPagination } from '../types'

export function serverSidePaginateDto(query: ParsedUrlQuery): QueryPagination {
  const size = query?.size ? parseInt(`${query.size}`, 10) : 100
  const page = query?.page ? parseInt(`${query?.page}`, 10) : 1
  const orderBy = query?.orderBy ? `${query?.orderBy}` : undefined
  const order = (query?.order ? `${query?.order}` : 'asc') as QueryPagination['order']
  return { size, page, orderBy, order }
}
