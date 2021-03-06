import { format, isValid, parseISO } from 'date-fns'

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

/**
 * @function toMask
 * @example
 * toMask('XXX-XXXX', ABC1234) // ABC-1234
 */
export function toMask(mask: string, value: string | number): string {
  if (!value) return ''
  const s = `${value}`
  let r = ''
  for (let im = 0, is = 0; im < mask.length && is < s.length; im++) {
    r += mask.charAt(im) === 'X' ? s.charAt(is++) : mask.charAt(im)
  }
  return r
}

export const cpfMask = (value: string): string => {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})/, '$1-$2')
    .replace(/(-\d{2})\d+?$/, '$1')
}

export function capitalize(string: string): string {
  return string.charAt(0).toUpperCase() + string.toLocaleLowerCase().slice(1)
}

export function validDate(date?: Date | string | number) {
  if (date instanceof Date) return date
  if (typeof date === 'string') {
    const d = parseISO(date)
    return isValid(d) ? d : null
  }
  return null
}

export function formatDate(date: Date | string | number, formatString: string) {
  const valid = validDate(date)
  if (valid) return format(valid, formatString)
  return null
}
