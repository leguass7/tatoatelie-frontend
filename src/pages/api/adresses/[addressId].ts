import nc from 'next-connect'

import { getAddressController, updateAdressesController } from '~/serverSide/controllers/adresses.controller'
import { protect } from '~/serverSide/middlewares/protect'

const handler = nc().use(protect).get(getAddressController).patch(updateAdressesController)

export default handler
