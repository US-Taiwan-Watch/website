'use client'

import DesktopHeader from '@/common/components/elements/Header/Desktop/DesktopHeader'
import MobileHeader from '@/common/components/elements/Header/Mobile/MobileHeader'
import ThemeProvider from '@/common/lib/mui/themeProvider'
import { useParams } from 'next/navigation'
import { Language } from '@/common/lib/i18n/types'
import { useRouteDetect } from '@/modules/Article/hooks/useRouteDetect'
import Box from '@mui/material/Box'

export type HeaderProps = {
  containerClassName?: string
  className?: string
  onProfileClick?: () => void
  onSearchClick?: () => void
}

const Header = (props: HeaderProps) => {
  const { lang } = useParams<{ lang: Language }>()
  const { isKetagalan } = useRouteDetect()

  return (
    <ThemeProvider mode={isKetagalan ? 'ketagalan' : 'light'} lang={lang}>
      {/* Mobile & Tablet Header - Hidden on Desktop */}
      <Box sx={{ display: { xs: 'block', md: 'none' } }}>
        <MobileHeader {...props} />
      </Box>

      {/* Desktop Header - Hidden on Mobile & Tablet */}
      <Box sx={{ display: { xs: 'none', md: 'block' } }}>
        <DesktopHeader {...props} />
      </Box>
    </ThemeProvider>
  )
}

export default Header
