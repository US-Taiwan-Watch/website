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
import { GlobalStyles, CssBaseline } from '@mui/material'

const ThemeProvider = ({
  mode = 'light',
  lang,
  override,
  withCssBaseline = true,
  children,
}: {
  mode?: ThemeMode
  lang: Language
  override?: CreateUSTWThemeOverride
  /**
   * 是否啟用 CssBaseline，CssBaseline 會更改背景顏色
   */
  withCssBaseline?: boolean
  children: React.ReactNode
}) => {
  return (
    <MuiThemeProvider theme={createUSTWTheme(mode, lang, override)}>
      <GlobalStyles styles={globalStyles} />
      {withCssBaseline && <CssBaseline enableColorScheme />}
      {children}
    </MuiThemeProvider>
  )
}

export default ThemeProvider
