import type { GetStaticProps, NextPage } from 'next'
import { useRouter } from 'next/router'
import { useMemo } from 'react'
import styled from 'styled-components'

import homeImg from '~/assets/icons/home.svg'
// import lockImg from '~/assets/icons/lock.svg'
import personImg from '~/assets/icons/person.svg'
import ShoppingBagImg from '~/assets/icons/shopping_bag.svg'
import { PageLayout } from '~/components/layouts/PageLayout'
import { PageTitle } from '~/components/PageTitle'
import { mergeSegments, Segments } from '~/components/Segments'
import { ContentLimit } from '~/components/styled'
// import { ChangePassword } from '~/components/User/ChangePassword'
import { UserAddresses } from '~/components/User/UserAddresses'
import { UserForm } from '~/components/User/UserForm'
import { ISegment, segmentsFindAll } from '~/serverSide/repositories/segment'

export const defaultUserActions: ISegment[] = [
  { id: 1, actived: true, label: 'Dados do usuário', slug: 'me?type=data', image: personImg, customPage: true },
  // {
  //   id: 2,
  //   actived: true,
  //   label: 'Trocar senha',
  //   slug: 'me?type=password',
  //   image: lockImg,
  //   customPage: true
  // },
  {
    id: 3,
    actived: true,
    label: 'Endereços',
    slug: 'me?type=address',
    image: homeImg,
    customPage: true
  },
  {
    id: 4,
    actived: true,
    label: 'Pedidos',
    slug: 'purchase',
    customPage: true,
    image: ShoppingBagImg
  }
]

interface Props {
  segments?: ISegment[]
}

const PageMe: NextPage<Props> = ({ segments = [] }) => {
  const { query } = useRouter()

  const type = useMemo(() => query && query?.type, [query])
  const title = useMemo(() => {
    if (!type || type === 'data') return 'Informações pessoais'
    if (type === 'password') return 'Troca de senha'
    if (type === 'address') return 'Endereços'
  }, [type])

  return (
    <PageLayout segments={segments} pageTitle="Meus dados">
      <ContentLimit horizontalPad={10}>
        <Segments list={defaultUserActions} />
        <Container>
          <PageTitle title={title} />
          {!type || type === 'data' ? <UserForm /> : null}
          {/* {type === 'password' ? <ChangePassword /> : null} */}
          {type === 'address' ? <UserAddresses /> : null}
        </Container>
      </ContentLimit>
    </PageLayout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const segments = await segmentsFindAll()

  return { props: { segments: mergeSegments(segments) }, revalidate: 300 }
}

const Container = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
`

export default PageMe
