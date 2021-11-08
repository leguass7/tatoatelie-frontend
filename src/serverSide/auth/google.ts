import { User } from '.prisma/client'

import {
  Account,
  Profile
  //SignInEventMessage
} from 'next-auth'

import prisma from '../database/prisma'

interface GoogleProfile extends Profile {
  id: string
  email: string
  verified_email: boolean
  name: string
  given_name: string
  family_name: string
  picture: string
  locale: string //'pt-BR'
}

export async function googleCallbackSignIn(user: User, _account: Account, profile: GoogleProfile): Promise<boolean> {
  if (profile?.picture && user?.id) {
    try {
      await prisma.user.update({ where: { id: user.id }, data: { image: profile.picture } })
    } catch (error) {
      console.log('googleCallbackSignIn error ', error)
    }
  }

  return true
}
