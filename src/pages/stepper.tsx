import type { GetStaticProps, NextPage } from 'next'

import { CartStepper } from '~/components/Cart/CartStepper'
import { CartSteps } from '~/components/Cart/CartSteps'
import { PageLayout } from '~/components/layouts/PageLayout'
import { mergeSegments } from '~/components/Segments'
import { ContentLimit } from '~/components/styled'
import { ISegment, segmentsFindAll } from '~/serverSide/repositories/segment'

type PageStepperProps = {
  segments?: ISegment[]
}

const PageStepper: NextPage<PageStepperProps> = ({ segments = [] }) => {
  return (
    <PageLayout segments={segments} pageTitle={'Stepper'}>
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

export const getStaticProps: GetStaticProps = async () => {
  const segments = await segmentsFindAll()

  return { props: { segments: mergeSegments(segments) }, revalidate: 300 }
}

export default PageStepper
