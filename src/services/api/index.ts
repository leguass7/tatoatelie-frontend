import axios from 'axios'

import { querystring } from '~/helpers/string'
import type { QueryPagination } from '~/serverSide/repositories/types'

const Api = axios.create({ baseURL: '/api' })

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
