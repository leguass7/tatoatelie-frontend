import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { useRouter } from 'next/router'
import React from 'react'

export const Unavailable: React.FC = () => {
  const { replace } = useRouter()

  return (
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
  )
}
