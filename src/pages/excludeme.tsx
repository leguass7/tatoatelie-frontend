import { NextPage } from 'next'
import { useSession } from 'next-auth/client'
import Link from 'next/link'

import { ExcludeInstructions } from '~/components/contents/ExcludeInstructions'
import { ExcludeRequester } from '~/components/contents/ExcludeRequester'
import { CenterLayout } from '~/components/layouts/CenterLayout'
import { PageTitle } from '~/components/PageTitle'
import { ContentLimit, Paragraph } from '~/components/styled'

const PageExcludeme: NextPage = ({}) => {
  const session = useSession()
  return (
    <CenterLayout>
      <ContentLimit horizontalSpaced>
        <PageTitle title="Solicitação de exclusão de dados" />
        <Paragraph>
          Caso precise excluir as informações dos servidores da <Link href="/">Tato Ateliê</Link> por qualquer motivo,
          poderá usar esse recurso para pedir a remoção.
        </Paragraph>
      </ContentLimit>
      <ContentLimit horizontalSpaced>{session ? <ExcludeInstructions /> : <ExcludeRequester />}</ContentLimit>
    </CenterLayout>
  )
}

export default PageExcludeme
