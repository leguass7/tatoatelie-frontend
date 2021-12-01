import { Payment } from '.prisma/client'

import prisma from '../database/prisma'
import { IPayment } from './dto/payment.dto'

export async function createPayment(data: IPayment): Promise<Payment> {
  try {
    const payment = await prisma.payment.create({ data })
    return payment
  } catch (_error) {
    return null
  }
}

export async function findOnePayment(id: number): Promise<Payment> {
  try {
    const payment = await prisma.payment.findUnique({ where: { id } })
    return payment
  } catch (_error) {
    return null
  }
}
