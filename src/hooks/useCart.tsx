import { useCallback, useMemo, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { compareValues, makeArray } from '~/helpers/array'
import type { IPurchaseCreatePayload, IPurchaseItemCreate } from '~/serverSide/controllers/purchase.types'
import type { IProduct } from '~/serverSide/repositories/dto/product.dto'
import { storePayment } from '~/services/api/payment.api'
import { createPurchase } from '~/services/api/purchase.api'
import type { AppState } from '~/store'
import {
  ICartAppState,
  ICartProduct,
  ICartProductDetail,
  setAdding,
  setOpen,
  setProducts,
  setStep,
  updateCart,
  clearCart
} from '~/store/reducers/cart'

import { useIsMounted } from './useIsMounted'

export function useCartItems() {
  const dispatch = useDispatch()
  const products = useSelector<AppState, ICartAppState['products']>(state => state.cart?.products || [])

  const setCartProducts = useCallback(
    (productList: ICartProduct[]) => {
      dispatch(setProducts(productList.sort(compareValues('productId'))))
      dispatch(updateCart({ purchaseId: 0, paymentId: 0 }))
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
  const purchaseId = useSelector<AppState, ICartAppState['purchaseId']>(state => state.cart?.purchaseId)

  const setCartStep = useCallback(
    (step = 0, hasError?: boolean) => {
      dispatch(setStep({ step, stepError: !!hasError }))
    },
    [dispatch]
  )

  return { step, setCartStep, purchaseId }
}

interface ICartAddress {
  addrId: ICartAppState['addrId']
  setCartAddrId: (_addrId: number) => void
  shippingValue: ICartAppState['shippingValue']
  setShippingValue: (_shippingValue: number) => void
}

export function useCartAddress(): ICartAddress {
  const dispatch = useDispatch()
  const addrId = useSelector<AppState, ICartAppState['addrId']>(state => state.cart?.addrId)
  const shippingValue = useSelector<AppState, ICartAppState['shippingValue']>(state => state.cart?.shippingValue)

  const setCartAddrId = useCallback(
    (addrId = 0) => {
      dispatch(updateCart({ addrId, purchaseId: 0, paymentId: 0 }))
    },
    [dispatch]
  )

  const setShippingValue = useCallback(
    (value = 0) => {
      dispatch(updateCart({ shippingValue: value }))
    },
    [dispatch]
  )

  return { addrId, setCartAddrId, shippingValue, setShippingValue }
}

export function useCartPayment() {
  const dispatch = useDispatch()
  const payMode = useSelector<AppState, ICartAppState['payMode']>(state => state.cart?.payMode)
  const payMethod = useSelector<AppState, ICartAppState['payMethod']>(state => state.cart?.payMethod)

  const updateCartPayment = useCallback(
    (cartData: Pick<ICartAppState, 'payMethod' | 'payMode'>) => {
      dispatch(updateCart({ ...cartData }))
    },
    [dispatch]
  )

  return { payMode, payMethod, updateCartPayment }
}

export function createPurchaseCartDto(cart: ICartAppState): IPurchaseCreatePayload {
  const { products = [] } = cart

  const itemsDto = (items: ICartProduct[]): IPurchaseItemCreate[] => {
    return makeArray(items).map(p => {
      return {
        name: p.product.name,
        price: p.price,
        productId: p.productId,
        quantity: p.quantity
      }
    })
  }

  return {
    addrId: cart.addrId || -1,
    payMethod: cart.payMethod,
    payMode: cart.payMode,
    fileId: null,
    items: itemsDto(products),
    shippingValue: Number(`${cart?.shippingValue ?? 0}`) || 0
  }
}

export function useCartPurchase() {
  const isMounted = useIsMounted()
  const dispatch = useDispatch()
  const [saving, setSaving] = useState(false)
  const cartState = useSelector<AppState, ICartAppState>(state => state.cart)

  const updateCartData = useCallback(
    (cartData: Partial<ICartAppState>) => {
      dispatch(updateCart({ ...cartData }))
    },
    [dispatch]
  )

  const savePurchase = useCallback(async () => {
    setSaving(true)
    const response = await createPurchase(createPurchaseCartDto(cartState))
    if (isMounted.current) {
      setSaving(false)
      if (response && response.success) {
        updateCartData({ purchaseId: response.purchaseId })
        return response.purchaseId
      }
    }
    return !!response?.success
  }, [isMounted, cartState, updateCartData])

  const generateCartPayment = useCallback(
    async (paymentId?: number) => {
      setSaving(true)
      const response = await storePayment({
        paymentId,
        purchaseId: cartState.purchaseId,
        payMethod: cartState.payMethod,
        payMode: cartState.payMode
      })

      if (isMounted.current) {
        setSaving(false)
        if (response && response.success) {
          updateCartData({ paymentId: response.paymentId })
        }
      }
      return response
    },
    [isMounted, cartState, updateCartData]
  )

  const clearCartData = useCallback(() => {
    dispatch(clearCart())
  }, [dispatch])

  return { saving, savePurchase, cartState, generateCartPayment, clearCartData }
}
