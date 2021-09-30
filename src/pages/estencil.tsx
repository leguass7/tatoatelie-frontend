import type { NextPage, GetServerSideProps } from 'next'
import Head from 'next/head'

import { PageLayout } from '~/components/layouts/PageLayout'
import { PageTitle } from '~/components/PageTitle'
import { ProductList } from '~/components/ProductList'
import { Segments } from '~/components/Segments'
import { ContentLimit } from '~/components/styled'
import { Pagination } from '~/serverSide/database/prisma-paginate'
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
    <>
      <Head>
        <title>{segment.label}</title>
      </Head>
      <PageLayout>
        <ContentLimit horizontalPad={10}>
          <Segments
          // hideId={segment.id}
          />
          <PageTitle title={segment.label} />
          <ProductList list={paginatedProducts?.data || []} />
          <br />
        </ContentLimit>
      </PageLayout>
    </>
  )
}

export default PageEstencil

export const getServerSideProps: GetServerSideProps<PageEstencilProps> = async ({ query }) => {
  const size = parseInt(`${query?.size}` || '10', 100) || 10
  const page = parseInt(`${query?.page}` || '1', 10) || 1
  const segment = await segmentsFindOne({ slug: 'estencil' })
  const products = await productsPaginate({ size, page, segmentId: segment?.id })

  return { props: { paginatedProducts: products, segment } }
}
