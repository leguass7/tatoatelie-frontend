import styled from 'styled-components'

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

export const SpanObs = styled.span`
  font-style: italic;
  font-size: 14px;
  padding: ${({ theme }) => theme.spacing.s}px 0;
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
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 80%;
    max-width: 80%;
    margin: 50% 50%;
    transform: translate(-50%, -50%);
  }
`

export const FooterContainer = styled.div<{ bgColor: string; color?: string }>`
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
