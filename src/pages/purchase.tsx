import { GetServerSideProps, NextPage } from 'next'
import { getSession } from 'next-auth/client'
import styled from 'styled-components'

import { PageLayout } from '~/components/layouts/PageLayout'
import { PageTitle } from '~/components/PageTitle'
import { PurchaseList, PurchaseWithItems } from '~/components/Purchases/PurchaseList'
import { mergeSegments, Segments } from '~/components/Segments'
import { findUserPurchases } from '~/serverSide/repositories/purchases'
import { ISegment, segmentsFindAll } from '~/serverSide/repositories/segment'

import { defaultUserActions } from './me'

interface Props {
  segments?: ISegment[]
  purchases: PurchaseWithItems[]
}

const Purchases: NextPage<Props> = ({ segments = [], purchases = [] }) => {
  return (
    <PageLayout segments={segments} pageTitle="Meus pedidos">
      <Segments list={defaultUserActions} />
      <Container>
        <PageTitle title="Meus Pedidos" />
        <PurchaseList purchases={purchases} />
      </Container>
    </PageLayout>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const segments = await segmentsFindAll()
  const { userId } = await getSession({ req })

  let purchases = []
  if (userId) purchases = await findUserPurchases(userId)

  return { props: { segments: mergeSegments(segments), purchases } }
}

const Container = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
`

export default Purchases
