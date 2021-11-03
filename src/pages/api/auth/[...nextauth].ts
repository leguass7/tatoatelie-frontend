import { NextApiHandler } from 'next'
import NextAuth, { NextAuthOptions } from 'next-auth'
import { Prisma } from 'next-auth/adapters'
import Providers from 'next-auth/providers'

import prisma from '~/serverSide/database/prisma'

const secret = process.env.SECRET

const options: NextAuthOptions = {
  secret,
  session: {
    jwt: true,
    maxAge: 30 * 24 * 60 * 60 // 30 days
  },
  jwt: { secret },
  adapter: Prisma.Adapter({ prisma }),
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      // authorizationUrl força o google a perguntar "qual conta usar" e renovar token
      authorizationUrl:
        'https://accounts.google.com/o/oauth2/v2/auth?prompt=consent&access_type=offline&response_type=code'
    })
  ]
}

const authHandler: NextApiHandler = (req, res) => NextAuth(req, res, options)
export default authHandler

// export default NextAuth({
//   secret,
//   session: {
//     jwt: true,
//     maxAge: 30 * 24 * 60 * 60 // 30 days
//   },
//   jwt: { secret },
//   adapter: Prisma.Adapter({ prisma }),
//   providers: [
//     Providers.Google({
//       clientId: process.env.GOOGLE_ID,
//       clientSecret: process.env.GOOGLE_SECRET,
//       // authorizationUrl força o google a perguntar "qual conta usar" e renovar token
//       authorizationUrl:
//         'https://accounts.google.com/o/oauth2/v2/auth?prompt=consent&access_type=offline&response_type=code'
//     })
//   ]
// })
