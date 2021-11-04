import { NextPage } from 'next'

import { CenterLayout } from '~/components/layouts/CenterLayout'
import { PageTitle } from '~/components/PageTitle'

const PageRemoveme: NextPage = ({}) => {
  return (
    <CenterLayout>
      <PageTitle title="Remover minha conta" />
    </CenterLayout>
  )
}

export default PageRemoveme
