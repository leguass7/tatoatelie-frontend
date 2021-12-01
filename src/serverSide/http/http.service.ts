import axios from 'axios'

import { dev, serverToken, appName, appVersion, host } from '~/config'

const baseURL = dev ? 'http://localhost:3001/api' : 'https://server.tatoatelie.com.br/api'

const HttpService = axios.create({ baseURL })

HttpService.interceptors.request.use(req => {
  req.headers['Authorization'] = `Bearer ${serverToken}`
  req.headers['User-Agent'] = `${appName}/${appVersion} (+${host})`
  return req
})

HttpService.interceptors.response.use(
  res => res,
  error => {
    const message = error?.response?.data || error?.response || error.code || ''
    // eslint-disable-next-line no-console
    console.error('HttpService.interceptors.response', message || error)
    Promise.resolve({ data: { success: false, message } })
  }
)

export { HttpService }

export interface IHttpResponseGeneratePix {
  success?: boolean
  txid: string
  pix: {
    stringQRCode: string
    base64QRCode: string
  }
}

export async function httpGeneratePix(paymentId: number): Promise<IHttpResponseGeneratePix> {
  const response = await HttpService.get(`/payment/pix/${paymentId}`)
  return response && response.data
}
