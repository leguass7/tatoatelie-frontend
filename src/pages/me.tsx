import type { NextPage } from 'next'

import { PageLayout } from '~/components/layouts/PageLayout'
import { ContentLimit } from '~/components/styled'

const PageMe: NextPage = ({}) => {
  return (
    <PageLayout pageTitle={'Meus dados'}>
      <ContentLimit horizontalPad={10}>Página de dados do usuário</ContentLimit>
    </PageLayout>
  )
}

export default PageMe
