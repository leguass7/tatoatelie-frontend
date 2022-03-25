import { Box, Button, Typography } from '@mui/material'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'

import { PageLayout } from '~/components/layouts/PageLayout'
import { mergeSegments } from '~/components/Segments'
import { ISegment, segmentsFindAll } from '~/serverSide/repositories/segment'

interface Props {
  segments?: ISegment[]
}

export default function Custom404({ segments = [] }: Props) {
  const { replace } = useRouter()

  return (
    <PageLayout segments={segments} pageTitle={'Tato Ateliê'}>
      <Box
        height="100%"
        display="flex"
        flexDirection="column"
        textAlign="center"
        justifyContent="center"
        alignItems="center"
      >
        <Typography variant="h4">Página temporariamente indisponível</Typography>
        <br />
        <Button onClick={() => replace('/')}>Voltar para o início</Button>
      </Box>
    </PageLayout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const segments = await segmentsFindAll()

  return { props: { segments: mergeSegments(segments) }, revalidate: 300 }
}
