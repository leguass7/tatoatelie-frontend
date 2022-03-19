import nc from 'next-connect'

import { getUserByEmailController } from '~/serverSide/controllers/users.controller'
import { protect } from '~/serverSide/middlewares/protect'

const handler = nc().use(protect).get(getUserByEmailController)

export default handler
