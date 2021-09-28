import type { NextPage } from 'next'

import { Categories } from '~/components/Categories'
import { PageLayout } from '~/components/layouts/PageLayout'
import { ContentLimit } from '~/components/styled'

const PageHome: NextPage = () => {
  return (
    <PageLayout>
      <ContentLimit horizontalPad={10}>
        <Categories />
      </ContentLimit>
    </PageLayout>
  )
}

export default PageHome
