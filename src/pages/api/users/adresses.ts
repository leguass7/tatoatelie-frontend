import nc from 'next-connect'

import {
  createAdressesController,
  getAdressesController,
  updateAdressesController
} from '~/serverSide/controllers/adresses.controller'
import { protect } from '~/serverSide/middlewares/protect'

const handler = nc()
  .use(protect)
  .get(getAdressesController)
  .post(createAdressesController)
  .patch(updateAdressesController)

export default handler
