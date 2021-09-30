import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'

import { PageLayout } from '~/components/layouts/PageLayout'
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
    <>
      <Head>
        <title>{product?.name}</title>
      </Head>
      <PageLayout>
        <ContentLimit horizontalPad={10}>
          <Segments />
          <ProductPresentation product={product} />
          <br />
        </ContentLimit>
      </PageLayout>
    </>
  )
}

export default PageProduct

export const getServerSideProps: GetServerSideProps<PageSegmentProps, { slug: string }> = async ({ params }) => {
  const slug = params?.slug

  const product = await productsFindOne(slug)

  return { props: { product } }
}
