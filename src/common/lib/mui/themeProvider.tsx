'use client'

import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles'
import { Language } from '@/common/lib/i18n/types'
import { createUSTWTheme, CreateUSTWThemeOverride } from '@/common/lib/mui/theme'
import type React from 'react'

const ThemeProvider = ({
  lang,
  override,
  children,
}: {
  lang: Language;
  override?: CreateUSTWThemeOverride
  children: React.ReactNode;
}) => {
  return (
    <MuiThemeProvider theme={createUSTWTheme('light', lang, override)}>
      {children}
    </MuiThemeProvider>
  )
}

export default ThemeProvider
