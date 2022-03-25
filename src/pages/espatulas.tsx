import type { NextPage, GetServerSideProps } from 'next'

import { PageLayout } from '~/components/layouts/PageLayout'
import { PageTitle } from '~/components/PageTitle'
import { NoProducts } from '~/components/Product/NoProducts'
import { ProductList } from '~/components/ProductList'
import { mergeSegments, Segments } from '~/components/Segments'
import { ContentLimit } from '~/components/styled'
import { Unavailable } from '~/components/Unavailable'
import { Pagination } from '~/serverSide/database/prisma-paginate'
import type { IProduct } from '~/serverSide/repositories/dto/product.dto'
import { serverSidePaginateDto } from '~/serverSide/repositories/dto/serverSidePaginateDto'
import { productsPaginate } from '~/serverSide/repositories/products'
import { segmentsFindAll } from '~/serverSide/repositories/segment'
import type { ISegment } from '~/serverSide/repositories/segment'

type PageEspatulasProps = {
  paginatedProducts: Pagination<IProduct>
  segment?: ISegment
  segments?: ISegment[]
}

const PageEspatulas: NextPage<PageEspatulasProps> = ({ paginatedProducts, segment, segments = [] }) => {
  return (
    <PageLayout pageTitle={segment?.label} pageDescription={segment?.description} segments={segments}>
      {segment?.actived ? (
        <ContentLimit horizontalPad={10}>
          <Segments list={segments} />
          <PageTitle title={segment.label} description="Estpatulas para decoração de bolos" />
          {paginatedProducts?.data.length ? <ProductList list={paginatedProducts.data || []} /> : <NoProducts />}
          <br />
        </ContentLimit>
      ) : (
        <Unavailable />
      )}
    </PageLayout>
  )
}

export default PageEspatulas

// export const getServerSideProps: GetServerSideProps<PageEspatulasProps> = async ({ query }) => {
//   const { size, page, order, orderBy } = serverSidePaginateDto(query)

//   const segment = await segmentsFindOne({ slug: 'espatulas' })
//   const products = await productsPaginate({ size, page, segmentId: segment?.id, order, orderBy: orderBy || 'name' })

//   return { props: { paginatedProducts: products, segment } }
// }

export const getServerSideProps: GetServerSideProps<PageEspatulasProps> = async ({ query, res }) => {
  const { size, page, order, orderBy } = serverSidePaginateDto(query)
  const segments = await segmentsFindAll()
  const segment = segments.find(s => s.slug === 'espatulas')

  const products =
    segment && (await productsPaginate({ size, page, segmentId: segment?.id, order, orderBy: orderBy || 'name' }))

  res.setHeader('Cache-Control', 'public, s-maxage=10, stale-while-revalidate=1')

  return { props: { paginatedProducts: products, segment, segments: mergeSegments(segments) } }
}
