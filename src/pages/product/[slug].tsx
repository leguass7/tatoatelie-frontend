import type { GetServerSideProps, NextPage } from 'next'

import { DrawerAddingProduct } from '~/components/Cart/DrawerAddingProduct'
import { PageLayout } from '~/components/layouts/PageLayout'
import { ActionBar } from '~/components/Product/ActionBar'
import { ProductPresentation } from '~/components/Product/ProductPresentation'
import { mergeSegments, Segments } from '~/components/Segments'
import { ContentLimit } from '~/components/styled'
import type { IProduct } from '~/serverSide/repositories/dto/product.dto'
import { productsFindOne } from '~/serverSide/repositories/products'
import { ISegment, segmentsFindAll } from '~/serverSide/repositories/segment'

type PageSegmentProps = {
  product?: IProduct
  segments?: ISegment[]
}

const PageProduct: NextPage<PageSegmentProps> = ({ product, segments = [] }) => {
  return (
    <PageLayout segments={segments} pageTitle={product.name}>
      <ContentLimit horizontalPad={10}>
        <Segments list={segments} />
        <ProductPresentation product={product} />
        <ActionBar product={product} />
        <br />
      </ContentLimit>
      <DrawerAddingProduct />
    </PageLayout>
  )
}

export default PageProduct

export const getServerSideProps: GetServerSideProps<PageSegmentProps, { slug: string }> = async ({ params }) => {
  const slug = params?.slug
  const segments = await segmentsFindAll()

  const product = await productsFindOne(slug)
  if (!product) {
    return {
      redirect: {
        permanent: false,
        destination: '/'
      }
    }
  }

  return { props: { product, segments: mergeSegments(segments) } }
}
