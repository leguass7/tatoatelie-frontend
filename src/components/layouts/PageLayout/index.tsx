import { useSession } from 'next-auth/client'
import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

import { getOpenGraph } from '~/helpers/openGraph'
import { useCartStep } from '~/hooks/useCart'
import type { ISegment } from '~/serverSide/repositories/segment'
import { sendGTagPageView } from '~/services/gtag/conversion'
import { register } from '~/serviceWorkerRegistration'

import { Footer } from './Footer'
import { Header } from './Header'
import { LayoutContainer, LayoutContent, LayoutFooter, LayoutHeader } from './styled'

type Props = {
  pageTitle?: string
  pageDescription?: string
  segments: ISegment[]
}
export const PageLayout: React.FC<Props> = ({ children, pageTitle, pageDescription, segments }) => {
  const { asPath } = useRouter()
  const [session] = useSession()
  const { step, setCartStep } = useCartStep()

  useEffect(() => {
    sendGTagPageView(pageTitle, asPath)
  }, [pageTitle, asPath])

  useEffect(() => {
    if (session && session.user?.name) {
      // eslint-disable-next-line no-console
      console.log('Useeffect register in layout')
      register()
    }
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
          <Header segments={segments} />
        </LayoutHeader>
        <LayoutContent>{children}</LayoutContent>
        <LayoutFooter>
          <Footer />
        </LayoutFooter>
      </LayoutContainer>
    </>
  )
}
