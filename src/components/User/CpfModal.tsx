import { Button, Card, CardContent, CardHeader, Modal, Stack, TextField } from '@mui/material'
import { cpf } from 'cpf-cnpj-validator'
import { useSession } from 'next-auth/client'
import { ChangeEventHandler, useCallback, useEffect, useState } from 'react'
import styled from 'styled-components'

import { cpfMask } from '~/helpers/string'
import { useIsMounted } from '~/hooks/useIsMounted'
import { getUserByEmail, updateUser } from '~/services/api/users.api'

import { CircleLoading } from '../CircleLoading'
import { SpanError } from '../Forms/styles'

interface Props {
  onMatch?: (cpf: string) => void
}

export const CpfModal: React.FC<Props> = ({ onMatch }) => {
  const [value, setValue] = useState('')
  const [open, setOpen] = useState(false)
  const [showError, setShowError] = useState(false)

  const isMounted = useIsMounted()
  const [loading, setLoading] = useState(false)

  const [session] = useSession()

  const handleSave = useCallback(async () => {
    if (cpf.isValid(value)) {
      const { success } = await updateUser({ cpf: value })
      if (success) setOpen(false)
    }
  }, [value])

  const fetchData = useCallback(async () => {
    if (session?.user?.email) {
      setLoading(true)
      const { success, user } = await getUserByEmail(session?.user?.email)
      if (isMounted?.current) {
        setLoading(false)
        if (success && !user?.cpf) setOpen(true)
      }
    }
  }, [session, isMounted])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  const maskCpf: ChangeEventHandler<HTMLInputElement> = useCallback(
    async e => {
      setValue(cpfMask(e.target.value))

      if (cpf.isValid(e.target.value)) {
        if (onMatch) {
          onMatch(e.target.value)
        } else {
          // handleSave()
          // await wait(1000).then(async () => {
          //   const { success } = await updateUser({ cpf: e.target.value })
          //   if (success) setOpen(false)
          // })
        }
      } else {
        if (e?.target?.value?.length === 14) setShowError(true)
        else setShowError(false)
      }
    },
    [onMatch]
  )

  return (
    <>
      <Modal open={open}>
        <ModalContainer>
          <Card>
            <CardHeader title="Seu CPF" subheader="Precisamos de seu CPF para concluir o pedido" />
            <CardContent>
              <TextField value={value} placeholder="Digite aqui o seu CPF" onInput={maskCpf} fullWidth />
              <br />
              {showError ? <SpanError>CPF inválido</SpanError> : null}
            </CardContent>
            {/* <CardActions> */}
            <Stack direction={'row'} justifyContent="center" spacing={1} alignContent="center" p={2}>
              {/* <Button color="primary" variant="outlined" onClick={() => setOpen(false)}>
                  Cancelar
                </Button> */}
              <Button color="primary" variant="contained" onClick={handleSave} disabled={!cpf.isValid(value)}>
                Salvar
              </Button>
            </Stack>
            {/* <Box justifyContent="center" alignItems="center">
                <Button color="primary" variant="outlined" onClick={() => setOpen(false)}>
                  Cancelar
                </Button>
              </Box> */}
            {/* </CardActions> */}
          </Card>
        </ModalContainer>
      </Modal>
      {loading ? <CircleLoading light /> : null}
    </>
  )
}

const ModalContainer = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  max-width: 600px;
`
