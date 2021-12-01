import { NextApiResponse } from 'next'

import { makeArray } from '~/helpers/array'

import ErrorApi from '../ErrorApi'
import type { AuthorizedApiRequest } from '../middlewares/protect'
import { IPurchaseItem } from '../repositories/dto/purchase-item.dto'
import type { IPurchase } from '../repositories/dto/purchase.dto'
import * as PurchaseRepository from '../repositories/purchases'
import type { IRequestCreatePurchase, IResponseCreatePurchase } from './purchase.types'

export async function paginatePurchasesController(req: AuthorizedApiRequest, res: NextApiResponse) {
  const { auth } = req

  return res.status(200).json({
    success: true,
    auth: auth.userId
  })
}

export async function createPurchaseController(
  req: IRequestCreatePurchase,
  res: NextApiResponse<IResponseCreatePurchase>
) {
  const { body, auth } = req

  const { items, total } = makeArray(body.items)
    .filter(f => !!f)
    .reduce(
      (acc, item) => {
        acc.items.push({
          purchaseId: 0,
          name: item.name,
          price: item.price,
          productId: item.productId,
          quantity: item.quantity,
          actived: true,
          size: item?.size || null
        })
        const calc = item.price * item.quantity
        acc.total = acc.total + calc
        return acc
      },
      { items: [] as IPurchaseItem[], total: 0 }
    )

  if (!items.length || total <= 0 || items.find(f => f.quantity <= 0 || f.price <= 0)) {
    throw ErrorApi('itens do pedido é obrigatório')
  }

  const newPurchase: IPurchase = {
    actived: true,
    addrId: body.addrId,
    createdBy: auth.userId,
    discount: 0,
    displayValue: total,
    fileId: body.fileId,
    status: 1,
    paid: false,
    userId: auth.userId
  }

  const purchase = await PurchaseRepository.createPurchase(newPurchase)
  if (!purchase) throw ErrorApi('erro ao criar pedido')

  items.forEach(item => {
    item.purchaseId = purchase.id
    item.updatedBy = auth.userId
  })
  const itemsCount = await PurchaseRepository.createPurchaseItems(items)
  if (!itemsCount) throw ErrorApi('erro ao criar items do pedido')

  return res.status(201).json({
    success: true,
    purchaseId: purchase.id
  })
}

export async function getPurchaseController(req: AuthorizedApiRequest, res: NextApiResponse) {
  return res.status(200).json({
    success: true
  })
}

export async function updatePurchaseController(req: AuthorizedApiRequest, res: NextApiResponse) {
  return res.status(201).json({
    success: true
  })
}
