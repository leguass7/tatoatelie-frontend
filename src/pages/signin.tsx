import { NextPage } from 'next'
import { useSession } from 'next-auth/client'

import { CenterLayout } from '~/components/layouts/CenterLayout'
import { ContentRow } from '~/components/Signin/ContentRow'

const PageSign: NextPage = () => {
  const [session] = useSession()
  console.log('session', session)
  return (
    <CenterLayout>
      <ContentRow />
    </CenterLayout>
  )
}

export default PageSign
