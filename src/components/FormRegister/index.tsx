import { Form } from '@unform/web'
import React, { useCallback, useState } from 'react'

import { FormButton } from '../Forms/FormButton'
import { FormErrorChips } from '../Forms/FormErrorChips'
import { FormGroup } from '../Forms/FormGroup'
import { Input } from '../Forms/Input'

// import { Container } from './styles';

export const FormRegister: React.FC = () => {
  const [loading, setLoading] = useState(false)
  const [errors, setErros] = useState(null)
  const handleSubmit = useCallback(() => {
    //
  }, [])
  return (
    <Form onSubmit={handleSubmit}>
      <FormErrorChips errors={errors} />
      <Input name="email" type="email" label="e-mail" placeholder="e-mail" disabled={!!loading} />
      <Input
        name="password"
        type="password"
        label="senha"
        placeholder="senha"
        autoComplete="new-password"
        disabled={!!loading}
      />
      <FormGroup>
        <FormButton label="Entrar" bold type="submit" disabled={!!loading} />
      </FormGroup>
    </Form>
  )
}
