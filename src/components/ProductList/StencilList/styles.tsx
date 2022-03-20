import styled from 'styled-components'

export const StencilItemContainer = styled.div<{ space?: number }>`
  display: flex;
  margin: 0;
  flex-flow: column nowrap;
  padding: ${({ space }) => space || 0}px;
  width: 100%;
  position: relative;
  @media (min-width: 500px) {
    width: 50%;
  }
`
