import { Modal } from '@mui/material'
import { Payment, Purchase, PurchaseItem as PrismaPurchaseItem, Adresses } from '@prisma/client'
import { useCallback, useState } from 'react'
import styled from 'styled-components'

import { useIsMounted } from '~/hooks/useIsMounted'
import { IPaymentPixData } from '~/serverSide/repositories/dto/payment.dto'
import { createPayment, getPayment } from '~/services/api/payment.api'

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
  const [saving, setSaving] = useState(false)
  const isMounted = useIsMounted()

  const handlePayment = useCallback(
    async (paymentId: number, purchaseId: number) => {
      if (paymentId && purchaseId) {
        setSaving(true)
        let response = await getPayment(paymentId)

        if (!response?.success) response = await createPayment({ payMethod: 'pix', purchaseId, paymentId, payMode: 1 })

        if (isMounted?.current) {
          setSaving(false)
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
      <Modal open={showCode && !saving} onClose={() => setShowCode(false)}>
        <PixCode
          onClose={() => setShowCode(false)}
          base64QRCode={payment?.base64QRCode}
          purchaseId={purchaseId}
          paymentId={payment?.id}
        />
      </Modal>
    </>
  )
}

const ListContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  margin: 0 auto;
`
