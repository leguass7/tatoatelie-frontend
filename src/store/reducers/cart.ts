import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import type { PayMethod, PayMode } from '~/serverSide/controllers/payment.types'

export interface ICartProductDetail {
  slug: string
  name: string
  size: number
  actived?: boolean
  imageUrl?: string
  kind?: {
    id: number
    label?: string
  }
}
export interface ICartProduct {
  productId: number
  quantity: number
  price: number
  product: ICartProductDetail
}
export interface ICartAppState {
  readonly open?: boolean
  readonly adding?: number
  readonly step?: number | null
  readonly stepError?: boolean
  readonly loading: boolean
  readonly lastModification?: number
  readonly addrId?: number
  readonly purchaseId?: number | null
  readonly paymentId?: number | null
  readonly payMethod?: PayMethod
  readonly payMode?: PayMode
  readonly products?: ICartProduct[]
}

const initialState: ICartAppState = {
  open: false,
  adding: null,
  loading: false,
  step: 0,
  stepError: false,
  products: [],
  lastModification: 0,
  addrId: 0,
  purchaseId: 0
}

export const slice = createSlice({
  name: '@cart',
  initialState,
  reducers: {
    loadRequest: state => {
      state.loading = true
    },
    loadSuccess: (state, { payload }: PayloadAction<Partial<ICartAppState>>) => {
      state.loading = false
      Object.keys(payload).forEach(k => {
        state[k] = payload[k]
      })
    },
    loadFailure: state => {
      state.loading = false
    },
    setStep: (state, { payload }: PayloadAction<Pick<ICartAppState, 'step' | 'stepError'>>) => {
      state.step = payload.step || 0
      state.stepError = !!payload.stepError
    },
    setOpen: (state, { payload }: PayloadAction<ICartAppState['open']>) => {
      state.open = payload
    },
    setAdding: (state, { payload }: PayloadAction<ICartAppState['adding']>) => {
      state.adding = payload
    },
    setProducts: (state, { payload }: PayloadAction<ICartAppState['products']>) => {
      state.lastModification = new Date().getTime() / 1000
      state.products = payload
    },
    updateCart: (state, { payload }: PayloadAction<Partial<ICartAppState>>) => {
      Object.keys(payload).forEach(k => {
        state[k] = payload[k]
      })
      // Object.assign(state, payload)
    },
    clearCart: state => {
      Object.keys(initialState).forEach(k => {
        state[k] = initialState[k]
      })
    }
  }
})

export const {
  loadFailure,
  loadRequest,
  loadSuccess,
  setStep,
  setProducts,
  updateCart,
  setOpen,
  setAdding,
  clearCart
} = slice.actions
export default slice.reducer
