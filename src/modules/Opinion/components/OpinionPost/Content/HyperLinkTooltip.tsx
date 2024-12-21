'use client'

import HyperLinkTooltipCard, {
  HyperLinkTooltipCardProps,
} from '@/common/components/elements/HyperLinkTooltipCard'
import { styled, USTWTheme } from '@/common/lib/mui/theme'
import { Tooltip, tooltipClasses, TooltipProps, useTheme } from '@mui/material'

const StyledTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(() => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: 'transparent',
    padding: 0,
  },
}))

interface HyperLinkTooltipProps {
  text: string
  hyperLinkTooltipCardProps: HyperLinkTooltipCardProps
}

const HyperLinkTooltip = function HyperLinkTooltip({
  text,
  hyperLinkTooltipCardProps,
}: HyperLinkTooltipProps) {
  const theme = useTheme<USTWTheme>()

  return (
    <StyledTooltip
      title={<HyperLinkTooltipCard {...hyperLinkTooltipCardProps} />}
    >
      <a
        style={{
          color: theme.color.orange[900],
          fontSize: theme.typography.body.fontSize,
          fontWeight: 400,
          width: 'fit-content',
        }}
        href="#"
        target="_blank"
      >
        {text}
      </a>
    </StyledTooltip>
  )
}

export default HyperLinkTooltip
