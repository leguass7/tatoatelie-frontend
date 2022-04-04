import nc from 'next-connect'

import { registerUserSchema } from '~/helpers/validation/register-user.validation'
import { registerUserController } from '~/serverSide/controllers/resgister-user.controller'
import { validate } from '~/serverSide/middlewares/validate'

const validation = nc().post(validate(registerUserSchema, true))
const handler = nc().use(validation).post(registerUserController)

export default handler
