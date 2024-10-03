'use client'

import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined'
import {
  IconButton,
  SvgIconProps,
  Tooltip,
  TooltipProps,
  useTheme,
} from '@mui/material'
import { USTWTheme } from '@/common/lib/mui/theme'

type Props = {
  content: string
  tooltipProps?: TooltipProps
  iconProps?: SvgIconProps
  onClick?: () => void
}

export default function UCardInfo({
  content,
  tooltipProps,
  iconProps,
  onClick,
}: Props) {
  const theme = useTheme<USTWTheme>()

  return (
    <Tooltip title={content} arrow {...tooltipProps}>
      <IconButton size="small" onClick={onClick}>
        <ErrorOutlineOutlinedIcon
          {...iconProps}
          sx={{ color: theme.color.grey[1800], ...iconProps?.sx }}
        />
      </IconButton>
    </Tooltip>
  )
}
