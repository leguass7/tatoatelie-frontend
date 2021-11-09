import { combineReducers } from 'redux'
import storage from 'redux-persist/lib/storage'

import { appName, appVersion } from '~/config'

import cart from './cart'
import user from './user'

export const rootReducer = combineReducers({
  user,
  cart
})

export const persistConfig = {
  key: `store-${appName}-${appVersion}`,
  storage,
  whitelist: ['user', 'cart']
}
