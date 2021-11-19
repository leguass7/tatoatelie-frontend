import styled from 'styled-components'

export const AddProductItemContainer = styled.div<{ textColor?: string }>`
  border: 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  color: ${({ textColor = 'inherit' }) => textColor};
`

export const AddProductItemImageMask = styled.div<{ url: string; size?: number }>`
  display: block;
  width: ${({ size = 72 }) => size}px;
  height: ${({ size = 72 }) => size}px;
  background-color: #fff;
  background-image: url(${({ url }) => url});
  background-size: contain;
  background-position: center center;
`

export const AddProductItemImage = styled.div`
  border: 0;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  align-items: center;
  align-content: center;
`

export const AddProductItemDescription = styled.div`
  border: 0;
  flex: 1;
  display: block;
  width: 100%;
  flex-direction: column;
  justify-content: start;
`
