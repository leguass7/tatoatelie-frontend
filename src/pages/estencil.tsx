import type { NextPage, GetServerSideProps } from 'next'

import { PageLayout } from '~/components/layouts/PageLayout'
import { PageTitle } from '~/components/PageTitle'
import { NoProducts } from '~/components/Product/NoProducts'
// import { ProductList } from '~/components/ProductList'
import { StencilList } from '~/components/ProductList/StencilList'
import { Segments } from '~/components/Segments'
import { ContentLimit } from '~/components/styled'
import { Pagination } from '~/serverSide/database/prisma-paginate'
import { serverSidePaginateDto } from '~/serverSide/repositories/dto/serverSidePaginateDto'
import { productsPaginate } from '~/serverSide/repositories/products'
import { segmentsFindOne } from '~/serverSide/repositories/segment'
import type { ISegment } from '~/serverSide/repositories/segment'
import type { IProduct } from '~/serverSide/repositories/types'

type PageEstencilProps = {
  paginatedProducts: Pagination<IProduct>
  segment?: ISegment
}

const PageEstencil: NextPage<PageEstencilProps> = ({ paginatedProducts, segment }) => {
  return (
    <PageLayout pageTitle={segment?.label} pageDescription={segment?.description}>
      <ContentLimit horizontalPad={10}>
        <Segments />
        <PageTitle title={segment.label} />
        {paginatedProducts?.data.length ? <StencilList list={paginatedProducts.data || []} /> : <NoProducts />}
        <br />
      </ContentLimit>
    </PageLayout>
  )
}

export default PageEstencil

export const getServerSideProps: GetServerSideProps<PageEstencilProps> = async ({ query }) => {
  const { size, page, order, orderBy } = serverSidePaginateDto(query)

  const segment = await segmentsFindOne({ slug: 'estencil' })
  const products = await productsPaginate({ size, page, segmentId: segment?.id, order, orderBy: orderBy || 'name' })

  return { props: { paginatedProducts: products, segment } }
}
