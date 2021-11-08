import { NextPage } from 'next'
import { useSession } from 'next-auth/client'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

import { CenterLayout } from '~/components/layouts/CenterLayout'
import { ContentRow } from '~/components/Signin/ContentRow'

type PageSigninProps = {}

const PageSign: NextPage<PageSigninProps> = () => {
  const [session] = useSession()
  const { replace } = useRouter()

  useEffect(() => {
    if (session && session.user) {
      replace('/')
    }
  }, [session, replace])

  return (
    <CenterLayout>
      <ContentRow />
    </CenterLayout>
  )
}

export default PageSign
