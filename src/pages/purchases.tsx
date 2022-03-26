import { Purchase } from '@prisma/client'
import { GetServerSideProps, NextPage } from 'next'
import { getSession } from 'next-auth/client'
import styled from 'styled-components'

import { PageLayout } from '~/components/layouts/PageLayout'
import { mergeSegments } from '~/components/Segments'
import { serializedDto } from '~/helpers/database'
import { findUserPurchases } from '~/serverSide/repositories/purchases'
import { ISegment, segmentsFindAll } from '~/serverSide/repositories/segment'

interface Props {
  segments?: ISegment[]
  purchases: Purchase[]
}

const Purchases: NextPage<Props> = ({ segments = [], purchases = [] }) => {
  return (
    <PageLayout segments={segments} pageTitle="Meus pedidos">
      <Container>{JSON.stringify(purchases)}</Container>
    </PageLayout>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const segments = await segmentsFindAll()
  const { userId } = await getSession({ req })

  let purchases = []
  if (userId) purchases = await findUserPurchases(userId)

  return { props: { segments: mergeSegments(segments), purchases: serializedDto(purchases) } }
}

const Container = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
`

export default Purchases
