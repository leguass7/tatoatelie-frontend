import React from 'react'
import styled from 'styled-components'

const PageTitleContainer = styled.div<{ align?: 'left' | 'right' | 'center' }>`
  display: block;
  padding: ${({ theme }) => theme.spacing.l}px 0;
  color: ${({ theme }) => theme.colors.primary};
  text-align: ${({ align = 'left' }) => align};
  h1,
  h2,
  h3,
  h4 {
    padding: 0;
    margin: 0 auto;

    text-align: ${({ align = 'left' }) => align};
  }
  h1 {
    font-size: 20px;
  }
  h2 {
    font-size: 18px;
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
  variant?: 'h1' | 'h2'
}
export const PageTitle: React.FC<Props> = ({ title, description, align = 'left', variant = 'h1' }) => {
  const renderHead = () => {
    if (variant === 'h2') return <h2>{title}</h2>
    return <h1>{title}</h1>
  }

  return (
    <PageTitleContainer align={align}>
      {renderHead()}
      {description ? <p>{description}</p> : null}
    </PageTitleContainer>
  )
}
