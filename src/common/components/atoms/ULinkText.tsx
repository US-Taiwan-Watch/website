'use client'

import UHStack from '@/common/components/atoms/UHStack'
import { Typography } from '@mui/material'
import Link from 'next/link'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { ReactNode, useState } from 'react'
import { USTWTheme } from '@/common/lib/mui/theme'
import { useTheme } from '@mui/material/styles'

type Props = {
  link: string;
  text?: string;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
}

const ULinkText = ({ link, text, startIcon, endIcon }: Props) => {
  const theme = useTheme<USTWTheme>()
  const [isHover, setIsHover] = useState(false)
  const color = isHover ? theme.color.neutral[400] : theme.color.grey[1300]

  return (
    <Link href={link}>
      <UHStack
        gap={1}
        alignItems='center'
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        {startIcon}
        <Typography
          variant="body1"
          fontWeight={500}
          sx={{ color }}
        >
          {text ?? 'Learn More'}
        </Typography>
        {endIcon ?? <ArrowForwardIcon sx={{ color }} />}
      </UHStack>
    </Link>
  )
}

export default ULinkText
