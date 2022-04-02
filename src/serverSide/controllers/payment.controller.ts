import type { NextApiResponse } from 'next'

import * as PaymentRepository from '~/serverSide/repositories/payments'
import * as PurchaseRepository from '~/serverSide/repositories/purchases'

import ErrorApi from '../ErrorApi'
import { httpGeneratePix } from '../http/http.service'
import type { AuthorizedApiRequest } from '../middlewares/protect'
import { parsePaymentMetaDto } from '../repositories/dto/payment.dto'
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

export async function findOrGeneratePaymentPix(
  req: AuthorizedApiRequest,
  res: NextApiResponse<IResponseCreatePayment>
) {
  const { query } = req
  const paymentId = query?.paymentId ? parseInt(`${query?.paymentId}`, 10) || 0 : 0

  if (!paymentId) throw ErrorApi({ status: 405, message: 'pagamento não informado' })

  const payment = await PaymentRepository.findOnePayment(paymentId)
  if (!payment) throw ErrorApi({ status: 404, message: 'pagamento não encontrado' })

  if (payment?.txid || payment?.meta) {
    const meta = parsePaymentMetaDto(payment?.meta)
    if (!meta?.pix) throw ErrorApi({ status: 404, message: 'PIX não encontrado' })

    return res.status(200).json({ success: true, txid: payment.txid, paymentId: payment.id, pix: meta?.pix })
  }

  const pix = await httpGeneratePix(payment.id)
  if (!pix) throw ErrorApi('Erro ao gerar o PIX do pagamento')

  return res.status(201).json({
    success: true,
    paymentId: payment.id,
    ...pix
  })
}

export async function getPaymentById(
  req: AuthorizedApiRequest,
  res: NextApiResponse<IResponseCreatePayment>
): Promise<void> {
  const { query } = req
  const paymentId = query?.paymentId ? parseInt(`${query?.paymentId}`, 10) || 0 : 0

  if (!paymentId) throw ErrorApi({ status: 405, message: 'pagamento não informado' })

  const payment = await PaymentRepository.findOnePayment(paymentId)
  if (!payment) throw ErrorApi({ status: 404, message: 'pagamento não encontrado' })

  const meta = parsePaymentMetaDto(payment?.meta)
  if (!meta?.pix) throw ErrorApi({ status: 404, message: 'PIX não encontrado' })

  return res.status(200).json({ success: true, txid: payment.txid, paymentId: payment.id, pix: meta?.pix })
}
