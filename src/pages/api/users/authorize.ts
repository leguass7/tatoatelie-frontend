import nc from 'next-connect'

import * as userController from '~/serverSide/controllers/users.controller'

const handler = nc().post(userController.autorize)

export default handler
