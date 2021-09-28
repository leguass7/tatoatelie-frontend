import type { GetServerSideProps, NextPage } from 'next'

import { Categories } from '~/components/Categories'
import { PageLayout } from '~/components/layouts/PageLayout'
import { PageTitle } from '~/components/PageTitle'
import { ProductList } from '~/components/ProductList'
import { ContentLimit } from '~/components/styled'
import { productsPaginate } from '~/serverSide/repositories/products'
import type { IProduct } from '~/serverSide/repositories/types'

type PageCategoriesProps = {
  products: IProduct[]
}

const PageCategories: NextPage<PageCategoriesProps> = ({ products }) => {
  return (
    <PageLayout>
      <ContentLimit horizontalPad={10}>
        <Categories />
        <PageTitle title="Nome da categoria" />
        <ProductList list={products} />
        <br />
      </ContentLimit>
    </PageLayout>
  )
}

export default PageCategories

export const getServerSideProps: GetServerSideProps<PageCategoriesProps, { category?: string }> = async ({
  params,
  query
}) => {
  const size = parseInt(`${query?.size}` || '10', 10) || 10
  const page = parseInt(`${query?.page}` || '1', 10) || 1
  const products = await productsPaginate({ size, page, category: params?.category || '' })
  return { props: { products } }
}
