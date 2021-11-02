import styled from 'styled-components'

export const ProductLink = styled.a`
  margin: 0;
  padding: 0;
  outline: none;
  display: flex;
  flex-flow: column nowrap;
`

export const ProductItemContainer = styled.div<{ space?: number }>`
  display: flex;
  margin: 0;
  flex-flow: column nowrap;
  padding: ${({ space }) => space || 0}px;
  width: 50%;
  @media (min-width: 500px) {
    width: auto;
  }
`
export const ProductsContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  width: 100%;

  @media (min-width: 500px) {
    justify-content: space-around;
  }
`

// Product item
type Props = {
  color?: string
}
export const DescriptionContainer = styled.div<Props>`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  color: ${({ color = 'inherit' }) => color};
`
export const ProductTitle = styled.h2<Props>`
  flex: 1;
  text-align: center;
  margin: 0 auto;
  padding: 0;
  font-size: 18px;
  color: ${({ color = 'inherit' }) => color};
`
export const ProductPrice = styled.p<Props>`
  flex: 1;
  text-align: center;
  margin: 0 auto;
  padding: 0;
  font-size: 14px;
  color: ${({ color = 'inherit' }) => color};
`
// image product
export const CoreContainer = styled.div<{ scale?: number }>`
  display: block;
  margin: 0;
  padding: 0;
  width: auto;
  height: auto;
  position: absolute;
  top: 0;
  right: 0;
  transition: all ease-in-out 0.2s;
  transform: scale(${({ scale }) => scale});

  svg {
    margin: 0;
    padding: 0;
    display: block;
    max-width: 100%;
    transform: scale(${({ scale }) => scale});
    transition: all ease-in-out 0.2s;
  }
`
export const MaskContainer = styled.div`
  position: relative;
  overflow: hidden;
  margin: 0;
  padding: 0;
  transition: all ease-in-out 0.2s;

  svg {
    margin: 0;
    padding: 0;
    display: block;
    max-width: 100%;
    transition: all ease-in-out 0.2s;
  }
`
