import { Card, CardHeader } from '@mui/material'
import { GetServerSideProps, NextPage } from 'next'
import styled from 'styled-components'

import { PageLayout } from '~/components/layouts/PageLayout'
import { PageTitle } from '~/components/PageTitle'
import { PurchaseWithItems } from '~/components/Purchases/PurchaseList'
import { mergeSegments } from '~/components/Segments'
import { formatDate } from '~/helpers/string'
import { purchaseFindOne } from '~/serverSide/repositories/purchases'
import { ISegment, segmentsFindAll } from '~/serverSide/repositories/segment'

interface Props {
  purchase: PurchaseWithItems
  segments: ISegment[]
}

const Purchase: NextPage<Props> = ({ purchase, segments }) => {
  const { createdAt } = purchase
  const [{ name = '' } = {}] = purchase?.items

  return (
    <PageLayout segments={segments}>
      <Container>
        <PageTitle title="Descrição do pedido" />
        <Card>
          <CardHeader title={name} subheader={formatDate(createdAt, 'dd/MM/yyyy HH:mm:ss')} />
        </Card>
      </Container>
    </PageLayout>
  )
}

export const getServerSideProps: GetServerSideProps<Props> = async ({ params }) => {
  const id = parseInt(`${params?.purchaseId || 0}`) || 0
  let purchase = null
  if (id) purchase = await purchaseFindOne({ where: { id }, include: { address: true, items: true, payments: true } })
  const segments = await segmentsFindAll()

  return {
    props: { purchase, segments: mergeSegments(segments) }
  }
}

const Container = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
`

export default Purchase
