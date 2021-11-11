import { combineReducers } from 'redux'
// import storage from 'redux-persist/lib/storage'
import createWebStorage from 'redux-persist/lib/storage/createWebStorage'

import { appName, appVersion } from '~/config'

import cart from './cart'
import user from './user'

export const rootReducer = combineReducers({
  user,
  cart
})

function createNoopStorage() {
  return {
    getItem(_key: string) {
      return Promise.resolve(null)
    },
    setItem(_key: string, value: any) {
      return Promise.resolve(value)
    },
    removeItem(_key: string) {
      return Promise.resolve()
    }
  }
}

const isServer = typeof window === 'undefined'
const storage = isServer ? createNoopStorage() : createWebStorage('web')

export const persistConfig = {
  key: `store-${appName}-${appVersion}`,
  storage,
  whitelist: ['user', 'cart']
}
