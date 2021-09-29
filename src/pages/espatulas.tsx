import type { NextPage, GetServerSideProps } from 'next'

import { Categories } from '~/components/Categories'
import { PageLayout } from '~/components/layouts/PageLayout'
import { PageTitle } from '~/components/PageTitle'
import { ProductList } from '~/components/ProductList'
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

const PageEspatulas: NextPage<PageEspatulasProps> = ({ paginatedProducts }) => {
  return (
    <PageLayout>
      <ContentLimit horizontalPad={10}>
        <Categories />
        <PageTitle title="Espátulas" description="Estpatulas para decoração de bolos" />
        <ProductList list={paginatedProducts?.data || []} />
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
