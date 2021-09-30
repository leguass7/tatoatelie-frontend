import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

import { getOpenGraph } from '~/helpers/openGraph'
import { sendGTagPageView } from '~/services/gtag/conversion'

import { Footer } from './Footer'
import { Header } from './Header'
import { LayoutContainer, LayoutContent, LayoutFooter, LayoutHeader } from './styled'

type Props = {
  pageTitle?: string
  pageDescription?: string
}
export const PageLayout: React.FC<Props> = ({ children, pageTitle, pageDescription }) => {
  const { asPath } = useRouter()

  useEffect(() => {
    sendGTagPageView(pageTitle, asPath)
  }, [pageTitle, asPath])

  return (
    <>
      <NextSeo
        title={pageTitle}
        description={pageDescription}
        openGraph={getOpenGraph({ title: pageTitle, description: pageDescription, asPath })}
      />
      <LayoutContainer>
        <LayoutHeader>
          <Header />
        </LayoutHeader>
        <LayoutContent>{children}</LayoutContent>
        <LayoutFooter>
          <Footer />
        </LayoutFooter>
      </LayoutContainer>
    </>
  )
}
