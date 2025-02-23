'use client'

import { ExpandIcon } from '@/common/styles/assets/Icons'
import { useTheme } from '@mui/material'
import { USTWTheme } from '@/common/lib/mui/theme'
import UIconButton from '@/common/components/atoms/UIconButton'

type Props = {
  onClick?: () => void
}

export default function CardExpandButton({ onClick }: Props) {
  const theme = useTheme<USTWTheme>()
  return (
    <UIconButton
      variant="outlined"
      color="default"
      sx={{
        borderRadius: '9px',
        border: `1.5px solid ${theme.color.grey[1400]}`,
      }}
      size="small"
      onClick={onClick}
    >
      <ExpandIcon sx={{ color: theme.color.neutral[500] }} />
    </UIconButton>
  )
}
