import { GetServerSideProps, NextPage } from 'next'

import { FormRegister } from '~/components/FormRegister'
import { PageLayout } from '~/components/layouts/PageLayout'
import { PageTitle } from '~/components/PageTitle'
import { mergeSegments } from '~/components/Segments'
import { ContentLimit } from '~/components/styled'
import { ISegment, segmentsFindAll } from '~/serverSide/repositories/segment'

type PageEspatulasProps = {
  segments?: ISegment[]
}

const PageRegister: NextPage<PageEspatulasProps> = ({ segments }) => {
  return (
    <PageLayout
      pageTitle={'Registrar-se'}
      pageDescription={'Cadastre-se para fazer compras no nosso site'}
      segments={segments}
    >
      <ContentLimit horizontalPad={10} widthLimit={500}>
        <PageTitle title="Registrar-se" description="Cadastre-se para fazer compras no nosso site" />
        <FormRegister />
      </ContentLimit>
    </PageLayout>
  )
}

export default PageRegister

export const getServerSideProps: GetServerSideProps<PageEspatulasProps> = async () => {
  const segments = await segmentsFindAll()

  return { props: { segments: mergeSegments(segments) } }
}
