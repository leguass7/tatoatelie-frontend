import styled from 'styled-components'

export const PixContainer = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  max-width: 236px;
`

export const QrcodeContainer = styled.div`
  display: block;
  max-width: 100%;
  padding: ${({ theme }) => theme.spacing.s}px;
  padding-bottom: ${({ theme }) => theme.spacing.l}px;
  background-color: ${({ theme }) => theme.colors.contrast};
  border-radius: ${({ theme }) => theme.rounded}px;
`

export const QrcodeImage = styled.img`
  display: block;
  max-width: 100%;
`

export const QrCodeHeader = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: flex-end;
`
