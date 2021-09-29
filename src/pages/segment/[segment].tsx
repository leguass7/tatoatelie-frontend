import type { GetServerSideProps, NextPage } from 'next'

import { Categories } from '~/components/Categories'
import { PageLayout } from '~/components/layouts/PageLayout'
import { PageTitle } from '~/components/PageTitle'
import { ProductList } from '~/components/ProductList'
import { ContentLimit } from '~/components/styled'
import { Pagination } from '~/serverSide/database/prisma-paginate'
import { productsPaginate } from '~/serverSide/repositories/products'
import { ISegment, segmentsFindOne } from '~/serverSide/repositories/segment'
import type { IProduct } from '~/serverSide/repositories/types'

type PageSegmentProps = {
  paginatedProducts: Pagination<IProduct>
  segment?: ISegment
}

const PageSegments: NextPage<PageSegmentProps> = ({ paginatedProducts }) => {
  return (
    <PageLayout>
      <ContentLimit horizontalPad={10}>
        <Categories />
        <PageTitle title="Nome da categoria" />
        <ProductList list={paginatedProducts.data || []} />
        <br />
      </ContentLimit>
    </PageLayout>
  )
}

export default PageSegments

export const getServerSideProps: GetServerSideProps<PageSegmentProps, { segment: string }> = async ({
  params,
  query
}) => {
  const size = parseInt(`${query?.size}` || '10', 100) || 10
  const page = parseInt(`${query?.page}` || '1', 10) || 1
  const segment = await segmentsFindOne({ slug: params?.segment })
  const products = await productsPaginate({ size, page, segmentId: segment?.id })

  return { props: { paginatedProducts: products, segment } }
}
