import { usePathname, useParams } from 'next/navigation'
import { useMemo } from 'react'
import { Language } from '@/common/lib/i18n/types'
import useURouterClient from '@/common/lib/router/useURouterClient'
import { RouteName } from '@/common/lib/router/routes'
import { USTWTheme } from '@/common/lib/mui/theme'
import { useMediaQuery } from '@mui/material'

/**
 * 是否顯示相關介面
 * @returns
 */
export default function useAccountLayout() {
  const { lang } = useParams<{ lang: Language }>()
  const { resolveRouteUrl } = useURouterClient()
  const pathname = usePathname()
  const pathnameWithoutLang = useMemo(() => {
    const regex = new RegExp(`^/${lang}`)
    return pathname.replace(regex, '')
  }, [lang, pathname])

  const isCompactView = useMediaQuery((theme: USTWTheme) =>
    theme.breakpoints.down('md')
  )

  /**
   * 是否顯示側邊欄
   * Mobile 和 Tablet 在 /account/... 時不顯示側邊欄
   */
  const withSidebar = useMemo(() => {
    if (isCompactView) {
      return ![
        resolveRouteUrl({ name: RouteName.AccountSubscribe }),
        resolveRouteUrl({ name: RouteName.AccountSetting }),
        resolveRouteUrl({ name: RouteName.AccountPassword }),
        resolveRouteUrl({ name: RouteName.AccountNotification }),
      ].includes(pathnameWithoutLang)
    }
    return true
  }, [isCompactView, pathnameWithoutLang, resolveRouteUrl])

  /**
   * 是否顯示內容
   * Mobile 和 Tablet 在 /account 時不顯示內容
   */
  const withContent = useMemo(() => {
    if (isCompactView) {
      return (
        pathnameWithoutLang !== resolveRouteUrl({ name: RouteName.Account })
      )
    }
    return true
  }, [isCompactView, pathnameWithoutLang, resolveRouteUrl])

  /**
   * 背景顏色
   */
  const backgroundColor = useMemo(() => {
    if (
      isCompactView &&
      pathnameWithoutLang === resolveRouteUrl({ name: RouteName.Account })
    )
      return '#F3F3F3'
    if (isCompactView) return '#E0E0E0'
    return '#C0C5C8'
  }, [isCompactView, pathnameWithoutLang, resolveRouteUrl])

  return {
    withSidebar,
    withContent,
    backgroundColor,
    pathnameWithoutLang,
    isCompactView,
  }
}
