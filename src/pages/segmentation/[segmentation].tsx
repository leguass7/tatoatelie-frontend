import type { GetServerSideProps, NextPage } from 'next'

import { PageLayout } from '~/components/layouts/PageLayout'
import { PageTitle } from '~/components/PageTitle'
import { NoProducts } from '~/components/Product/NoProducts'
import { GenericList } from '~/components/ProductList/GenericList'
import { mergeSegments, Segments } from '~/components/Segments'
import { ContentLimit } from '~/components/styled'
import { Pagination } from '~/serverSide/database/prisma-paginate'
import type { IProduct } from '~/serverSide/repositories/dto/product.dto'
import { serverSidePaginateDto } from '~/serverSide/repositories/dto/serverSidePaginateDto'
import { productsPaginate } from '~/serverSide/repositories/products'
import { ISegment, segmentsFindAll } from '~/serverSide/repositories/segment'

type PageSegmentProps = {
  paginatedProducts: Pagination<IProduct>
  segment?: ISegment
  segments?: ISegment[]
}

const PageSegments: NextPage<PageSegmentProps> = ({ paginatedProducts, segment, segments = [] }) => {
  return (
    <PageLayout pageTitle={segment?.label} pageDescription={segment?.description} segments={segments}>
      <ContentLimit horizontalPad={10}>
        <Segments list={segments} />
        <PageTitle title={segment?.label} />
        {paginatedProducts?.data?.length ? <GenericList list={paginatedProducts?.data || []} /> : <NoProducts />}
        <br />
      </ContentLimit>
    </PageLayout>
  )
}

export default PageSegments

export const getServerSideProps: GetServerSideProps<PageSegmentProps, { segmentation: string }> = async ({
  params,
  query
}) => {
  const { size, page, order, orderBy } = serverSidePaginateDto(query)

  const segments = await segmentsFindAll()
  const segment = segments.find(s => s.slug === params?.segmentation)

  const products = await productsPaginate({ size, page, segmentId: segment?.id, order, orderBy: orderBy || 'name' })

  return { props: { paginatedProducts: products, segment, segments: mergeSegments(segments) } }
}
