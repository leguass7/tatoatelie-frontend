import React from 'react'

import { Footer } from './Footer'
import { Header } from './Header'
import { LayoutContainer, LayoutContent, LayoutFooter, LayoutHeader } from './styled'

export const PageLayout: React.FC = ({ children }) => {
  return (
    <LayoutContainer>
      <LayoutHeader>
        <Header />
      </LayoutHeader>
      <LayoutContent>{children}</LayoutContent>
      <LayoutFooter>
        <Footer />
      </LayoutFooter>
    </LayoutContainer>
  )
}
