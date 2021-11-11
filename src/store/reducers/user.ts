import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface IUserAppState {
  readonly loading: boolean
  readonly id: number | string
  readonly email: string
  readonly level: number
}

const initialState: IUserAppState = {
  loading: false,
  id: 0,
  email: '',
  level: 0
}

export const slice = createSlice({
  name: '@user',
  initialState,
  reducers: {
    loadRequest: state => {
      state.loading = true
    },
    loadSuccess: (state, { payload }: PayloadAction<Partial<IUserAppState>>) => {
      state.loading = false
      state.id = payload?.id
      state.email = payload?.email || ''
      state.level = payload?.level || 0
    },
    loadFailure: state => {
      state.loading = false
      state.id = 0
      state.email = ''
      state.level = 0
    }
  }
})

export const { loadFailure, loadRequest, loadSuccess } = slice.actions
export default slice.reducer
