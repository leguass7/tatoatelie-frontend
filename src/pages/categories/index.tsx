import type { NextPage } from 'next'

import { Categories } from '~/components/Categories'
import { PageLayout } from '~/components/layouts/PageLayout'
import { PageTitle } from '~/components/PageTitle'
import { ProductList } from '~/components/ProductList'
import { ContentLimit } from '~/components/styled'
import { products } from '~/services/gtag/makeData/mock'

const PageCategories: NextPage = () => {
  return (
    <PageLayout>
      <ContentLimit horizontalPad={10}>
        <Categories />
        <PageTitle title="Nome da categoria" />
        <ProductList list={products} />
        <br />
      </ContentLimit>
    </PageLayout>
  )
}

export default PageCategories
