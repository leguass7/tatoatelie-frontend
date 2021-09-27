import React from 'react'
import styled from 'styled-components'

const PageTitleContainer = styled.div`
  display: block;
  padding: ${({ theme }) => theme.spacing.l}px 0;
  color: ${({ theme }) => theme.colors.primary};
  h1,
  h2,
  h3,
  h4 {
    padding: 0;
    margin: 0 auto;
    font-size: 20px;
  }
`

type Props = {
  title: string
}
export const PageTitle: React.FC<Props> = ({ title }) => {
  return (
    <PageTitleContainer>
      <h1>{title}</h1>
    </PageTitleContainer>
  )
}
