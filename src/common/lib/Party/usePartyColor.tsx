'use client'

import { useTheme } from '@mui/material'
import { USTWTheme } from '@/common/lib/mui/theme'
import { Party } from '@/common/enums/Party'
import { useMemo } from 'react'

export default function usePartyColor() {
  const theme = useTheme<USTWTheme>()

  const partyColor = useMemo<Record<Party, string>>(
    () => ({
      [Party.DEMOCRATIC]: theme.color.indigo[600],
      [Party.REPUBLICAN]: theme.color.red[500],
      [Party.OTHER]: theme.color.grey[500],
      [Party.INDEPENDENT]: theme.color.grey[500],
      [Party.LIBERTARIAN]: theme.color.grey[500],
      [Party.GREEN]: theme.color.grey[500],
      [Party.CONSTITUTION]: theme.color.grey[500],
    }),
    [theme]
  )

  return {
    partyColor,
  }
}
