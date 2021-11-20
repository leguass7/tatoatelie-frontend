import { Step, StepLabel, Stepper } from '@mui/material'
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector'
import { styled } from '@mui/material/styles'
import React from 'react'
import { AiOutlineCheckCircle, AiOutlineDollarCircle } from 'react-icons/ai'
import { BiHomeCircle } from 'react-icons/bi'

import { useCartStep } from '~/hooks/useCart'

import { withIconHOC } from './withIconHOC'

const QontoConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 10,
    left: 'calc(-50% + 16px)',
    right: 'calc(50% + 16px)'
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: theme.palette.primary.main
    }
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: theme.palette.success.main
    }
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
    borderTopWidth: 3,
    borderRadius: 3
  }
}))

const steps = [
  { label: 'Pedido', icon: AiOutlineCheckCircle },
  { label: 'Endereço', icon: BiHomeCircle },
  { label: 'Pagamento', icon: AiOutlineDollarCircle }
]

export const CartStepper: React.FC = () => {
  const { step } = useCartStep()
  const normalizeStep = () => {
    let s = step - 1
    if (s < 0) s = 0
    if (s >= steps.length) s = steps.length - 1
    return s
  }
  return (
    <Stepper alternativeLabel activeStep={normalizeStep()} connector={<QontoConnector />}>
      {steps.map(({ label, icon }) => (
        <Step key={label}>
          <StepLabel StepIconComponent={withIconHOC(icon)}>{label}</StepLabel>
        </Step>
      ))}
    </Stepper>
  )
}
