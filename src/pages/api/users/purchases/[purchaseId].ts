import nc from 'next-connect'

import { getPurchaseController, updatePurchaseController } from '~/serverSide/controllers/purchases.controller'
import { protect } from '~/serverSide/middlewares/protect'

const handler = nc().use(protect).get(getPurchaseController).patch(updatePurchaseController)

export default handler
