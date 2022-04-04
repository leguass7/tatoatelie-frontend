import { FormHandles } from '@unform/core'
import { Form } from '@unform/web'
import React, { ChangeEventHandler, useCallback, useRef, useState } from 'react'

import { cpfMask } from '~/helpers/string'
import { tostifyErros } from '~/helpers/toastfy'
import { validateFormData } from '~/helpers/validation'
import { registerUserSchema } from '~/helpers/validation/register-user.validation'
import { IRequestRegister, registerUser } from '~/services/api/register.api'

import { useAppTheme } from '../AppThemeProvider/useAppTheme'
import { FormButton } from '../Forms/FormButton'
import { FormErrorChips } from '../Forms/FormErrorChips'
import { FormGroup } from '../Forms/FormGroup'
import { Input } from '../Forms/Input'
import { Divider } from '../styled'

type Props = {
  onSuccess?: (userId?: number) => void
  onCancel?: () => void
}
export const FormRegister: React.FC<Props> = ({ onSuccess, onCancel }) => {
  const formRef = useRef<FormHandles>(null)
  const { theme } = useAppTheme()
  const [loading, setLoading] = useState(false)
  const [errors, setErros] = useState(null)

  const handleSubmit = useCallback(
    async (formData: IRequestRegister) => {
      const invalid = await validateFormData(registerUserSchema, formData, formRef.current)
      if (!invalid) {
        setLoading(true)
        const response = await registerUser(formData)
        if (response?.success) {
          if (onSuccess) onSuccess(response?.userId)
        } else if (response?.message) {
          tostifyErros(response?.message)
          setErros(response?.message)
        }
        setLoading(false)
      }
    },
    [onSuccess]
  )

  const maskCpf: ChangeEventHandler<HTMLInputElement> = useCallback(e => {
    if (e?.target?.value) e.target.value = cpfMask(e.target.value)
  }, [])

  return (
    <Form ref={formRef} onSubmit={handleSubmit}>
      <FormErrorChips errors={errors} />
      <Input name="name" type="text" label="Nome" placeholder="seu nome" disabled={!!loading} />
      <Input name="email" type="email" label="e-mail" placeholder="e-mail" disabled={!!loading} />
      <Input name="cpf" label="CPF" onInput={maskCpf} placeholder="CPF" disabled={!!loading} />
      <Input name="cellPhone" type="tel" label="Telefone" placeholder="numero do whatsapp" disabled={!!loading} />
      <Divider textColor={theme.colors.secondary} />
      <Input
        name="password"
        type="password"
        label="Senha"
        placeholder="senha"
        autoComplete="new-password"
        disabled={!!loading}
      />
      <Input label="Confirmar senha" type="password" autoComplete="none" name="confirmPassword" />
      <FormGroup topMargin={theme.spacing.xl}>
        <FormButton label="Salvar" bold type="submit" disabled={!!loading} />
        {onCancel ? (
          <FormButton label="Voltar" type="button" variant="text" disabled={!!loading} onClick={onCancel} />
        ) : null}
      </FormGroup>
      <br />
    </Form>
  )
}
