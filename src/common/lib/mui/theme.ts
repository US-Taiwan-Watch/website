'use client'
import { createTheme, PaletteOptions, responsiveFontSizes, Theme, ThemeOptions } from '@mui/material/styles'

import { Public_Sans as PublicSans, Noto_Sans_TC as NotoSansTC } from 'next/font/google'
import { Language } from '@/common/lib/i18n/types'
import { colors } from '@mui/material'

declare module '@mui/material/styles' {
  interface Theme {
    constants: {
      headerHeight: {
        xs: number;
        sm: number;
        md: number;
      }
    }
  }
  interface ThemeOptions {
    constants?: {
      headerHeight?: {
        xs?: number;
        sm?: number;
        md?: number;
      }
    }
  }
}

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
    200: '#DFDFDF',
    400: '#C0C5C8', // Secondary 7
    500: '#A8A8A8', // Other
    600: '#A9A9A9',
    700: '#625D4D', // Ketagalan Media 2
    800: '#AFAFAF', // Background
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
  color: typeof color & {
    header: {
      background: string; // 背景色
      text: string; // 文字色
      textHover: string; // 文字滑鼠移入色
      textActive: string; // 文字啟用色
      donationButton: string; // 捐款按鈕色
      donationButtonText: string; // 捐款按鈕文字色
      donationButtonHover: string; // 捐款按鈕滑鼠移入色
      donationButtonTextHover: string; // 捐款按鈕文字滑鼠移入色
      menuBackground: string; // 選單背景色
    },
    searchBar: {
      inputBackground: string; // 搜尋欄背景色
      searchButtonBackground: string; // 搜尋按鈕背景色
      resultBackground: string; // 搜尋結果背景色
      noResultSubtitle: string; // 搜尋結果無結果文字顏色
      resultItemText: string; // 搜尋結果文字顏色
    }
  };
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
    default: color.grey[400],
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
    default: color.grey[900],
  },
  action: {
    disabledBackground: color.grey[400],
    disabled: color.neutral[200],
  },
}

const _lightTheme: USTWThemeOptions = {
  color: {
    ...color,
    header: {
      background: 'rgba(255, 255, 255, 0.8)',
      text: color.neutral[500],
      textHover: color.common.black,
      textActive: color.common.black,
      donationButton: color.common.black,
      donationButtonText: color.common.white,
      donationButtonHover: color.lime[500],
      donationButtonTextHover: color.common.black,
      menuBackground: color.common.white,
    },
    searchBar: {
      inputBackground: color.grey[200],
      searchButtonBackground: color.purple[100],
      resultBackground: color.neutral[100],
      noResultSubtitle: color.neutral[500],
      resultItemText: color.common.black,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          '&:hover': {
            boxShadow: 'none',
          },
        },
      },
    },
  },
}

const _ketagalanTheme: USTWThemeOptions = {
  color: {
    ...color,
    header: {
      background: 'rgba(255, 255, 255, 0.1)',
      text: 'rgba(255, 255, 255, 0.5)',
      textHover: color.common.white,
      textActive: color.common.white,
      donationButton: color.wheat[200],
      donationButtonText: color.common.black,
      donationButtonHover: color.grey[700],
      donationButtonTextHover: color.common.black,
      menuBackground: '#5B5952',
    },
    searchBar: {
      inputBackground: '#0000001A',
      searchButtonBackground: '#FFFFFF80',
      resultBackground: '#3D3B34',
      noResultSubtitle: color.neutral[200],
      resultItemText: color.common.white,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          '&:hover': {
            boxShadow: 'none',
          },
        },
      },
    },
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

type USTWThemeConstants = ThemeOptions['constants']
const constants: USTWThemeConstants = {
  headerHeight: {
    xs: 48,
    sm: 48,
    md: 70,
  },
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
        constants,
      }))
    case 'ketagalan':
      return responsiveFontSizes(createTheme({
        ..._ketagalanTheme,
        palette: ketagalanPalette,
        typography: {
          fontFamily: getTypographyFontFamily(lang),
        },
        constants,
      }))
  }
}
