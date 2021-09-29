import type { NextPage } from 'next'
import { useEffect } from 'react'

import { Categories } from '~/components/Categories'
import { PageLayout } from '~/components/layouts/PageLayout'
import { ContentLimit } from '~/components/styled'
import { Video } from '~/components/Video'
import { install } from '~/services/gtag'

//cpLBaVBMg2Y
const PageHome: NextPage = ({}) => {
  useEffect(() => {
    install()
  }, [])
  return (
    <PageLayout>
      <ContentLimit horizontalPad={10}>
        <Categories />
        <br />
        <Video videoId="3v-PTeM0Ksk" />
        <br />
      </ContentLimit>
    </PageLayout>
  )
}

export default PageHome
