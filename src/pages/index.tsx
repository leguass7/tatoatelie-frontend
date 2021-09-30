import type { NextPage } from 'next'
import styled from 'styled-components'

import img1 from '~/assets/images/img1.png'
import img2 from '~/assets/images/img2.png'
import img3 from '~/assets/images/img3.png'
import { PageLayout } from '~/components/layouts/PageLayout'
import { Segments } from '~/components/Segments'
import { ContentLimit } from '~/components/styled'
import { Video } from '~/components/Video'

const ImgContainers = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  flex-flow: row wrap;
  img {
    width: 320px;
  }
  @media (min-width: 768px) {
    img {
      width: 254px;
    }
  }
`

const Img = styled.img`
  display: block;
  max-width: 100%;
  margin: 0 auto;
  border: 0;
  outline: none;
  margin-bottom: 10px;
`
//cpLBaVBMg2Y
const PageHome: NextPage = ({}) => {
  return (
    <PageLayout>
      <ContentLimit horizontalPad={10}>
        <Segments />
        <br />
        <Video videoId="3v-PTeM0Ksk" />
        <br />
        <ImgContainers>
          <Img src={img1} />
          <Img src={img2} />
          <Img src={img3} />
        </ImgContainers>
      </ContentLimit>
    </PageLayout>
  )
}

export default PageHome
