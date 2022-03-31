import { Button, IconButton } from '@mui/material'
import React from 'react'
import { IoClose } from 'react-icons/io5'

import { Paragraph } from '~/components/styled'

import { PixContainer, QrcodeContainer, QrCodeHeader, QrcodeImage } from './styles'

type Props = {
  stringQRCode?: string
  base64QRCode?: string
  purchaseId?: number
  paymentId?: number
  onClose?: () => void
}

export const PixCode: React.FC<Props> = ({ base64QRCode, paymentId, purchaseId, onClose }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const paymentCode = purchaseId && paymentId ? `CÓDIGO: ${purchaseId}N${paymentId}` : null
  return (
    <PixContainer>
      <QrcodeContainer>
        {onClose ? (
          <QrCodeHeader>
            <IconButton onClick={onClose}>
              <IoClose />
            </IconButton>
          </QrCodeHeader>
        ) : null}
        {/* {paymentCode ? (
          <Paragraph align="center" bold>
            {paymentCode}
          </Paragraph>
        ) : null} */}
        <Paragraph align="center" size={14} verticalSpaced>
          QRCode para pagamento via PIX
        </Paragraph>
        {base64QRCode ? (
          <QrcodeImage src={base64QRCode} alt="QRCODE" />
        ) : (
          <Paragraph align="center" size={10} verticalSpaced>
            Aguardando informações
          </Paragraph>
        )}
      </QrcodeContainer>
    </PixContainer>
  )
}
