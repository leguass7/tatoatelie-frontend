import nc from 'next-connect'

import { getPaymentById } from '~/serverSide/controllers/payment.controller'
import { ncConfig } from '~/serverSide/ErrorApi'
import { protect } from '~/serverSide/middlewares/protect'

const handler = nc(ncConfig).use(protect).get(getPaymentById)

export default handler
