'use client'

import DesktopHeader from '@/common/components/elements/Header/Desktop/DesktopHeader'
import MobileHeader from '@/common/components/elements/Header/Mobile/MobileHeader'
import { useResponsive } from '@/common/lib/responsive/ResponsiveProvider'

export type HeaderProps = {
  containerClassName?: string
  className?: string
  onProfileClick?: () => void
  onSearchClick?: () => void
}

const Header = (props: HeaderProps) => {
  const { isMobile } = useResponsive()

  if (isMobile) {
    return <MobileHeader {...props} />
  }

  return <DesktopHeader {...props} />
}

export default Header
