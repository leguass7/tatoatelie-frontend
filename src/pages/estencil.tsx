import type { NextPage, GetServerSideProps } from 'next'

import { PageLayout } from '~/components/layouts/PageLayout'
import { PageTitle } from '~/components/PageTitle'
import { NoProducts } from '~/components/Product/NoProducts'
import { StencilList } from '~/components/ProductList/StencilList'
import { mergeSegments, Segments } from '~/components/Segments'
import { ContentLimit } from '~/components/styled'
import { Unavailable } from '~/components/Unavailable'
import { Pagination } from '~/serverSide/database/prisma-paginate'
import type { IProduct } from '~/serverSide/repositories/dto/product.dto'
import { serverSidePaginateDto } from '~/serverSide/repositories/dto/serverSidePaginateDto'
import { productsPaginate } from '~/serverSide/repositories/products'
import { ISegment, segmentsFindAll } from '~/serverSide/repositories/segment'

type PageEstencilProps = {
  paginatedProducts: Pagination<IProduct>
  segment?: ISegment
  segments?: ISegment[]
}

const PageEstencil: NextPage<PageEstencilProps> = ({ paginatedProducts, segment, segments }) => {
  return (
    <PageLayout pageTitle={segment?.label} pageDescription={segment?.description} segments={segments}>
      {segment?.actived ? (
        <ContentLimit horizontalPad={10}>
          <Segments list={segments} />
          <PageTitle title={segment.label} />
          {paginatedProducts?.data?.length ? <StencilList list={paginatedProducts?.data || []} /> : <NoProducts />}
          <br />
        </ContentLimit>
      ) : (
        <Unavailable />
      )}
    </PageLayout>
  )
}

export default PageEstencil

export const getServerSideProps: GetServerSideProps<PageEstencilProps> = async ({ query, res }) => {
  const { size, page, order, orderBy } = serverSidePaginateDto(query)
  const segments = await segmentsFindAll()
  const segment = segments.find(s => s.slug === 'estencil')

  const products =
    segment && (await productsPaginate({ size, page, segmentId: segment?.id, order, orderBy: orderBy || 'name' }))

  res.setHeader('Cache-Control', 'public, s-maxage=10, stale-while-revalidate=1')

  return { props: { paginatedProducts: products, segment, segments: mergeSegments(segments) } }
}
