import axios from 'axios'

import { dev } from '~/config'

const baseURL = dev ? 'http://localhost:3001' : 'https://server.tatoatelie.com.br/api'

const HttpService = axios.create({ baseURL })

export { HttpService }

export async function httpGeneratePix(_paymentId: number) {
  return {
    succes: true
  }
}
