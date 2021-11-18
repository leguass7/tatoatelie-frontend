import { useCallback, useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { compareValues } from '~/helpers/array'
import type { AppState } from '~/store'
import { ICartAppState, ICartProduct, setProducts } from '~/store/reducers/cart'

export function useCartItems() {
  const dispatch = useDispatch()
  const products = useSelector<AppState, ICartAppState['products']>(state => state.cart?.products || [])

  const setCartProducts = useCallback(
    (productList: ICartProduct[]) => {
      dispatch(setProducts(productList))
    },
    [dispatch]
  )

  const addCartProduct = useCallback(
    ({ id, quantity, price }: ICartProduct) => {
      const product: ICartProduct = { id, quantity, price }
      const newProdList = [...products.filter(p => p.id !== id), product]
      setCartProducts(newProdList.sort(compareValues('id')))
    },
    [products, setCartProducts]
  )

  const count = useMemo(() => products.length, [products])

  return { products, count, addCartProduct }
}

export function useCartMenu() {
  // const dispatch = useDispatch()
  const isCartOpen = useSelector<AppState, ICartAppState['open']>(state => !!state.cart?.open)

  // const setCartProducts = useCallback(
  //   (productList: ICartProduct[]) => {
  //     dispatch(setProducts(productList))
  //   },
  //   [dispatch]
  // )

  // const addCartProduct = useCallback(
  //   ({ id, quantity, price }: ICartProduct) => {
  //     const product: ICartProduct = { id, quantity, price }
  //     const newProdList = [...products.filter(p => p.id !== id), product]
  //     setCartProducts(newProdList.sort(compareValues('id')))
  //   },
  //   [products, setCartProducts]
  // )

  // const count = useMemo(() => products.length, [products])

  return [isCartOpen]
}
