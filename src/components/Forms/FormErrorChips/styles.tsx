import styled from 'styled-components'

export const ChipMessage = styled.span``
export const ChipIcon = styled.button`
  display: flex;
  flex-flow: column nowrap;
  padding: 0;
  margin: 0;
  background-color: transparent;
  border-radius: 50%;
  border: 0;
  cursor: pointer;
`

export const ChipItem = styled.div<{ textSize: number }>`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  gap: 4px;
  font-size: ${({ textSize }) => textSize}px;
  padding: 2px 4px 2px 6px;
  border-width: 1px;
  border-style: solid;
  border-radius: ${({ theme }) => theme.rounded}px;
`
export const ChipErrorContainer = styled.div<{ colors: string }>`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  align-content: center;
  color: ${({ colors }) => colors};

  ${ChipItem} {
    color: ${({ colors }) => colors};
    border-color: ${({ colors }) => colors};
  }

  ${ChipMessage} {
    color: ${({ colors }) => colors};
  }
  ${ChipIcon} {
    color: ${({ colors }) => colors};
  }
`
