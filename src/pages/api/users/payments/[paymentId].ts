import nc from 'next-connect'

import { findOrGeneratePaymentPix, getPaymentById } from '~/serverSide/controllers/payment.controller'
import { ncConfig } from '~/serverSide/ErrorApi'
import { protect } from '~/serverSide/middlewares/protect'

const handler = nc(ncConfig).use(protect).get(getPaymentById).patch(findOrGeneratePaymentPix)

export default handler
