'use client'

import UHStack from '@/common/components/atoms/UHStack'
import { Typography } from '@mui/material'
import Link from 'next/link'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { ReactNode } from 'react'

type Props = {
  link: string;
  text?: string;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
}

const ULinkText = ({ link, text, startIcon, endIcon }: Props) => {
  return (
    <Link href={link}>
      <UHStack gap={1} alignItems='center'>
        {startIcon}
        <Typography variant="body1" fontWeight={500}>
          {text ?? 'Learn More'}
        </Typography>
        {endIcon ?? <ArrowForwardIcon />}
      </UHStack>
    </Link>
  )
}

export default ULinkText
