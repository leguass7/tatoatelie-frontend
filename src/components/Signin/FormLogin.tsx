import { SubmitHandler } from '@unform/core'
import { Form } from '@unform/web'
import Link from 'next/link'
import React from 'react'

import { useAppTheme } from '../AppThemeProvider/useAppTheme'
import { FormButton } from '../Forms/FormButton'
import { FormGroup } from '../Forms/FormGroup'
import { Input } from '../Forms/Input'
import { ContentLimit, Paragraph } from '../styled'

interface FormData {
  email: string
  password: string
}

export const FormLogin: React.FC = () => {
  const { theme } = useAppTheme()

  const handleSubmit: SubmitHandler<FormData> = data => {
    console.log(data)
  }

  return (
    <ContentLimit widthLimit={500}>
      <Form onSubmit={handleSubmit}>
        <Input name="email" type="email" label="e-mail" placeholder="e-mail" />
        <Input name="password" type="password" label="senha" placeholder="senha" autoComplete="new-password" />
        <FormGroup>
          <FormButton label="Entrar" />
          <FormButton label="Entrar" variant="text" bold />
        </FormGroup>
        <Paragraph align="center" textColor={theme.colors.primary} verticalSpaced>
          <Link href="/register">Registre-se</Link> | <Link href="/forgot">Esqueci a senha</Link>
        </Paragraph>
      </Form>
    </ContentLimit>
  )
}
