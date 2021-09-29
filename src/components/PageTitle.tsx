import React from 'react'
import styled from 'styled-components'

const PageTitleContainer = styled.div`
  display: block;
  padding: ${({ theme }) => theme.spacing.l}px 0;
  color: ${({ theme }) => theme.colors.primary};
  h1 {
    padding: 0;
    margin: 0 auto;
    font-size: 20px;
  }
  p {
    padding: 0;
    margin: 0;
  }
`

type Props = {
  title: string
  description?: string
}
export const PageTitle: React.FC<Props> = ({ title, description }) => {
  return (
    <PageTitleContainer>
      <h1>{title}</h1>
      {description ? <p>{description}</p> : null}
    </PageTitleContainer>
  )
}
