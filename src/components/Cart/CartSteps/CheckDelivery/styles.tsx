import styled from 'styled-components'

export const ModalAddrContainer = styled.div`
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: 0 auto;
  transform: translate(-50%, -50%);
  padding: ${({ theme }) => theme.spacing.m}px;
  width: 100%;
  max-width: 500px;
`

export const ModalAddrBox = styled.div`
  display: block;
  margin: 0 auto;
  position: relative;
  width: 100%;
  background-color: #fff;
  padding: ${({ theme }) => theme.spacing.l}px;
  border-radius: ${({ theme }) => theme.rounded}px;
`

export const DeliveryAlert = styled.div`
  display: block;
  margin: 0 auto;
  position: relative;
  width: 100%;
  padding: ${({ theme }) => theme.spacing.l}px;
  border-radius: ${({ theme }) => theme.rounded}px;
`
