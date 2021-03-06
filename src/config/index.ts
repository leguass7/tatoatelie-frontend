import pkg from '../../package.json'
export const dev = process.env.NODE_ENV !== 'production'

const virtualHost = `${process.env.NEXT_PUBLIC_VIRTUAL_HOST}` || ''
const vhost = typeof virtualHost === 'undefined' || virtualHost === 'undefined' ? '' : virtualHost
export const host = dev ? 'localhost:3000' : vhost || ''

export const imageBase = dev ? `http://${host}` : `${host ? `https://${host}` : ''}`

export const imageBaseApi = 'https://server.tatoatelie.com.br/api'

export const saltKey = process.env.SECRET
export const serverToken = process.env.SERVER_TOKEN

export const appName = pkg.name
export const appVersion = pkg.version

export const phone = '(85) 8713-8347'

export const isServer = typeof window === 'undefined' ? true : false
