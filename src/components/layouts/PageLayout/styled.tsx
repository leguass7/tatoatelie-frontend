import styled from 'styled-components'

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  max-width: 100%;
`

export const LayoutHeader = styled.div``

export const LayoutContent = styled.div`
  flex: 1;
`

export const LayoutFooter = styled.div<{ bgColor: string; color?: string }>`
  background-color: ${({ bgColor }) => bgColor || 'transparent'};
  color: ${({ color = 'inherit' }) => color};
  width: 100%;
  margin: 0 auto;
  padding: 0;
  p,
  h4 {
    padding: 0;
    margin: 0 auto;
    color: ${({ color = 'inherit' }) => color};
  }
`

export const FooterItem = styled.div`
  width: 100%;
  padding-bottom: ${({ theme }) => theme.spacing.l || 10}px;
  h4 {
    font-size: 18px;
    padding-bottom: ${({ theme }) => theme.spacing.m || 5}px;
  }
  p {
    font-size: 16px;
  }

  @media (min-width: 600px) {
    width: 50%;
    padding-bottom: 0;
  }
`

export const SpanObs = styled.span`
  font-style: italic;
  font-size: 14px;
  padding: ${({ theme }) => theme.spacing.s}px 0;
`

export const FooterRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  align-content: flex-start;
  padding: ${({ theme }) => theme.spacing.l}px;

  ${FooterItem}:first-child {
    text-align: left;
    padding-right: 4px;
  }

  ${FooterItem}:last-child {
    text-align: right;
    padding-left: 4px;
  }
`

export const ImageContainer = styled.div<{ color: string }>`
  display: block;
  margin: 0 auto;
  padding: 0;
  img {
    display: block;
    max-width: 100%;
    width: 160px;
    margin: 0 auto;
    margin-top: -38px;
  }
  p {
    text-align: center;
    margin: 0 auto;
    padding: 0;
    font-weight: bold;
    color: ${({ color }) => color};
  }
`

export const Line = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-end;
  align-items: center;
  align-content: center;
  margin-bottom: ${({ theme }) => theme.spacing.s}px;
`
export const Text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
  align-content: center;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  padding-right: ${({ theme }) => theme.spacing.m}px;
  span {
    margin: 0;
    padding: 0;
  }
`
export const Icon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
  align-content: center;

  position: relative;
`

export const AppBar = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-self: center;
  align-content: center;
  margin: 0 auto;

  padding: ${({ theme }) => theme.spacing.l || 10}px;
`

export const ItemBar = styled.div``
