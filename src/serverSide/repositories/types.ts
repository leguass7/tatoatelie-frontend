export interface QueryPagination {
  size?: number
  page?: number
  slug?: string
}

export interface IProduct {
  id: number
  slug: string
  title: string
  price: number
}
