import React from 'react'

import { Paragraph } from '~/components/styled'

import { PixContainer, QrcodeContainer, QrcodeImage } from './styles'

type Props = {
  stringQRCode?: string
  base64QRCode?: string
  purchaseId?: number
  paymentId?: number
}
export const PixCode: React.FC<Props> = ({ base64QRCode, paymentId, purchaseId }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const paymentCode = purchaseId && paymentId ? `CÓDIGO: ${purchaseId}N${paymentId}` : null
  return (
    <PixContainer>
      <QrcodeContainer>
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
