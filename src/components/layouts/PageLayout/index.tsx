import { useSession } from 'next-auth/client'
import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

import { getOpenGraph } from '~/helpers/openGraph'
import { useCartStep } from '~/hooks/useCart'
import { sendGTagPageView } from '~/services/gtag/conversion'
import { register } from '~/serviceWorkerRegistration'

import { Footer } from './Footer'
import { Header } from './Header'
import { LayoutContainer, LayoutContent, LayoutFooter, LayoutHeader } from './styled'

type Props = {
  pageTitle?: string
  pageDescription?: string
}
export const PageLayout: React.FC<Props> = ({ children, pageTitle, pageDescription }) => {
  const { asPath } = useRouter()
  const [session] = useSession()
  const { step, setCartStep } = useCartStep()

  useEffect(() => {
    sendGTagPageView(pageTitle, asPath)
  }, [pageTitle, asPath])

  useEffect(() => {
    if (session && session.user?.name) register()
  }, [session])

  useEffect(() => {
    if (step > 0 && asPath !== '/stepper') setCartStep(0)
  }, [step, asPath, setCartStep])

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
