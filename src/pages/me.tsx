import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useMemo } from 'react'
import styled from 'styled-components'

import { PageLayout } from '~/components/layouts/PageLayout'
import { PageTitle } from '~/components/PageTitle'
import { Segments } from '~/components/Segments'
import { ContentLimit } from '~/components/styled'
import { ChangePassword } from '~/components/User/ChangePassword'
import { UserAddresses } from '~/components/User/UserAddresses'
import { UserForm } from '~/components/User/UserForm'
import { defaultUserActions } from '~/serverSide/repositories/segment'

const PageMe: NextPage = () => {
  const { query } = useRouter()

  const type = useMemo(() => query && query?.type, [query])
  const title = useMemo(() => {
    if (!type || type === 'data') return 'Informações pessoais'
    if (type === 'password') return 'Troca de senha'
    if (type === 'address') return 'Endereços'
  }, [type])

  return (
    <PageLayout pageTitle={'Meus dados'}>
      <ContentLimit horizontalPad={10}>
        <Segments list={defaultUserActions} />
        <Container>
          <PageTitle title={title} />
          {!type || type === 'data' ? <UserForm /> : null}
          {type === 'password' ? <ChangePassword /> : null}
          {type === 'address' ? <UserAddresses /> : null}
        </Container>
      </ContentLimit>
    </PageLayout>
  )
}

const Container = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
`

export default PageMe
