import type { NextApiResponse } from 'next'

import * as PaymentRepository from '~/serverSide/repositories/payments'
import * as PurchaseRepository from '~/serverSide/repositories/purchases'

import ErrorApi from '../ErrorApi'
import { httpGeneratePix } from '../http/http.service'
import type { AuthorizedApiRequest } from '../middlewares/protect'
import type { IPaymentCreatePayload, IResponseCreatePayment } from './payment.types'

interface PaymentCreateApiRequest extends AuthorizedApiRequest {
  body: IPaymentCreatePayload
}

export async function paymentByPurchase(
  req: PaymentCreateApiRequest,
  res: NextApiResponse<IResponseCreatePayment>
): Promise<void> {
  const { body, auth } = req
  const { payMethod, payMode, purchaseId } = body

  const purchase = await PurchaseRepository.purchaseFindOne({ where: { id: purchaseId, userId: auth.userId } })
  if (!purchase) throw ErrorApi({ status: 403, message: 'pedido não encontrado' })

  const parts = Array(payMode || 1)
  const totalValue = parseFloat(`${purchase.displayValue}`)

  const payments = await Promise.all(
    parts.map(async () => {
      console.log('criando pq não printa isso')
      const pay = await PaymentRepository.createPayment({
        method: payMethod,
        createdBy: auth.userId,
        paid: false,
        purchaseId,
        value: totalValue / parts.length,
        actived: true
      })
      return pay
    })
  )

  console.log('payments', payments)
  if (!payments) throw ErrorApi('Erro ao criar pagamento')

  const pix = await httpGeneratePix(payments[0].id)
  console.log('pix', pix)

  return res.status(200).json({
    success: true,
    paymentId: payments[0].id,
    pix
  })
}
