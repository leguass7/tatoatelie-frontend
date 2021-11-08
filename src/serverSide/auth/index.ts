import { User } from '.prisma/client'

import { Account, Profile } from 'next-auth'

import { googleCallbackSignIn } from './google'
import { instagramCallbackSignIn } from './instagram'

const callbacks = {
  google: googleCallbackSignIn,
  instagram: instagramCallbackSignIn
}

export function callbackSignin(user: User, account: Account, profile: Profile) {
  const { provider } = account
  console.log('user', user, account, profile)
  if (callbacks[provider]) return callbacks[provider](user, account, profile)
  return true
}
