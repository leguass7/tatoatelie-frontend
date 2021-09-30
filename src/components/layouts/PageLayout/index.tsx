import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

import { sendGTagPageView } from '~/services/gtag/conversion'

import { Footer } from './Footer'
import { Header } from './Header'
import { LayoutContainer, LayoutContent, LayoutFooter, LayoutHeader } from './styled'

export const PageLayout: React.FC = ({ children }) => {
  const router = useRouter()

  useEffect(() => {
    const pagetitle = window?.document?.title || 'Home'
    sendGTagPageView(pagetitle, router.asPath)
  }, [router])

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
