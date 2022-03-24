export const wait = (timeout: number): Promise<any> => {
  return new Promise(resolve => setTimeout(resolve, timeout))
}

export function round(number: number, precision = 4): number {
  if (!number || (number && number === 0)) return 0
  const factor = Math.pow(10, precision)
  const tempNumber = number * factor
  const roundedTempNumber = Math.round(tempNumber)
  return roundedTempNumber / factor
}

export const { format: formatPrice } = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL'
})

/**
 * @function isObject
 * @param item
 * @returns {boolean}
 */
export function isObject(item) {
  return item && typeof item === 'object' && !Array.isArray(item) && !(item instanceof Date)
}

/**
 * @function mergeDeep
 * @param target
 * @param sources
 */
export function mergeDeep(target, ...sources) {
  if (!sources.length) return target
  const source = sources.shift()

  if (isObject(target) && isObject(source)) {
    const keys = Object.keys(source)
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i]
      if (isObject(source[key])) {
        if (!target[key]) Object.assign(target, { [key]: {} })
        mergeDeep(target[key], source[key])
      } else {
        Object.assign(target, { [key]: source[key] })
      }
    }
  }
  return mergeDeep(target, ...sources)
}

export function isDefined(v: any): boolean {
  return !!(v !== null && typeof v !== 'undefined' && v !== undefined)
}

export function removeInvalidValues<T = unknown>(obj: Record<string, any>): T {
  return Object.entries(obj).reduce((acc, [key, value]) => {
    if (value) {
      if (!isDefined(value) || isNaN(value)) return acc
      acc[key] = value
    }

    return acc
  }, {} as T)
}
