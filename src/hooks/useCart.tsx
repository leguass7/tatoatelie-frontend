import { useMemo } from 'react'
import { useSelector } from 'react-redux'

import type { AppState } from '~/store'
import { ICartAppState } from '~/store/reducers/cart'

export function useCartItems() {
  const products = useSelector<AppState, ICartAppState['products']>(state => state.cart?.products || [])

  const count = useMemo(() => products.length, [products])

  return { products, count }
}
