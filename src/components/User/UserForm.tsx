import { Button } from '@mui/material'
import type { User } from '@prisma/client'
import { FormHandles } from '@unform/core'
import { Form } from '@unform/web'
import { useSession } from 'next-auth/client'
import { ChangeEventHandler, useCallback, useEffect, useRef, useState } from 'react'
import * as Yup from 'yup'

import { cpfMask } from '~/helpers/string'
import { validateFormData } from '~/helpers/validation'
import { useIsMounted } from '~/hooks/useIsMounted'
import { getUserByEmail, updateUser } from '~/services/api/users.api'

import { CircleLoading } from '../CircleLoading'
import { Input } from '../Forms/Input'

interface Props {
  onSuccess?: () => void
}

const schema = Yup.object().shape({
  email: Yup.string().required('E-mail é um campo obrigatório'),
  name: Yup.string().required('Nome é um campo obrigatório'),
  cpf: Yup.string()
})

export const UserForm: React.FC<Props> = ({ onSuccess }) => {
  const [editing, setEditing] = useState(false)
  const formRef = useRef<FormHandles>(null)

  const [loading, setLoading] = useState(false)
  const isMounted = useIsMounted()

  const [{ user: sessionUser = null } = {}] = useSession()
  const [user, setUser] = useState<Partial<User>>({})

  const fetchData = useCallback(async () => {
    if (sessionUser?.email) {
      setLoading(true)
      const response = await getUserByEmail(sessionUser?.email)
      if (isMounted?.current) {
        setLoading(false)
        if (response?.success) setUser(response?.user || {})
      }
    }
  }, [isMounted, sessionUser])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  const handleSubmit = useCallback(
    async data => {
      const isInvalid = await validateFormData(schema, data, formRef.current)
      if (!isInvalid) {
        setLoading(true)
        if (isMounted.current) {
          setLoading(false)
          const response = await updateUser(data)
          if (response?.success && onSuccess) onSuccess()
        }
      }
      setEditing(false)
    },
    [isMounted, onSuccess]
  )

  const maskCpf: ChangeEventHandler<HTMLInputElement> = useCallback(e => {
    if (e?.target?.value) e.target.value = cpfMask(e.target.value)
  }, [])

  return (
    <>
      <Form ref={formRef} onSubmit={handleSubmit} initialData={user}>
        <Input disabled={true} label="E-mail" name="email" />
        <Input disabled={!editing} onInput={maskCpf} label="CPF" name="cpf" />
        <Input disabled={!editing} label="Nome" name="name" />
        {editing ? (
          <Button type="submit" variant="contained" color="primary">
            Enviar
          </Button>
        ) : null}
      </Form>
      {!editing ? (
        <Button variant="contained" color="primary" onClick={() => setEditing(true)}>
          Editar dados
        </Button>
      ) : null}
      {loading ? <CircleLoading light /> : null}
    </>
  )
}
