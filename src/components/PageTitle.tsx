import React from 'react'
import styled from 'styled-components'

const PageTitleContainer = styled.div<{ align?: 'left' | 'right' | 'center' }>`
  display: block;
  padding: ${({ theme }) => theme.spacing.l}px 0;
  color: ${({ theme }) => theme.colors.primary};
  text-align: ${({ align = 'left' }) => align};
  h1 {
    padding: 0;
    margin: 0 auto;
    font-size: 20px;
    text-align: ${({ align = 'left' }) => align};
  }
  p {
    padding: 0;
    margin: 0;
    text-align: ${({ align = 'left' }) => align};
  }
`

type Props = {
  title: string
  description?: string
  align?: 'left' | 'right' | 'center'
}
export const PageTitle: React.FC<Props> = ({ title, description, align = 'left' }) => {
  return (
    <PageTitleContainer align={align}>
      <h1>{title}</h1>
      {description ? <p>{description}</p> : null}
    </PageTitleContainer>
  )
}
