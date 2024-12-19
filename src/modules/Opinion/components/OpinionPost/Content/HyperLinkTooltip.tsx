'use client'

import PeopleTooltip from '@/common/components/elements/HyperLinkTooltip/PeopleTooltip'
import { styled } from '@/common/lib/mui/theme'
import { Tooltip, tooltipClasses, TooltipProps } from '@mui/material'
import Link from 'next/link'

const StyledTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(() => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: 'transparent',
    padding: 0,
  },
}))

interface HyperLinkTooltipProps {
  anchorEl: HTMLLinkElement
}

const HyperLinkTooltip = function HyperLinkTooltip({
  anchorEl,
}: HyperLinkTooltipProps) {
  return (
    <StyledTooltip title={<PeopleTooltip />}>
      {/** 偽造一個連結元素，長寬尺寸都與 hover 的內部連結元素相同，並設定 hover 的內部連結元素的 tooltip */}
      <Link
        href={anchorEl.href}
        style={{
          position: 'absolute',
          top: anchorEl.offsetTop,
          left: anchorEl.offsetLeft,
          transform: 'translate(0%, -100%)',
          width: anchorEl.offsetWidth,
          height: anchorEl.offsetHeight,
          cursor: 'pointer',
        }}
      />
    </StyledTooltip>
  )
}

export default HyperLinkTooltip
