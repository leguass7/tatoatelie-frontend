import type { GetServerSideProps, NextPage } from 'next'

import { DrawerAddingProduct } from '~/components/Cart/DrawerAddingProduct'
import { PageLayout } from '~/components/layouts/PageLayout'
import { ActionBar } from '~/components/Product/ActionBar'
import { ProductPresentation } from '~/components/Product/ProductPresentation'
import { Segments } from '~/components/Segments'
import { ContentLimit } from '~/components/styled'
import { productsFindOne } from '~/serverSide/repositories/products'
import type { IProduct } from '~/serverSide/repositories/types'

type PageSegmentProps = {
  product?: IProduct
}

const PageProduct: NextPage<PageSegmentProps> = ({ product }) => {
  return (
    <PageLayout pageTitle={product.name}>
      <ContentLimit horizontalPad={10}>
        <Segments />
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

  const product = await productsFindOne(slug)
  if (!product) {
    return {
      redirect: {
        permanent: false,
        destination: '/'
      }
    }
  }

  return { props: { product } }
}
