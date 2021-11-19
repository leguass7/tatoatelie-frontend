import { useCallback, useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { compareValues } from '~/helpers/array'
import { IProduct } from '~/serverSide/repositories/types'
import type { AppState } from '~/store'
import { ICartAppState, ICartProduct, ICartProductDetail, setAdding, setProducts } from '~/store/reducers/cart'

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
    ({ productId, quantity, price, product }: ICartProduct) => {
      const newProduct: ICartProduct = { productId, quantity, price, product }
      const newProdList = [...products.filter(p => p.productId !== productId), newProduct]
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

export function productDetailDto(product: IProduct): ICartProductDetail {
  const { name, size, slug, actived, imageUrl, kind } = product
  return {
    name,
    size,
    slug,
    actived,
    imageUrl,
    kind: kind || null
  }
}

export function useCartAddingProduct(): [ICartAppState['adding'], (_productId: number) => void] {
  const dispatch = useDispatch()
  const adding = useSelector<AppState, ICartAppState['adding']>(state => state.cart?.adding)

  const setAddingOpen = useCallback(
    (productId: number) => {
      dispatch(setAdding(productId))
    },
    [dispatch]
  )

  return [adding, setAddingOpen]
}
