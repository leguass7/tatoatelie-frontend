export interface QueryPagination {
  size?: number
  page?: number
  slug?: string
  orderBy?: string
  order?: 'asc' | 'desc'
}
