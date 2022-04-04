import { Modal } from '@mui/material'
import { Payment, Purchase, PurchaseItem as PrismaPurchaseItem, Adresses } from '@prisma/client'
import { useCallback, useState } from 'react'
import styled from 'styled-components'

import { useIsMounted } from '~/hooks/useIsMounted'
import { IPaymentPixData } from '~/serverSide/repositories/dto/payment.dto'
import { createPayment, findOrGeneratePix, getPayment } from '~/services/api/payment.api'

import { CircleLoading } from '../CircleLoading'
import { PixCode } from '../PixCode'
import { PurchaseItem } from './PurchaseItem'

export type PurchaseWithItems = Purchase & {
  displayValue?: number
  items: PrismaPurchaseItem[] & { price: number }[]
  payments: Payment[]
  address: Adresses
}

interface Props {
  purchases: PurchaseWithItems[]
}

export const PurchaseList: React.FC<Props> = ({ purchases }) => {
  const [showCode, setShowCode] = useState(false)
  const [purchaseId, setPurchaseId] = useState(0)
  const [payment, setPayment] = useState<IPaymentPixData & { id?: number }>({})
  const [loading, setLoading] = useState(false)
  const isMounted = useIsMounted()

  const handlePayment = useCallback(
    async (paymentId: number, purchaseId: number) => {
      if (paymentId && purchaseId) {
        setLoading(true)
        const response = await findOrGeneratePix(paymentId)

        if (isMounted?.current) {
          setLoading(false)
          if (response?.success) {
            setShowCode(true)
            setPayment({ ...response?.pix, id: paymentId })
            setPurchaseId(purchaseId)
          }
        }
        return response
      }
    },
    [isMounted]
  )

  return (
    <>
      <ListContainer>
        {purchases?.map(purchase => {
          return <PurchaseItem {...purchase} onPayment={handlePayment} key={`purchase-${purchase.id}`} />
        })}
      </ListContainer>
      <Modal open={showCode && !loading} onClose={() => setShowCode(false)}>
        <ModalContainer>
          <PixCode
            onClose={() => setShowCode(false)}
            base64QRCode={payment?.base64QRCode}
            purchaseId={purchaseId}
            paymentId={payment?.id}
          />
        </ModalContainer>
      </Modal>
      {loading ? <CircleLoading parentRelativate light /> : null}
    </>
  )
}

const ListContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  height: 100%;
`

const ModalContainer = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
`
