import type { NextPage, GetServerSideProps } from 'next'

import { PageLayout } from '~/components/layouts/PageLayout'
import { PageTitle } from '~/components/PageTitle'
import { NoProducts } from '~/components/Product/NoProducts'
import { ProductList } from '~/components/ProductList'
import { Segments } from '~/components/Segments'
import { ContentLimit } from '~/components/styled'
import { Pagination } from '~/serverSide/database/prisma-paginate'
import { productsPaginate } from '~/serverSide/repositories/products'
import { segmentsFindOne } from '~/serverSide/repositories/segment'
import type { ISegment } from '~/serverSide/repositories/segment'
import type { IProduct } from '~/serverSide/repositories/types'

type PageEspatulasProps = {
  paginatedProducts: Pagination<IProduct>
  segment?: ISegment
}

const PageEspatulas: NextPage<PageEspatulasProps> = ({ paginatedProducts, segment }) => {
  return (
    <PageLayout pageTitle={segment?.label} pageDescription={segment?.description}>
      <ContentLimit horizontalPad={10}>
        <Segments />
        <PageTitle title={segment.label} description="Estpatulas para decoração de bolos" />
        {paginatedProducts?.data.length ? <ProductList list={paginatedProducts.data || []} /> : <NoProducts />}
        <br />
      </ContentLimit>
    </PageLayout>
  )
}

export default PageEspatulas

export const getServerSideProps: GetServerSideProps<PageEspatulasProps> = async ({ query }) => {
  const size = parseInt(`${query?.size}` || '10', 100) || 10
  const page = parseInt(`${query?.page}` || '1', 10) || 1
  const segment = await segmentsFindOne({ slug: 'espatulas' })
  const products = await productsPaginate({ size, page, segmentId: segment?.id })

  return { props: { paginatedProducts: products, segment } }
}
