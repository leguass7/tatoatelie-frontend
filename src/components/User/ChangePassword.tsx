import { Button } from '@mui/material'
import { Form } from '@unform/web'

import { Input } from '../Forms/Input'

interface Props {}

export const ChangePassword: React.FC<Props> = () => {
  const handleSubmit = async values => {
    // console.log(values)
    return values
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Input label="Senha anterior" type="password" autoComplete="none" name="password" />
      <Input label="Nova senha" type="password" autoComplete="none" name="newPassword" />
      <Input label="Confirmar nova senha" type="password" autoComplete="none" name="confirmPassword" />
      <Button type="submit" variant="contained" color="primary">
        Enviar
      </Button>
    </Form>
  )
}
