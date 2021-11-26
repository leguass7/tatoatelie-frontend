import nc from 'next-connect'

import { paginatePurchasesController, createPurchaseController } from '~/serverSide/controllers/purchases.controller'
import { ncConfig } from '~/serverSide/ErrorApi'
import { protect } from '~/serverSide/middlewares/protect'

const handler = nc(ncConfig).use(protect).get(paginatePurchasesController).post(createPurchaseController)

export default handler
