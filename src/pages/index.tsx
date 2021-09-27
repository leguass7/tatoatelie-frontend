import type { NextPage } from 'next'

import { PageLayout } from '~/components/layouts/PageLayout'
import { ContentLimit } from '~/components/styled'

const Home: NextPage = () => {
  return (
    <PageLayout>
      <ContentLimit>
        <p>growing</p>
      </ContentLimit>
    </PageLayout>
  )
}

export default Home
