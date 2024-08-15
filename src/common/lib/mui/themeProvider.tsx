'use client'

import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles'
import { Language } from '@/common/lib/i18n/types'
import { createLightTheme } from '@/common/lib/mui/theme'
import type React from 'react'

const ThemeProvider = ({
  lang,
  children,
}: {
  lang: Language;
  children: React.ReactNode;
}) => {
  return (
    <MuiThemeProvider theme={createLightTheme(lang)}>
      {children}
    </MuiThemeProvider>
  )
}

export default ThemeProvider
