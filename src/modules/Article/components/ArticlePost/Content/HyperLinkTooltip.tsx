'use client'

import HyperLinkTooltipCard, {
  HyperLinkTooltipCardProps,
} from '@/common/components/elements/HyperLinkTooltipCard'
import { styled, USTWTheme } from '@/common/lib/mui/theme'
import {
  Tooltip,
  tooltipClasses,
  TooltipProps,
  useTheme,
  Drawer,
  Typography,
} from '@mui/material'
import { useResponsive } from '@/common/lib/responsive/ResponsiveProvider'
import { useState } from 'react'

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
  const { isHoverable } = useResponsive()
  const theme = useTheme<USTWTheme>()
  const [drawerOpen, setDrawerOpen] = useState(false)

  if (!isHoverable) {
    return (
      <>
        <span
          style={{
            color: theme.color.article.postContentHyperlink,
            fontSize: theme.typography.body.fontSize,
            fontWeight: 400,
            display: 'inline-block',
            width: 'fit-content',
          }}
          onClick={() => setDrawerOpen(true)}
        >
          {text}
        </span>
        <Drawer
          anchor="bottom"
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
          sx={{
            '& .MuiDrawer-paper': {
              borderRadius: `${theme.shape.borderRadius * 5}px ${theme.shape.borderRadius * 5}px 0px 0px`,
            },
          }}
        >
          <HyperLinkTooltipCard {...hyperLinkTooltipCardProps} />
        </Drawer>
      </>
    )
  }

  return (
    <StyledTooltip
      title={<HyperLinkTooltipCard {...hyperLinkTooltipCardProps} />}
    >
      <Typography
        component="span"
        sx={{
          color: theme.color.article.postContentHyperlink,
          fontSize: theme.typography.body.fontSize,
          fontWeight: 400,
          display: 'inline-block',
          width: 'fit-content',
          cursor: 'pointer',
        }}
      >
        {text}
      </Typography>
    </StyledTooltip>
  )
}

export default HyperLinkTooltip
