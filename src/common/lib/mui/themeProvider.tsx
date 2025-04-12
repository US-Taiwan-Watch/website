'use client'

import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles'
import { Language } from '@/common/lib/i18n/types'
import {
  createUSTWTheme,
  CreateUSTWThemeOverride,
  globalStyles,
  ThemeMode,
} from '@/common/lib/mui/theme'
import type React from 'react'
import { GlobalStyles } from '@mui/material'

const ThemeProvider = ({
  mode = 'light',
  lang,
  override,
  children,
}: {
  mode?: ThemeMode
  lang: Language
  override?: CreateUSTWThemeOverride
  children: React.ReactNode
}) => {
  return (
    <MuiThemeProvider theme={createUSTWTheme(mode, lang, override)}>
      <GlobalStyles styles={globalStyles} />
      {children}
    </MuiThemeProvider>
  )
}

export default ThemeProvider
