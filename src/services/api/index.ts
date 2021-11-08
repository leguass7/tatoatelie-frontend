import axios, { AxiosError } from 'axios'

import { querystring } from '~/helpers/string'
import type { QueryPagination } from '~/serverSide/repositories/types'

const Api = axios.create({ baseURL: '/api' })

Api.interceptors.response.use(
  res => res,
  (error?: AxiosError) => {
    const response = error && error?.response
    const errorMessage = error ? `${error.code || error.message}` : 'timeout'
    const data: any = { success: false, message: errorMessage }
    return response ? Promise.resolve(response) : Promise.resolve({ data })
  }
)

export default Api

function normalizeUrl(path?: string, queryParams: QueryPagination = {}): string {
  const [base = '', query = ''] = `${path}`.split('?')
  const params: QueryPagination = querystring(query)
  return [base.replace(/^(.*)\/$/, '$1'), querystring({ ...params, ...queryParams })].join('?')
}

export async function paginate(url: string, query: QueryPagination = {}) {
  const requestUrl = normalizeUrl(url, query)
  const response = await Api.get(requestUrl)
  return response.data
}
