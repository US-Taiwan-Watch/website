'use client'
import { createTheme, PaletteOptions, responsiveFontSizes, Theme, ThemeOptions } from '@mui/material/styles'

import { Public_Sans as PublicSans, Noto_Sans_TC as NotoSansTC } from 'next/font/google'
import { Language } from '@/common/lib/i18n/types'
import { colors } from '@mui/material'

export const ps = PublicSans({
  subsets: ['latin'],
  display: 'swap',
})
export const nstc = NotoSansTC({
  subsets: ['latin'],
  display: 'swap',
})

const color = {
  ...colors,
  lime: {
    ...colors.lime,
    500: '#D8F501', // Primary 1
  },
  purple: {
    ...colors.purple,
    100: '#C1C1FF', // Secondary
  },
  grey: {
    ...colors.grey,
    100: '#F3F3F3', // Base White
    400: '#C0C5C8', // Secondary 7
    500: '#A8A8A8', // Other
    700: '#625D4D', // Ketagalan Media 2
    900: '#312F27', // Ketagalan Media 3
    1000: '#3B3B3B',
  },
  orange: {
    ...colors.orange,
    100: '#FCFAD1', // Secondary 5
    900: '#FF6809', // Primary 2
  },
  indigo: {
    ...colors.indigo,
    50: '#D6EDFF', // Secondary 2
    400: '#3664E5', // Primary 3
    600: '#3248BE', // Democratic
  },
  red: {
    ...colors.red,
    400: '#EF5666', // Primary 4
    500: '#FA3B29', // Republican
  },
  wheat: {
    100: '#F0D9A1', // Secondary 6
    200: '#E6CA87', // Ketagalan Media 1
  },
  tyrian: {
    50: '#F8D9EF', // Secondary 3
  },
  green: {
    ...colors.green,
    100: '#D1FCDD', // Democratic 2
  },
  neutral: {
    100: '#E0E0E0',
    200: '#D6DBDE',
    300: '#C0C5C8',
    400: '#9CA2A5',
    500: '#787F84',
    600: '#222222',
  },
} as const

interface USTWThemeColor {
  color: typeof color & {};
}

export interface USTWTheme extends Theme, USTWThemeColor {}

interface USTWThemeOptions extends ThemeOptions, USTWThemeColor {}

const lightPalette: PaletteOptions = {
  mode: 'light',
  primary: {
    main: color.lime[500],
  },
  secondary: {
    main: color.purple[100],
  },
  info: {
    main: color.common.black,
    dark: color.neutral[500],
  },
  background: {
    default: color.grey[100],
  },
  text: {
    primary: color.common.black,
  },
  action: {
    disabledBackground: color.grey[400],
    disabled: color.neutral[200],
  },
}

const ketagalanPalette: PaletteOptions = {
  mode: 'dark',
  primary: {
    main: color.wheat[200],
  },
  secondary: {
    main: color.purple[100],
  },
  background: {
    default: color.grey[700],
  },
  action: {
    disabledBackground: color.grey[400],
    disabled: color.neutral[200],
  },
}

const _lightTheme: USTWThemeOptions = {
  color: {
    ...color,
  },
}

const _ketagalanTheme: USTWThemeOptions = {
  color: {
    ...color,
  },
}

const getTypographyFontFamily = (lang: Language) => {
  switch (lang) {
    case 'en-US':
      return ps.style.fontFamily
    case 'zh-TW':
      return nstc.style.fontFamily
    default:
      return ps.style.fontFamily
  }
}

type themeMode = 'light' | 'ketagalan'

export const createUSTWTheme = (mode: themeMode, lang: Language) => {
  switch (mode) {
    case 'light':
      return responsiveFontSizes(createTheme({
        ..._lightTheme,
        palette: lightPalette,
        typography: {
          fontFamily: getTypographyFontFamily(lang),
        },
      }))
    case 'ketagalan':
      return responsiveFontSizes(createTheme({
        ..._ketagalanTheme,
        palette: ketagalanPalette,
        typography: {
          fontFamily: getTypographyFontFamily(lang),
        },
      }))
  }
}
