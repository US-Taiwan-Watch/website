'use client'
import {
  createTheme,
  PaletteOptions,
  responsiveFontSizes,
  Theme,
  ThemeOptions,
  styled as muiStyled,
} from '@mui/material/styles'

import {
  Public_Sans as PublicSans,
  Noto_Sans_TC as NotoSansTC,
} from 'next/font/google'
import { Language } from '@/common/lib/i18n/types'
import { colors, CreateMUIStyled } from '@mui/material'
import { CSSProperties } from 'react'

declare module '@mui/material/styles' {
  interface Theme {
    constants: {
      headerHeight: {
        xs: number
        sm: number
        md: number
      }
      zIndex: {
        header: number
        headerNavItem: number
        headerSearchResult: number
      }
    }
  }
  interface ThemeOptions {
    constants?: {
      headerHeight?: {
        xs?: number
        sm?: number
        md?: number
      }
      zIndex?: {
        header?: number
        headerNavItem?: number
        headerSearchResult?: number
      }
    }
  }

  interface TypographyVariants {
    h1: CSSProperties
    h2: CSSProperties
    h3: CSSProperties
    h4: CSSProperties
    h5: CSSProperties
    h6: CSSProperties
    subtitleXL: CSSProperties
    subtitleL: CSSProperties
    subtitleM: CSSProperties
    subtitleS: CSSProperties
    bodyM: CSSProperties
    bodyS: CSSProperties
    buttonL: CSSProperties
    buttonM: CSSProperties
    buttonS: CSSProperties
    buttonXS: CSSProperties
    buttonXXS: CSSProperties
    menu: CSSProperties
    articleH1: CSSProperties
    articleH2: CSSProperties
    articleH3: CSSProperties
    articleH4: CSSProperties
    articleH5: CSSProperties
    articleH6: CSSProperties
    body: CSSProperties
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    h1?: CSSProperties
    h2?: CSSProperties
    h3?: CSSProperties
    h4?: CSSProperties
    h5?: CSSProperties
    h6?: CSSProperties
    subtitleXL?: CSSProperties
    subtitleL?: CSSProperties
    subtitleM?: CSSProperties
    subtitleS?: CSSProperties
    bodyM?: CSSProperties
    bodyS?: CSSProperties
    buttonL?: CSSProperties
    buttonM?: CSSProperties
    buttonS?: CSSProperties
    buttonXS?: CSSProperties
    buttonXXS?: CSSProperties
    menu?: CSSProperties
    articleH1?: CSSProperties
    articleH2?: CSSProperties
    articleH3?: CSSProperties
    articleH4?: CSSProperties
    articleH5?: CSSProperties
    articleH6?: CSSProperties
    body?: CSSProperties
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    h1: true
    h2: true
    h3: true
    h4: true
    h5: true
    h6: true
    subtitleXL: true
    subtitleL: true
    subtitleM: true
    subtitleS: true
    bodyM: true
    bodyS: true
    buttonL: true
    buttonM: true
    buttonS: true
    buttonXS: true
    buttonXXS: true
    menu: true
    articleH1: true
    articleH2: true
    articleH3: true
    articleH4: true
    articleH5: true
    articleH6: true
    body: true
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
    200: '#B3B3FE', // Bill Filter
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
    1100: '#E8E8E8',
    1200: '#A2A2A2',
    1300: '#262121', // Ketagalan Cards background in Landing Page
    1400: '#DDDDDD',
    1500: '#5D5D5D',
    1600: '#DEDEDE',
    1700: '#E4E4E4',
    1800: '#AAAAAA',
    1900: '#EEEEEE',
    2000: '#5B6063',
    2100: '#565656', // Bill Total Count
    2200: '#828282',
    2300: '#4F4F4F', // Trend Bar Chart
    2400: '#2B2B2B', // Index Bill Card
    2500: '#F0F1F2', // Index Bill Card
    2600: '#F6F6F6', // Bill Filter
    2700: '#C4C4C4', // Bill Filter
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
    700: '#3986FF',
  },
  red: {
    ...colors.red,
    400: '#EF5666', // Primary 4
    500: '#FA3B29', // Republican
  },
  wheat: {
    100: '#F0D9A1', // Secondary 6
    200: '#E6CA87', // Ketagalan Media 1
    300: '#F7FFBE', // Democratic 1
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
    600: '#EBDACF',
  },
} as const

interface USTWThemeColor {
  color: typeof color & {
    header: {
      background: string // 背景色
      text: string // 文字色
      textHover: string // 文字滑鼠移入色
      textActive: string // 文字啟用色
      donationButton: string // 捐款按鈕色
      donationButtonText: string // 捐款按鈕文字色
      donationButtonHover: string // 捐款按鈕滑鼠移入色
      donationButtonTextHover: string // 捐款按鈕文字滑鼠移入色
      menuBackground: string // 選單背景色
    }
    searchBar: {
      inputBackground: string // 搜尋欄背景色
      searchButtonBackground: string // 搜尋按鈕背景色
      resultBackground: string // 搜尋結果背景色
      noResultSubtitle: string // 搜尋結果無結果文字顏色
      resultItemText: string // 搜尋結果文字顏色
    }
    pagination: {
      backgroundColor: string // 分頁背景色
      previousNextColor: string // 分頁按鈕文字顏色
      previousNextBackgroundColor: string // 分頁按頁背景顏色
      pageColor: string // 分頁數字顏色
      selectedPageBackgroundColor: string // 選中分頁背景色
      selectedPageColor: string // 選中分頁文字顏色
    }
  }
}

export interface USTWTheme extends Theme, USTWThemeColor {
  zIndex: Theme['zIndex'] & {
    header?: number
    headerNavItem?: number
    headerSearchResult?: number
  }
}

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
  text: {
    primary: color.common.white,
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
    pagination: {
      backgroundColor: color.common.white,
      previousNextColor: color.common.white,
      previousNextBackgroundColor: color.common.black,
      pageColor: color.common.black,
      selectedPageBackgroundColor: color.lime[500],
      selectedPageColor: color.common.black,
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
    pagination: {
      backgroundColor: '#FFFFFF1A',
      previousNextColor: color.common.white,
      previousNextBackgroundColor: color.grey[1300],
      pageColor: color.common.white,
      selectedPageBackgroundColor: color.wheat[200],
      selectedPageColor: color.common.black,
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
  zIndex: {
    header: 1300,
    headerNavItem: 1000,
    headerSearchResult: 900,
  },
}

type themeMode = 'light' | 'ketagalan'

// TODO : line height 只接受倍數，無法設定 px
const typographyVariants = {
  h1: { fontSize: 64, fontWeight: 500 }, // lineHeight: '75.2px'
  h2: { fontSize: 56, fontWeight: 600 }, // lineHeight: '65.8px'
  h3: { fontSize: 46, fontWeight: 600 }, // lineHeight: '54.05px'
  h4: { fontSize: 40, fontWeight: 600 }, // lineHeight: '47px'
  h5: { fontSize: 38, fontWeight: 600 }, // lineHeight: '44.65px'
  h6: { fontSize: 30, fontWeight: 600 }, // lineHeight: '35.25px'
  subtitleXL: { fontSize: 24, fontWeight: 600, display: 'block' }, // lineHeight: '28.2px'
  subtitleL: { fontSize: 22, fontWeight: 600, display: 'block' }, // lineHeight: '25.85px'
  subtitleM: { fontSize: 18, fontWeight: 600, display: 'block' }, // lineHeight: '21.15px'
  subtitleS: { fontSize: 16, fontWeight: 600, display: 'block' }, // lineHeight: '18.8px'
  bodyM: { fontSize: 16, fontWeight: 400, display: 'block' }, // lineHeight: '18.8px'
  bodyS: { fontSize: 14, fontWeight: 400, display: 'block' }, // lineHeight: '16.45px'
  buttonL: { fontSize: 22, fontWeight: 500, display: 'block' }, // lineHeight: '25.85px'
  buttonM: { fontSize: 18, fontWeight: 500, display: 'block' }, // lineHeight: '21.15px'
  buttonS: { fontSize: 16, fontWeight: 500, display: 'block' }, // lineHeight: '18.8px'
  buttonXS: { fontSize: 14, fontWeight: 500, display: 'block' }, // lineHeight: '16.45px'
  buttonXXS: { fontSize: 12, fontWeight: 500, display: 'block' }, // lineHeight: '14.1px'
  menu: { fontSize: 16, fontWeight: 600, display: 'block' }, // lineHeight: '18.8px'
  articleH1: { fontSize: 30, fontWeight: 700, display: 'block' }, // lineHeight: '35.25px'
  articleH2: { fontSize: 28, fontWeight: 700, display: 'block' }, // lineHeight: '32.9px'
  articleH3: { fontSize: 22, fontWeight: 700, display: 'block' }, // lineHeight: '25.85px'
  articleH4: { fontSize: 18, fontWeight: 700, display: 'block' }, // lineHeight: '21.15px'
  articleH5: { fontSize: 16, fontWeight: 700, display: 'block' }, // lineHeight: '18.8px'
  articleH6: { fontSize: 14, fontWeight: 300, display: 'block' }, // lineHeight: '18px'
  body: { fontSize: 16, fontWeight: 400, display: 'block' }, // lineHeight: '26px'
}

// 給予獨立頁面更改全域主題的方式
export interface CreateUSTWThemeOverride {
  palette?: PaletteOptions
}

export const createUSTWTheme = (
  mode: themeMode,
  lang: Language,
  override?: CreateUSTWThemeOverride
) => {
  switch (mode) {
    case 'light':
      return responsiveFontSizes(
        createTheme({
          ..._lightTheme,
          palette: {
            ...lightPalette,
            ...override?.palette,
          },
          typography: {
            fontFamily: getTypographyFontFamily(lang),
            ...typographyVariants,
          },
          constants,
        })
      )
    case 'ketagalan':
      return responsiveFontSizes(
        createTheme({
          ..._ketagalanTheme,
          palette: {
            ...ketagalanPalette,
            ...override?.palette,
          },
          typography: {
            fontFamily: getTypographyFontFamily(lang),
            ...typographyVariants,
          },
          constants,
        })
      )
  }
}
export const styled = muiStyled as CreateMUIStyled<USTWTheme>
