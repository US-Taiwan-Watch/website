'use client'

import { Chip, ChipProps } from '@mui/material'
import Image from 'next/image'

interface UCategoryChipProps extends ChipProps {
  img?: string;
  label?: string;
}

const UCategoryChip = ({ img, ...props }: UCategoryChipProps) => {
  return (
    <Chip
      avatar={
        img
          ? (
            <Image src={img} alt={props.label || ''} width={40} height={40} />
            )
          : undefined
      }
      {...props}
    />
  )
}

export default UCategoryChip
