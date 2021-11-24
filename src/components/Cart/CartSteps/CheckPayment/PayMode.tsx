import React from 'react'

import { CheckItem, CheckItemDescription, CheckItemLine } from '~/components/CheckItem'
import { Paragraph } from '~/components/styled'
import { CheckListItemProps } from '~/components/withChecklist'

export type PayModeItemProps = CheckListItemProps & {
  id: number
  label: string
  description?: string
}

export const PayMode: React.FC<PayModeItemProps> = ({ id, selected, onClick, label, description }) => {
  return (
    <CheckItem id={id} selected={!!selected} onClick={onClick} themeColor="primary">
      <CheckItemDescription grow={1}>
        <CheckItemLine bold>{label}</CheckItemLine>
        <Paragraph size={14}>{description}</Paragraph>
      </CheckItemDescription>
    </CheckItem>
  )
}
