import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface IAuthAppState {
  readonly token: string
}

const initialState: IAuthAppState = {
  token: ''
}

export const slice = createSlice({
  name: '@auth',
  initialState,
  reducers: {
    setAuth: (state, { payload }: PayloadAction<Partial<IAuthAppState>>) => {
      Object.keys(payload).forEach(k => {
        state[k] = payload[k]
      })
    },
    clearAuth: state => {
      Object.keys(initialState).forEach(k => {
        state[k] = initialState[k]
      })
    }
  }
})

export const { setAuth, clearAuth } = slice.actions
export default slice.reducer
