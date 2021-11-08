import { SubmitHandler } from '@unform/core'
import { Form } from '@unform/web'
import { signIn } from 'next-auth/client'
import Link from 'next/link'
import React, { useCallback, useState } from 'react'

import { useIsMounted } from '~/hooks/useIsMounted'
import { testAuthorization } from '~/services/api/users.api'

import { useAppTheme } from '../AppThemeProvider/useAppTheme'
import { FormButton } from '../Forms/FormButton'
import { FormErrorChips } from '../Forms/FormErrorChips'
import { FormGroup } from '../Forms/FormGroup'
import { Input } from '../Forms/Input'
import { ContentLimit, Paragraph } from '../styled'

interface FormData {
  email: string
  password: string
}

export const FormLogin: React.FC = () => {
  const { theme } = useAppTheme()
  const isMounted = useIsMounted()
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState<string | string[]>(null)

  const clearErrors = useCallback(() => setErrors(null), [])

  const handleSubmit: SubmitHandler<FormData> = useCallback(
    async data => {
      setLoading(true)
      clearErrors()
      const authorization = await testAuthorization(data)
      if (isMounted.current) {
        setLoading(false)
        if (authorization && authorization.success) {
          signIn('credentials', { username: data?.email, password: data?.password })
        } else {
          setErrors(authorization?.message)
        }
      }

      return false
    },
    [isMounted, clearErrors]
  )

  return (
    <ContentLimit widthLimit={500}>
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
        <Paragraph align="center" textColor={theme.colors.primary} verticalSpaced>
          <Link href="/register">Registre-se</Link> | <Link href="/forgot">Esqueci a senha</Link>
        </Paragraph>
      </Form>
    </ContentLimit>
  )
}
