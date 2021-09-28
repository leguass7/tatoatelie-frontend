import React from 'react'

import emailImg from '~/assets/icons/email.png'
import instagramImg from '~/assets/icons/instagram.png'
import zapImg from '~/assets/icons/zap.png'
import { useAppTheme } from '~/components/AppThemeProvider/useAppTheme'
import { LogoCircleSvg } from '~/components/Images/LogoCircleSvg'
import { ContentLimit } from '~/components/styled'
import { alpha } from '~/helpers/colors'

import { FooterItem, FooterRow, Icon, FooterContainer, Line, SpanObs, Text } from './styles'

export const Footer: React.FC = () => {
  const { theme } = useAppTheme()
  return (
    <FooterContainer bgColor={alpha(theme.colors.secondary, 0.3)} color={theme.colors.primary}>
      <ContentLimit>
        <FooterRow>
          <FooterItem>
            <h4>Endereço</h4>
            <p>
              R. Cel. Alexandrino, 579
              <br />
              Bairro Montese, Fortaleza-CE
              <br />
              <SpanObs>
                Endereço destinado apenas para retirada de pedidos. Atendimento presencial com hora marcada.
              </SpanObs>
            </p>
          </FooterItem>
          <FooterItem>
            <h4>Atendimento</h4>
            <Line>
              <Text>(85) 98713-8347</Text>
              <Icon>
                <LogoCircleSvg size={32} />
                <img src={zapImg} alt="whatsapp" />
              </Icon>
            </Line>
            <Line>
              <Text>
                <span>contatotatoateliê@gmail.com</span>
              </Text>
              <Icon>
                <LogoCircleSvg size={32} />
                <img src={emailImg} alt="email" />
              </Icon>
            </Line>
            <Line>
              <Text>@tato_atelie</Text>
              <Icon>
                <LogoCircleSvg size={32} />
                <img src={instagramImg} alt="intagram" />
              </Icon>
            </Line>
          </FooterItem>
        </FooterRow>
      </ContentLimit>
    </FooterContainer>
  )
}
