import React from 'react'

import logo from '~/assets/images/logo-face.png'
import { useAppTheme } from '~/components/AppThemeProvider/useAppTheme'
import { CartSvg } from '~/components/Images/CartSvg'
import { LogoCircleSvg } from '~/components/Images/LogoCircleSvg'
import { MenuSvg } from '~/components/Images/MenuSvg'
import { ContentLimit } from '~/components/styled'
import { alpha } from '~/helpers/colors'

import {
  LayoutContainer,
  LayoutHeader,
  LayoutContent,
  LayoutFooter,
  ImageContainer,
  FooterRow,
  FooterItem,
  SpanObs,
  Line,
  Text,
  Icon,
  AppBar,
  ItemBar
} from './styled'

export const PageLayout: React.FC = ({ children }) => {
  const { theme } = useAppTheme()
  return (
    <LayoutContainer>
      <LayoutHeader>
        <ContentLimit>
          <AppBar>
            <ItemBar>
              <MenuSvg />
            </ItemBar>
            <ItemBar>
              <CartSvg />
            </ItemBar>
          </AppBar>
        </ContentLimit>
        <ImageContainer color={theme.colors.primary}>
          <img src={logo} alt="Tato Ateliê" />
        </ImageContainer>
      </LayoutHeader>
      <LayoutContent>{children}</LayoutContent>
      <LayoutFooter bgColor={alpha(theme.colors.secondary, 0.3)} color={theme.colors.primary}>
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
                </Icon>
              </Line>
              <Line>
                <Text>
                  <span>contatotatoateliê@gmail.com</span>
                </Text>
                <Icon>
                  <LogoCircleSvg size={32} />
                </Icon>
              </Line>
              <Line>
                <Text>@tato_atelie</Text>
                <Icon>
                  <LogoCircleSvg size={32} />
                </Icon>
              </Line>
            </FooterItem>
          </FooterRow>
        </ContentLimit>
      </LayoutFooter>
    </LayoutContainer>
  )
}
