import type { NextPage, GetServerSideProps } from 'next'

import { Categories } from '~/components/Categories'
import { PageLayout } from '~/components/layouts/PageLayout'
import { PageTitle } from '~/components/PageTitle'
import { ProductList } from '~/components/ProductList'
import { ContentLimit } from '~/components/styled'
import { productsPaginate } from '~/serverSide/repositories/products'
import type { IProduct } from '~/serverSide/repositories/types'

type PageEspatulasProps = {
  products: IProduct[]
}

const PageEspatulas: NextPage<PageEspatulasProps> = ({ products }) => {
  return (
    <PageLayout>
      <ContentLimit horizontalPad={10}>
        <Categories />
        <PageTitle title="Espátulas" description="Estpatulas para decoração de bolos" />
        <ProductList list={products} />
        <br />
      </ContentLimit>
    </PageLayout>
  )
}

export default PageEspatulas

export const getServerSideProps: GetServerSideProps<PageEspatulasProps> = async ({ query }) => {
  const size = parseInt(`${query?.size}` || '10', 10) || 10
  const page = parseInt(`${query?.page}` || '1', 10) || 1
  const products = await productsPaginate({ size, page, category: 'espatulas' })
  return { props: { products } }
}
