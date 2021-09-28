export function querystring(_str?: Record<string, any>): string
export function querystring(_str?: string): Record<string, string>
export function querystring(_str?: any): any {
  if (typeof _str === 'string') {
    const keys = `${_str}`.split('&') // ['key=value']
    const obj = keys.reduce((acc: Record<string, string>, keyValue) => {
      const [k, v] = `${keyValue}`.split('=') // [key, value]
      if (k) {
        acc[k] = v || ''
      }
      return acc
    }, {})
    return obj
  } else if (typeof _str === 'object') {
    return Object.keys(_str)
      .map(k => {
        return `${k}=${_str[k]}`
      })
      .join('&')
  }
}
