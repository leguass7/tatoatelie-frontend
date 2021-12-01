import { User } from '.prisma/client'

import { Account, Profile } from 'next-auth'

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

function tryInt(value: string | number) {
  try {
    if (typeof value === 'number') return value
    else {
      const id = value ? parseInt(`${value}`, 10) || null : null
      return id
    }
  } catch (error) {
    return null
  }
}

export async function googleCallbackSignIn(user: User, account: Account, profile: GoogleProfile): Promise<boolean> {
  let where: any = undefined
  const email = user?.email || profile?.email || undefined
  const id = tryInt(user?.id) || undefined

  if (email) where = { email }
  else if (id) where = { id }

  if (!!where && profile?.picture) {
    try {
      await prisma.user.update({ where, data: { image: profile.picture } })
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(`googleCallbackSignIn`, `\nprofile: ${profile}`, `\nuser: ${user}`, `\nerror: ${error}`)
    }
  }

  return true
}
