import { Box, Button, Typography } from '@mui/material'
import { useRouter } from 'next/router'

import { PageLayout } from '~/components/layouts/PageLayout'

export default function Custom404() {
  const { replace } = useRouter()

  return (
    <PageLayout pageTitle={'Tato Ateliê'}>
      <Box
        height="100%"
        display="flex"
        flexDirection="column"
        textAlign="center"
        justifyContent="center"
        alignItems="center"
      >
        <Typography variant="h4">Página não encontrada</Typography>
        <br />
        <Button onClick={() => replace('/')}>Voltar para o início</Button>
      </Box>
    </PageLayout>
  )
}
