'use client'

import UnsupportedScreenSize from '@/common/components/elements/UnsupportedScreenSize'
import { ReactNode } from 'react'
import { useMediaQuery } from '@mui/material'

export default function ScreenSizeHandler({
  children,
}: {
  children: ReactNode
}) {
  // FIXME: 小於 1100px 就會爆版，先暫時隱藏
  const isScreenUnavailable = useMediaQuery('(max-width:1100px)')

  if (isScreenUnavailable) {
    return <UnsupportedScreenSize />
  }

  return <>{children}</>
}
