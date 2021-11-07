import { NextPage } from 'next'

// import { useSession } from 'next-auth/client'

import { CenterLayout } from '~/components/layouts/CenterLayout'
import { ContentRow } from '~/components/Signin/ContentRow'

type PageSigninProps = {}

const PageSign: NextPage<PageSigninProps> = () => {
  // const [session] = useSession()
  // console.log('session', session)
  return (
    <CenterLayout>
      <ContentRow />
    </CenterLayout>
  )
}

export default PageSign

// export async function getServerSideProps<PageSigninProps>(context) {
//   return {
//     props: {
//       csrfToken: await getCsrfToken(context)
//     }
//   }
// }

// export const getServerSideProps: GetServerSideProps<PageSigninProps> = async context => {
//   const csrfToken = await getCsrfToken(context)
//   console.log('csrfToken', csrfToken)
//   return {
//     props: {
//       // csrfToken: await getCsrfToken(context)
//     }
//   }
// }
