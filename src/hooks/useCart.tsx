import { useCallback, useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { compareValues } from '~/helpers/array'
import { IProduct } from '~/serverSide/repositories/types'
import type { AppState } from '~/store'
import {
  ICartAppState,
  ICartProduct,
  ICartProductDetail,
  setAdding,
  setOpen,
  setProducts,
  setStep
} from '~/store/reducers/cart'

export function useCartItems() {
  const dispatch = useDispatch()
  const products = useSelector<AppState, ICartAppState['products']>(state => state.cart?.products || [])

  const setCartProducts = useCallback(
    (productList: ICartProduct[]) => {
      dispatch(setProducts(productList.sort(compareValues('productId'))))
    },
    [dispatch]
  )

  const setProductQuantity = useCallback(
    (productId: number, quantity: number) => {
      const found = products.find(f => f.productId === productId)
      if (found) {
        const newProdList = [...products.filter(p => p.productId !== productId), { ...found, quantity }]
        setCartProducts(newProdList)
      }
    },
    [products, setCartProducts]
  )

  const addCartProduct = useCallback(
    ({ productId, quantity, price, product }: ICartProduct) => {
      const found = products.find(f => f.productId === productId)
      if (found) {
        setProductQuantity(productId, found.quantity + 1)
      } else {
        const newProduct: ICartProduct = { productId, quantity, price, product }
        const newProdList = [...products.filter(p => p.productId !== productId), newProduct]
        setCartProducts(newProdList)
      }
    },
    [products, setCartProducts, setProductQuantity]
  )

  const removeCartProduct = useCallback(
    (productId: number) => {
      const newProdList = [...products.filter(p => p.productId !== productId)]
      setCartProducts(newProdList)
    },
    [products, setCartProducts]
  )

  const count = useMemo(() => products.length, [products])
  const total = useMemo(() => products.reduce((acc, p) => (acc += p.price * p.quantity), 0), [products])

  return { products, count, total, addCartProduct, setProductQuantity, removeCartProduct }
}

type SetCartOpen = (_open?: boolean) => boolean
export function useCartMenu(): [boolean, (_open?: boolean | SetCartOpen) => void] {
  const dispatch = useDispatch()
  const cartOpen = useSelector<AppState, ICartAppState['open']>(state => !!state.cart?.open)

  const setCartMenuOpen = useCallback(
    (openState?: boolean | SetCartOpen) => {
      const cb = typeof openState === 'function' ? openState(cartOpen) : !!openState
      dispatch(setOpen(cb))
    },
    [dispatch, cartOpen]
  )

  return [cartOpen, setCartMenuOpen]
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

export function useCartStep() {
  const dispatch = useDispatch()
  const step = useSelector<AppState, ICartAppState['step']>(state => state.cart?.step)

  const setCartStep = useCallback(
    (step: number = 0, hasError?: boolean) => {
      dispatch(setStep({ step, stepError: !!hasError }))
    },
    [dispatch]
  )

  return { step, setCartStep }
}
