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

  console.log('auth.userId', auth.userId)
  const purchase = await PurchaseRepository.purchaseFindOne({ where: { id: purchaseId, userId: auth.userId } })
  if (!purchase) throw ErrorApi({ status: 403, message: 'pedido não encontrado' })

  const parts = Array(payMode || 1).fill(0)
  const totalValue = parseFloat(`${purchase.displayValue}`)

  const [payment] = await Promise.all(
    parts.map(async () => {
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

  if (!payment) throw ErrorApi('Erro ao criar pagamento')

  const pix = await httpGeneratePix(payment.id)
  if (!pix) throw ErrorApi('Erro ao criar PIX de pagamento')

  return res.status(201).json({
    success: true,
    paymentId: payment.id,
    ...pix
  })
}
