import nc from 'next-connect'

import { updateUserController } from '~/serverSide/controllers/users.controller'
import { protect } from '~/serverSide/middlewares/protect'

const handler = nc().use(protect).patch(updateUserController)

export default handler
