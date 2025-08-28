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
import {
  BreakpointsOptions,
  colors,
  type Components,
  CreateMUIStyled,
} from '@mui/material'
import { CSSProperties } from 'react'

declare module '@mui/material/styles' {
  interface Theme {
    constants: {
      headerHeight: {
        sm: number
        md: number
      }
      zIndex: {
        header: number
        headerNavItem: number
        headerPopper: number
      }
    }
  }
  interface ThemeOptions {
    constants?: {
      headerHeight?: {
        sm?: number
        md?: number
      }
      zIndex?: {
        header?: number
        headerNavItem?: number
        headerPopper?: number
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
  fallback: ['Arial', 'sans-serif'],
  weight: ['300', '400', '500', '600', '700'],
})
export const nstc = NotoSansTC({
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Arial', 'sans-serif'],
  weight: ['300', '400', '500', '600', '700'],
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
    300: '#BEC8FD',
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
    3100: '#3E3E3E',
    3200: '#626262',
    3300: '#535353',
    3400: '#5E5E5E',
    3500: '#6E6E6E',
    3600: '#00000033',
    3700: '#686868',
    3800: '#A5A5A5',
    3900: '#505050',
    4000: '#CECECE',
    4100: '#EBEBEB',
    4200: '#666666',
    4300: '#EDEDED',
    4400: '#2C2C2C',
    4500: '#C2C2C2',
    4600: '#E6E6E6',
    4700: '#696969',
    4800: '#64748B',
    4900: '#989898',
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
    800: '#2A2E36',
    900: '#E7F4FE',
    1000: '#0083CC',
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
  pink: {
    ...colors.pink,
    1000: '#D855DC',
  },
} as const

interface USTWThemeColor {
  color: typeof color & {
    header: {
      background: string // 背景色
      mobileBackground: string // 手機背景色
      text: string // 文字色
      textHover: string // 文字滑鼠移入色
      textActive: string // 文字啟用色
      donationButton: string // 捐款按鈕色
      donationButtonText: string // 捐款按鈕文字色
      donationButtonHover: string // 捐款按鈕滑鼠移入色
      donationButtonTextHover: string // 捐款按鈕文字滑鼠移入色
      menuBackground: string // 選單背景色
      mobileNavMenuBackground: string // 手機選單背景色
      mobileNavMenuDivider: string // 手機選單分隔線色
      mobileNavMenuListItemText: string // 手機選單細項列表文字色
    }
    learMore: {
      text: string // 更多文字顏色
      mobileText: string // 手機更多文字顏色
    }
    searchBar: {
      inputBackground: string // 搜尋欄背景色
      searchButtonBackground: string // 搜尋按鈕背景色
      resultBackground: string // 搜尋結果背景色
      noResultSubtitle: string // 搜尋結果無結果文字顏色
      resultItemText: string // 搜尋結果文字顏色
      mobileResultItemText: string // 手機搜尋結果文字顏色
    }
    searchPageSearchBar: {
      inputBackground: string // 搜尋欄背景色
      resultBackground: string // 搜尋結果背景色
      noResultSubtitle: string // 搜尋結果無結果文字顏色
      resultItemText: string // 搜尋結果文字顏色
    }
    pagination: {
      dotPagination: string // 分頁點擊顏色
      backgroundColor: string // 分頁背景色
      previousNextColor: string // 分頁按鈕文字顏色
      previousNextBackgroundColor: string // 分頁按頁背景顏色
      pageColor: string // 分頁數字顏色
      selectedPageBackgroundColor: string // 選中分頁背景色
      selectedPageColor: string // 選中分頁文字顏色
    }
    tooltip: {
      people: {
        backgroundColor: string // 背景色
        textColor: string // 文字色
        bodyColor: string // 內文顏色
      }
    }
    categoryChip: {
      backgroundColor: string // 背景色
      textColor: string // 文字顏色
      activeBackgroundColor: string // 啟用背景色
      activeTextColor: string // 啟用文字顏色
    }
    tag: {
      border: string // 標籤邊框顏色
      text: string // 標籤文字顏色
      hash: string // 標籤 Hash 顏色
    }
    article: {
      contentPageBackground: string // 文章頁面背景顏色
      navText: string // 文章導航文字顏色
      navActiveText: string // 文章導航啟用文字顏色
      navDivider: string // 文章導航分隔線顏色
      tagText: string // 文章標籤文字顏色
      // ----- Card -----
      cardTitle: string // 文章卡片標題文字顏色
      cardDescription: string // 文章卡片描述文字顏色
      cardSimplifiedDescription: string // 文章卡片簡化描述文字顏色
      cardLearnMoreButton: string // 文章卡片學習更多按鈕顏色
      cardLearnMoreButtonText: string // 文章卡片學習更多按鈕文字顏色
      cardCategoryText: string // 文章卡片分類文字顏色
      // ----- Search -----
      searchResultCountBackground: string // 搜尋結果數量背景顏色
      // ----- Post -----
      postFixedToolBackground: string // 文章頁面固定工具列背景顏色
      postFixedToolBorder: string // 文章頁面固定工具列邊框顏色
      postFixedToolButton: string // 文章頁面固定工具列按鈕顏色
      postFixedToolButtonText: string // 文章頁面固定工具列按鈕文字顏色
      postFixedToolButtonHover: string // 文章頁面固定工具列按鈕滑鼠移入顏色
      postCategoryText: string // 文章分類文字顏色
      postTitle: string // 文章標題文字顏色
      postSubtitle: string // 文章副標題文字顏色
      postSectionTitle: string // 文章頁面 Header 標題文字顏色
      postSectionDivider: string // 文章章節分隔線顏色
      postSource: string // 文章來源文字顏色
      postContentHyperlink: string // 文章內文連結文字顏色
      postContentQuoteBorder: string // 文章內文引言框線顏色
      postContentFooterSource: string // 文章內文來源文字顏色
      postContentImageCaption: string // 文章內文圖片描述文字顏色
      postAuthorTitle: string // 文章作者標題文字顏色
      postAuthorName: string // 文章作者姓名文字顏色
      postAuthorDescription: string // 文章作者描述文字顏色
    }
    toast: {
      success: {
        background: string
        text: string
        icon: string
      }
      error: {
        background: string
        text: string
        icon: string
      }
      warning: {
        background: string
        text: string
        icon: string
      }
      info: {
        background: string
        text: string
        icon: string
      }
    }
    about: {
      header: {
        tabText: string
        tabActiveText: string
        tabActiveBackground: string
        borderDesktop: string
        borderMobile: string
      }
      card: {
        backgroundColor: string
      }
      footprint: {
        labelText: string
        labelBackground: string
        captionText: string
      }
    }
  }
}

export interface USTWTheme extends Theme, USTWThemeColor {
  zIndex: Theme['zIndex'] & {
    header?: number
    headerNavItem?: number
    headerPopper?: number
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
  ...color,
}

const ketagalanPalette: PaletteOptions = {
  mode: 'dark',
  primary: {
    main: color.wheat[200],
  },
  secondary: {
    main: color.wheat[200],
  },
  background: {
    default: color.grey[700],
  },
  text: {
    primary: color.common.white,
  },
  action: {
    disabledBackground: color.grey[400],
    disabled: color.neutral[200],
  },
  ...color,
}

const commonThemeBreakpoints: BreakpointsOptions = {
  values: {
    xs: 0,
    sm: 600,
    md: 900,
    lg: 1288,
    xl: 1388,
  },
}

const commonThemeComponents: Components<Omit<Theme, 'components'>> = {
  MuiUseMediaQuery: {
    defaultProps: {
      noSsr: true,
    },
  },
  MuiButtonBase: {
    defaultProps: {
      disableRipple: true,
    },
  },
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
}

const _lightTheme: USTWThemeOptions = {
  breakpoints: commonThemeBreakpoints,
  color: {
    ...color,
    header: {
      background: 'rgba(255, 255, 255, 0.8)',
      mobileBackground: '#F8F8F8',
      text: color.neutral[500],
      textHover: color.common.black,
      textActive: color.common.black,
      donationButton: color.common.black,
      donationButtonText: color.common.white,
      donationButtonHover: color.lime[500],
      donationButtonTextHover: color.common.black,
      menuBackground: color.common.white,
      mobileNavMenuBackground: '#F0F0F0',
      mobileNavMenuDivider: color.neutral[100],
      mobileNavMenuListItemText: color.neutral[500],
    },
    learMore: {
      text: color.common.black,
      mobileText: color.neutral[500],
    },
    searchBar: {
      inputBackground: color.grey[200],
      searchButtonBackground: color.purple[100],
      resultBackground: color.neutral[100],
      noResultSubtitle: color.neutral[500],
      resultItemText: color.common.black,
      mobileResultItemText: color.grey[3900],
    },
    searchPageSearchBar: {
      inputBackground: color.neutral[100],
      resultBackground: color.common.white,
      noResultSubtitle: color.neutral[500],
      resultItemText: color.common.black,
    },
    pagination: {
      dotPagination: color.grey[1200],
      backgroundColor: color.common.white,
      previousNextColor: color.common.white,
      previousNextBackgroundColor: color.common.black,
      pageColor: color.common.black,
      selectedPageBackgroundColor: color.lime[500],
      selectedPageColor: color.common.black,
    },
    tooltip: {
      people: {
        backgroundColor: color.indigo[800],
        textColor: color.common.white,
        bodyColor: '#FFFFFFDE',
      },
    },
    categoryChip: {
      backgroundColor: color.common.white,
      textColor: color.common.black,
      activeBackgroundColor: color.lime[500],
      activeTextColor: color.common.black,
    },
    tag: {
      border: color.neutral[500],
      text: color.common.black,
      hash: color.neutral[500],
    },
    article: {
      contentPageBackground: color.neutral[100],
      navText: color.grey[2000],
      navActiveText: color.orange[900],
      navDivider: color.neutral[400],
      tagText: color.common.black,
      // ----- Card -----
      cardTitle: color.common.black,
      cardDescription: color.common.black,
      cardSimplifiedDescription: color.grey[1500],
      cardLearnMoreButton: color.common.black,
      cardLearnMoreButtonText: color.common.white,
      cardCategoryText: color.orange[900],
      // ----- Search -----
      searchResultCountBackground: color.common.black,
      // ----- Post -----
      postFixedToolBackground: '#F8F8F8',
      postFixedToolBorder: '#0000001A',
      postFixedToolButton: color.grey[1000],
      postFixedToolButtonText: color.common.white,
      postFixedToolButtonHover: color.grey[1000],
      postCategoryText: color.orange[900],
      postTitle: color.grey[3100],
      postSubtitle: color.grey[3200],
      postSectionTitle: color.grey[3300],
      postSectionDivider: color.grey[400],
      postSource: color.orange[900],
      postContentHyperlink: color.orange[900],
      postContentQuoteBorder: color.purple[300],
      postContentFooterSource: color.grey[3400],
      postContentImageCaption: color.grey[3500],
      postAuthorTitle: color.purple[100],
      postAuthorName: color.common.black,
      postAuthorDescription: color.neutral[500],
    },
    toast: {
      success: {
        background: '#E8F5E9',
        text: '#2E7D32',
        icon: '#4CAF50',
      },
      error: {
        background: '#FFEBEE',
        text: '#C62828',
        icon: '#F44336',
      },
      warning: {
        background: '#FFF3E0',
        text: '#EF6C00',
        icon: '#FF9800',
      },
      info: {
        background: '#E3F2FD',
        text: '#1565C0',
        icon: '#2196F3',
      },
    },
    about: {
      header: {
        tabText: color.common.black,
        tabActiveText: color.common.white,
        tabActiveBackground: color.common.black,
        borderDesktop: '#0000001A',
        borderMobile: '#787F84',
      },
      card: {
        backgroundColor: '#F3F3F3',
      },
      footprint: {
        labelText: color.common.black,
        labelBackground: '#C1C1FF80',
        captionText: '#787F84',
      },
    },
  },
  components: {
    ...commonThemeComponents,
  },
}

const _ketagalanTheme: USTWThemeOptions = {
  breakpoints: commonThemeBreakpoints,
  color: {
    ...color,
    header: {
      background: 'rgba(255, 255, 255, 0.1)',
      mobileBackground: '#F8F8F8',
      text: 'rgba(255, 255, 255, 0.5)',
      textHover: color.common.white,
      textActive: color.common.white,
      donationButton: color.wheat[200],
      donationButtonText: color.common.black,
      donationButtonHover: color.grey[700],
      donationButtonTextHover: color.common.black,
      menuBackground: '#5B5952',
      mobileNavMenuBackground: '#312F27',
      mobileNavMenuDivider: color.neutral[500],
      mobileNavMenuListItemText: color.grey[400],
    },
    learMore: {
      text: color.common.white,
      mobileText: color.wheat[200],
    },
    searchBar: {
      inputBackground: '#0000001A',
      searchButtonBackground: '#FFFFFF80',
      resultBackground: '#3D3B34',
      noResultSubtitle: color.neutral[200],
      resultItemText: color.common.white,
      mobileResultItemText: color.common.white,
    },
    searchPageSearchBar: {
      inputBackground: color.neutral[100],
      resultBackground: color.common.white,
      noResultSubtitle: color.neutral[500],
      resultItemText: color.common.black,
    },
    pagination: {
      dotPagination: color.grey[900],
      backgroundColor: '#FFFFFF1A',
      previousNextColor: color.common.white,
      previousNextBackgroundColor: color.grey[1300],
      pageColor: color.common.white,
      selectedPageBackgroundColor: color.wheat[200],
      selectedPageColor: color.common.black,
    },
    tooltip: {
      people: {
        backgroundColor: color.common.white,
        textColor: color.common.black,
        bodyColor: '#000000DE',
      },
    },
    categoryChip: {
      backgroundColor: '#FFFFFF1A',
      textColor: color.common.white,
      activeBackgroundColor: color.wheat[200],
      activeTextColor: color.common.black,
    },
    tag: {
      border: color.wheat[200],
      text: color.wheat[200],
      hash: color.wheat[200],
    },
    article: {
      contentPageBackground: color.grey[900],
      navText: color.common.white,
      navActiveText: color.wheat[200],
      navDivider: '#FFFFFF80',
      tagText: color.wheat[200],
      // ----- Card -----
      cardTitle: color.common.white,
      cardDescription: color.common.white,
      cardSimplifiedDescription: color.common.white,
      cardLearnMoreButton: color.wheat[200],
      cardLearnMoreButtonText: color.common.black,
      cardCategoryText: color.wheat[200],
      // ----- Search -----
      searchResultCountBackground: '#FFFFFF1A',
      // ----- Post -----
      postFixedToolBackground: '#433B3B',
      postFixedToolBorder: '#0000001A',
      postFixedToolButton: color.wheat[200],
      postFixedToolButtonText: color.common.black,
      postFixedToolButtonHover: color.wheat[200],
      postCategoryText: color.wheat[200],
      postTitle: color.common.white,
      postSubtitle: color.neutral[300],
      postSectionTitle: color.wheat[200],
      postSectionDivider: color.neutral[500],
      postSource: color.grey[400],
      postContentHyperlink: color.wheat[200],
      postContentQuoteBorder: color.wheat[200],
      postContentFooterSource: color.grey[400],
      postContentImageCaption: color.neutral[300],
      postAuthorTitle: color.wheat[200],
      postAuthorName: color.common.white,
      postAuthorDescription: color.neutral[200],
    },
    toast: {
      success: {
        background: '#1B5E20',
        text: '#A5D6A7',
        icon: '#81C784',
      },
      error: {
        background: '#B71C1C',
        text: '#EF9A9A',
        icon: '#E57373',
      },
      warning: {
        background: '#E65100',
        text: '#FFB74D',
        icon: '#FFA726',
      },
      info: {
        background: '#0D47A1',
        text: '#90CAF9',
        icon: '#64B5F6',
      },
    },
    about: {
      header: {
        tabText: color.common.white,
        tabActiveText: color.common.white,
        tabActiveBackground: '#FFFFFF1A',
        borderDesktop: '#FFFFFF1A',
        borderMobile: '#787F84',
      },
      card: {
        backgroundColor: '#FFFFFF1A',
      },
      footprint: {
        labelText: color.common.black,
        labelBackground: '#E6CA87',
        captionText: '#C0C5C8',
      },
    },
  },
  components: {
    ...commonThemeComponents,
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
    sm: 48,
    md: 70,
  },
  zIndex: {
    header: 1100,
    headerNavItem: 1000,
    headerPopper: 900,
  },
}

export type ThemeMode = 'light' | 'ketagalan'

// 用於設定 typography 的 media query
const _theme = createTheme({
  breakpoints: commonThemeBreakpoints,
})

const typographyVariants = {
  h1: {
    fontSize: '4rem',
    fontWeight: 500,
    [_theme.breakpoints.down('sm')]: {
      fontSize: '1.75rem',
      fontWeight: 500,
    },
  },
  h2: {
    fontSize: '3.5rem',
    fontWeight: 600,
    [_theme.breakpoints.down('sm')]: {
      fontSize: '1.5rem',
      fontWeight: 500,
    },
  },
  h3: {
    fontSize: '2.875rem',
    fontWeight: 600,
    [_theme.breakpoints.down('sm')]: {
      fontSize: '1.375rem',
      fontWeight: 500,
    },
  },
  h4: {
    fontSize: '2.5rem',
    fontWeight: 600,
    [_theme.breakpoints.down('sm')]: {
      fontSize: '1.25rem',
      fontWeight: 500,
    },
  },
  h5: {
    fontSize: '2.375rem',
    fontWeight: 600,
    [_theme.breakpoints.down('sm')]: {
      fontSize: '1.125rem',
      fontWeight: 500,
    },
  },
  h6: {
    fontSize: '1.875rem',
    fontWeight: 600,
    [_theme.breakpoints.down('sm')]: {
      fontSize: '1rem',
      fontWeight: 500,
    },
  },
  subtitleXL: { fontSize: '1.5rem', fontWeight: 600, display: 'block' },
  subtitleL: {
    fontSize: '1.375rem',
    fontWeight: 600,
    display: 'block',
    [_theme.breakpoints.down('sm')]: {
      fontSize: '1.125rem',
      fontWeight: 600,
    },
  },
  subtitleM: {
    fontSize: '1.125rem',
    fontWeight: 600,
    display: 'block',
    [_theme.breakpoints.down('sm')]: {
      fontSize: '1rem',
      fontWeight: 600,
    },
  },
  subtitleS: {
    fontSize: '1rem',
    fontWeight: 600,
    display: 'block',
    [_theme.breakpoints.down('sm')]: {
      fontSize: '0.875rem',
      fontWeight: 600,
    },
  },
  bodyM: {
    fontSize: '1rem',
    fontWeight: 400,
    display: 'block',
    [_theme.breakpoints.down('sm')]: {
      fontSize: '0.875rem',
      fontWeight: 400,
    },
  },
  bodyS: {
    fontSize: '0.875rem',
    fontWeight: 400,
    display: 'block',
    [_theme.breakpoints.down('sm')]: {
      fontSize: '0.75rem',
      fontWeight: 400,
    },
  },
  buttonL: {
    fontSize: '1.375rem',
    fontWeight: 500,
    display: 'block',
    [_theme.breakpoints.down('sm')]: {
      fontSize: '1rem',
      fontWeight: 500,
    },
  },
  buttonM: {
    fontSize: '1.125rem',
    fontWeight: 500,
    display: 'block',
    [_theme.breakpoints.down('sm')]: {
      fontSize: '0.875rem',
      fontWeight: 500,
    },
  },
  buttonS: {
    fontSize: '1rem',
    fontWeight: 500,
    display: 'block',
    [_theme.breakpoints.down('sm')]: {
      fontSize: '0.75rem',
      fontWeight: 500,
    },
  },
  buttonXS: {
    fontSize: '0.875rem',
    fontWeight: 500,
    display: 'block',
    [_theme.breakpoints.down('sm')]: {
      fontSize: '0.75rem',
      fontWeight: 500,
    },
  },
  buttonXXS: {
    fontSize: '0.75rem',
    fontWeight: 500,
    display: 'block',
    [_theme.breakpoints.down('sm')]: {
      fontSize: '0.625rem',
      fontWeight: 500,
    },
  },
  menu: {
    fontSize: '1rem',
    fontWeight: 600,
    display: 'block',
    [_theme.breakpoints.down('sm')]: {
      fontSize: '0.9375rem',
      fontWeight: 600,
    },
  },
  articleH1: {
    fontSize: '1.875rem',
    fontWeight: 700,
    display: 'block',
    [_theme.breakpoints.down('sm')]: {
      fontSize: '1.375rem',
      fontWeight: 700,
    },
  },
  articleH2: {
    fontSize: '1.75rem',
    fontWeight: 700,
    display: 'block',
    [_theme.breakpoints.down('sm')]: {
      fontSize: '1.25rem',
      fontWeight: 700,
    },
  },
  articleH3: {
    fontSize: '1.375rem',
    fontWeight: 700,
    display: 'block',
    [_theme.breakpoints.down('sm')]: {
      fontSize: '1.125rem',
      fontWeight: 700,
    },
  },
  articleH4: {
    fontSize: '1.125rem',
    fontWeight: 700,
    display: 'block',
    [_theme.breakpoints.down('sm')]: {
      fontSize: '1rem',
      fontWeight: 700,
    },
  },
  articleH5: {
    fontSize: '1rem',
    fontWeight: 300,
    display: 'block',
    [_theme.breakpoints.down('sm')]: {
      fontSize: '0.875rem',
      fontWeight: 300,
    },
  },
  articleH6: {
    fontSize: '0.875rem',
    fontWeight: 300,
    display: 'block',
    [_theme.breakpoints.down('sm')]: {
      fontSize: '0.75rem',
      fontWeight: 300,
    },
  },
  body: {
    fontSize: '1rem',
    fontWeight: 400,
    display: 'block',
    [_theme.breakpoints.down('sm')]: {
      fontSize: '0.875rem',
      fontWeight: 400,
    },
  },
}

// 給予獨立頁面更改全域主題的方式
export interface CreateUSTWThemeOverride {
  palette?: PaletteOptions
}

export const createUSTWTheme = (
  mode: ThemeMode,
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

/** Global Styles */
export const globalStyles = {
  body: {
    overflowX: 'hidden',
  },
  a: {
    textDecoration: 'none',
    color: 'inherit',
  },
}
