'use client'

import { USTWTheme } from '@/common/lib/mui/theme'
import { Divider, useTheme } from '@mui/material'

export default function ArticlePostDivider() {
  const theme = useTheme<USTWTheme>()

  return <Divider sx={{ borderColor: theme.color.grey[3600] }} />
}
