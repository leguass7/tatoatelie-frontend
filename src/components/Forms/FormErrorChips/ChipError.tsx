import { useState } from 'react'
import { IoMdCloseCircle } from 'react-icons/io'

import { ChipIcon, ChipItem, ChipMessage } from './styles'

type Props = {
  message?: string
  textSize?: number
}

export const ChipError: React.FC<Props> = ({ message, textSize = 10 }) => {
  const [showing, setShowing] = useState(true)
  if (!showing) return null
  return (
    <ChipItem textSize={textSize}>
      <ChipMessage>{message}</ChipMessage>
      <ChipIcon type="button" onClick={() => setShowing(false)}>
        <IoMdCloseCircle size={16} />
      </ChipIcon>
    </ChipItem>
  )
}
