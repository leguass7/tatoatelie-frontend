import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface ICartProduct {
  id: number
}
export interface ICartAppState {
  readonly step?: number | null
  readonly loading: boolean
  readonly lastModification?: number
  readonly addrId?: number
  readonly purchaseId?: number | null
  readonly products?: ICartProduct[]
}

const initialState: ICartAppState = {
  loading: false,
  step: 0,
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
      Object.assign(state, payload)
    },
    loadFailure: state => {
      state.loading = false
    },
    setStep: (state, { payload }: PayloadAction<ICartAppState['step']>) => {
      state.step = payload
    },
    setProducts: (state, { payload }: PayloadAction<ICartAppState['products']>) => {
      state.lastModification = new Date().getTime() / 1000
      state.products = payload
    },
    updateCart: (state, { payload }: PayloadAction<Partial<ICartAppState>>) => {
      Object.assign(state, payload)
    }
  }
})

export const { loadFailure, loadRequest, loadSuccess } = slice.actions
export default slice.reducer
