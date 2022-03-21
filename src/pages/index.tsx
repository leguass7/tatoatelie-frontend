/* eslint-disable no-console */
import type { GetServerSideProps, NextPage } from 'next'
import styled from 'styled-components'

import img1 from '~/assets/images/img1.png'
import img2 from '~/assets/images/img2.png'
import img3 from '~/assets/images/img3.png'
import { PageLayout } from '~/components/layouts/PageLayout'
import { Segments } from '~/components/Segments'
import { ContentLimit } from '~/components/styled'
import { Video } from '~/components/Video'
import { host } from '~/config'

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

type PageIndexProps = {
  vercelUrl?: string
  host?: string
}

const PageHome: NextPage<PageIndexProps> = ({ host, vercelUrl }) => {
  console.log('host', host)
  console.log('vercelUrl', vercelUrl)
  return (
    <PageLayout pageTitle={'Tato Ateliê'} pageDescription={'Conheça nossa linha de produtos'}>
      <Segments know />
      <ContentLimit horizontalPad={10}>
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

export const getServerSideProps: GetServerSideProps<PageIndexProps> = async () => {
  const vercelUrl = process.env.VERCEL_URL || ''

  return { props: { vercelUrl, host } }
}
