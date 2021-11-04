import { NextPage } from 'next'

import { CenterLayout } from '~/components/layouts/CenterLayout'
import { PageTitle } from '~/components/PageTitle'

const PageTerms: NextPage = ({}) => {
  return (
    <CenterLayout>
      <PageTitle title="Termos de uso" />
    </CenterLayout>
  )
}

export default PageTerms
