'use client'

import DesktopFooter from '@/common/components/elements/Footer/Desktop/DesktopFooter'
import MobileFooter from '@/common/components/elements/Footer/Mobile/MobileFooter'
import { useResponsive } from '@/common/lib/responsive/ResponsiveProvider'

const Footer = () => {
  const { isMobile } = useResponsive()

  if (isMobile) {
    return <MobileFooter />
  }

  return <DesktopFooter />
}

export default Footer
