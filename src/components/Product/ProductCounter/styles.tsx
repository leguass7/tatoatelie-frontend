import styled, { css } from 'styled-components'

export const ProductQtd = styled.div<{ contrast?: boolean }>`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;

  margin: 0 auto;
  padding: 0;
  box-sizing: border-box;

  font-weight: bold;
  font-size: 26px;
  color: #fff;
  min-width: 102px;
  width: 102px;
  height: 34px;
  border-radius: 54px;
  overflow: hidden;

  ${({ contrast }) =>
    contrast
      ? css`
          border: 3px solid #fff;
        `
      : css`
          border: 3px solid ${({ theme }) => theme.colors.primary};
        `}

  label {
    display: block;
    padding: 0 5px;
    font-weight: bold;
    margin-bottom: -5px;
  }

  label {
    font-size: 20px;
  }
`
interface ButtonProps {
  unavailable?: boolean
  contrast?: boolean
  icon?: 'sum' | 'sub'
}

export const Button = styled.button<ButtonProps>`
  font-size: 20px;
  font-weight: bolder;
  color: #fff;
  margin: 0;
  width: 34px;
  height: 100%;
  transition: all 0.3s ease;
  cursor: pointer;
  background: none;
  border: none;
  display: block;
  outline: none;

  background-position: center center;
  background-repeat: no-repeat;
  background-size: 20px;

  ${({ unavailable }) =>
    unavailable
      ? css`
          pointer-events: none;
        `
      : null}

  ${({ contrast }) =>
    contrast
      ? css`
          &:nth-child(1) {
            border-right: 3px solid #fff;
          }
          &:nth-child(3) {
            border-left: 3px solid #fff;
          }
        `
      : css`
          &:nth-child(1) {
            border-right: 3px solid ${({ theme }) => theme.colors.primary};
          }
          &:nth-child(3) {
            border-left: 3px solid ${({ theme }) => theme.colors.primary};
          }
        `}

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
  }
`

export const ButtonCounter = styled.button<{ disabled?: boolean }>`
  /* display: flex; */
  text-align: center;
  flex-flow: column nowrap;
  align-items: center;
  align-content: center;
  height: 32px;
  width: 38px;
  border: 0;
  padding: 0;
  margin: 0;
  cursor: pointer;
  border-radius: 0;
  position: relative;
  background-color: transparent;
  filter: grayscale(${({ disabled }) => (disabled ? '100%' : '0%')}) !important;
  span {
    padding-top: 2px;
    position: absolute;
    top: 50%;
    left: 50%;
    display: inline-block;
    border: 0;
    overflow: hidden;
    transform: translate(-50%, -50%);
  }
`

export const ProductCounterValue = styled.div<{ textSize?: number }>`
  flex: 1;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  border: 0;
  height: 32px;
  text-align: center;
  vertical-align: center;
  line-height: 32px;
  overflow: hidden;
  border-style: solid;
  border-top: 0;
  border-bottom: 0;
  font-size: ${({ textSize = 16 }) => textSize}px;
`

export const ProductCounterContainer = styled.div<{ strokeColor: string; stroke?: number; hoverColor: string }>`
  width: 128px;
  margin: 0 auto;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  border-style: solid;
  color: ${({ strokeColor }) => strokeColor};
  border-color: ${({ strokeColor = '#000' }) => strokeColor};
  border-width: ${({ stroke = 2 }) => stroke}px;
  border-radius: ${({ theme }) => theme.rounded}px;
  overflow: hidden;
  transition: all ease-in-out 0.2s;
  ${ButtonCounter} {
    transition: all ease-in-out 0.2s;
    color: ${({ strokeColor }) => strokeColor};
    &:hover {
      color: ${({ hoverColor }) => hoverColor};
      background-color: ${({ strokeColor }) => strokeColor};
    }
  }

  ${ProductCounterValue} {
    border-width: ${({ stroke = 2 }) => stroke}px;
    border-color: ${({ strokeColor = '#000' }) => strokeColor};
    border-top: 0;
    border-bottom: 0;
  }
`
