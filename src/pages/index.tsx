import type { NextPage } from 'next'

import { Categories } from '~/components/Categories'
import { PageLayout } from '~/components/layouts/PageLayout'
import { ContentLimit } from '~/components/styled'

const Home: NextPage = () => {
  return (
    <PageLayout>
      <ContentLimit horizontalPad={10}>
        <Categories />
        <p>growing</p>
      </ContentLimit>
    </PageLayout>
  )
}

export default Home
