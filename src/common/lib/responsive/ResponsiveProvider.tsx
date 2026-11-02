'use client'

import { createContext, type ReactNode, useContext } from 'react'
import { USTWTheme } from '@/common/lib/mui/theme'
import useMediaQuery from '@mui/material/useMediaQuery'

interface ResponsiveProviderContext {
  /** 是否為行動裝置 */
  isMobile: boolean
  /** 是否為平板裝置 */
  isTablet: boolean
  /** 是否為可以 hover 的裝置 */
  isHoverable?: boolean
}

const ResponsiveContext = createContext<ResponsiveProviderContext | undefined>(
  undefined
)

export const useResponsive = () => {
  const context = useContext(ResponsiveContext)
  if (!context) {
    throw new Error('useResponsive must be used within a ResponsiveProvider')
  }
  return context
}

interface ResponsiveProviderProps {
  children: ReactNode
}

export const ResponsiveProvider = ({ children }: ResponsiveProviderProps) => {
  const isMobile = useMediaQuery((theme: USTWTheme) =>
    theme.breakpoints.down('sm')
  )
  const isTablet = useMediaQuery((theme: USTWTheme) =>
    theme.breakpoints.between('sm', 'md')
  )
  const isHoverable = useMediaQuery('(hover: hover)')

  return (
    <ResponsiveContext.Provider value={{ isMobile, isTablet, isHoverable }}>
      {children}
    </ResponsiveContext.Provider>
  )
}
