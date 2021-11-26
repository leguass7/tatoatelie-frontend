import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'

import { useAppTheme } from '~/components/AppThemeProvider/useAppTheme'
import { LogoPixSvg } from '~/components/Images/LogoPixSvg'
import { Paragraph } from '~/components/styled'

import { LogoPixContainer } from './styles'

export const PayMethod: React.FC = () => {
  const { theme } = useAppTheme()
  return (
    <LogoPixContainer>
      <LogoPixSvg size={100} />
      <Paragraph align="center" size={14} textColor={theme.colors.primary}>
        Atualmente para compras online acitamos apenas pagamento via PIX.
        <br />
        Para outras formas de pagamento, por favor, entre em contato com conosco através do Whatsapp:
        <br />
        <FaWhatsapp /> (85) 9 8713-8347
      </Paragraph>
    </LogoPixContainer>
  )
}
