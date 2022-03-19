import nc from 'next-connect'

import { createAdressesController, getAdressesController } from '~/serverSide/controllers/adresses.controller'
import { protect } from '~/serverSide/middlewares/protect'

const handler = nc().use(protect).get(getAdressesController).post(createAdressesController)

export default handler
