import { cpf } from 'cpf-cnpj-validator'
import { object, ref, string } from 'yup'

export const registerUserSchema = object().shape({
  name: string().required('Nome é obrigatório'),
  email: string().email('e-mail inválido').required('e-mail é obrigatório'),
  password: string().required('Senha obrigatório.').min(8, 'No mínimo 8 caracteres.'),
  cpf: string().test('cpf', 'CPF inválido', value => {
    return cpf.isValid(value)
  }),
  confirmPassword: string()
    .required('Confirmar senha obrigatório.')
    .oneOf([ref('password'), null], 'Senhas não conferem.')
})
