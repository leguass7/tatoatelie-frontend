import type { NextPage } from 'next'

import { CartStepper } from '~/components/Cart/CartStepper'
import { CartSteps } from '~/components/Cart/CartSteps'
import { PageLayout } from '~/components/layouts/PageLayout'
import { ContentLimit } from '~/components/styled'
type PageStepperProps = {}

const PageStepper: NextPage<PageStepperProps> = () => {
  return (
    <PageLayout pageTitle={'Stepper'}>
      <ContentLimit horizontalPad={10}>
        <CartStepper />
        <CartSteps />
      </ContentLimit>
      {/* <ContentLimit horizontalPad={10}>
        <PageTitle title={'Stepper'} description="Steppers" />
        <br />
      </ContentLimit> */}
    </PageLayout>
  )
}

export default PageStepper
