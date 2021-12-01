import nc from 'next-connect'

import { paymentByPurchase } from '~/serverSide/controllers/payment.controller'
import { ncConfig } from '~/serverSide/ErrorApi'
import { protect } from '~/serverSide/middlewares/protect'

const handler = nc(ncConfig).use(protect).post(paymentByPurchase)

export default handler
