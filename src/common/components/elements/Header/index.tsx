'use client'

import DesktopHeader from '@/common/components/elements/Header/Desktop/DesktopHeader'
import MobileHeader from '@/common/components/elements/Header/Mobile/MobileHeader'
import { useResponsive } from '@/common/lib/responsive/ResponsiveProvider'
import { useMemo } from 'react'
import ThemeProvider from '@/common/lib/mui/themeProvider'
import { useParams } from 'next/navigation'
import { Language } from '@/common/lib/i18n/types'
import { useRouteDetect } from '@/modules/Article/hooks/useRouteDetect'

export type HeaderProps = {
  containerClassName?: string
  className?: string
  onProfileClick?: () => void
  onSearchClick?: () => void
}

const Header = (props: HeaderProps) => {
  const { lang } = useParams<{ lang: Language }>()
  const { isKetagalan } = useRouteDetect()
  const { isMobile, isTablet } = useResponsive()

  const header = useMemo(() => {
    if (isMobile || isTablet) {
      return <MobileHeader {...props} />
    }

    return <DesktopHeader {...props} />
  }, [isMobile, isTablet, props])

  return (
    <ThemeProvider mode={isKetagalan ? 'ketagalan' : 'light'} lang={lang}>
      {header}
    </ThemeProvider>
  )
}

export default Header
