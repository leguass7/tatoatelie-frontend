export const dev = process.env.NODE_ENV !== 'production'

const virtualHost = `${process.env.NEXT_PUBLIC_VIRTUAL_HOST}` || ''
const vhost = typeof virtualHost === 'undefined' || virtualHost === 'undefined' ? '' : virtualHost
const host = dev ? 'localhost:3000' : vhost || ''

export const imageBase = dev ? `http://${host}` : `${host ? `https://${host}` : ''}`

export const imageBaseApi = 'https://server.tatoatelie.com.br/api'

export const saltKey = process.env.SECRET
