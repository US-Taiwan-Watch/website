import { useResponsive } from '@/common/lib/responsive/ResponsiveProvider'
import { usePathname, useParams } from 'next/navigation'
import { useMemo } from 'react'
import { Language } from '@/common/lib/i18n/types'
import useURouterClient from '@/common/lib/router/useURouterClient'
import { RouteName } from '@/common/lib/router/routes'

/**
 * 是否顯示相關介面
 * @returns
 */
export default function useAccountLayout() {
  const { lang } = useParams<{ lang: Language }>()
  const { resolveRouteUrl } = useURouterClient()
  const { isMobile } = useResponsive()
  const pathname = usePathname()
  const pathnameWithoutLang = useMemo(() => {
    const regex = new RegExp(`^/${lang}`)
    return pathname.replace(regex, '')
  }, [lang, pathname])

  const isNarrow = useMemo(() => {
    return isMobile
  }, [isMobile])

  /**
   * 是否顯示側邊欄
   * Mobile 和 Tablet 在 /account/... 時不顯示側邊欄
   */
  const withSidebar = useMemo(() => {
    if (isNarrow) {
      return ![
        resolveRouteUrl({ name: RouteName.AccountSubscribe }),
        resolveRouteUrl({ name: RouteName.AccountSetting }),
        resolveRouteUrl({ name: RouteName.AccountPassword }),
        resolveRouteUrl({ name: RouteName.AccountNotification }),
      ].includes(pathnameWithoutLang)
    }
    return true
  }, [isNarrow, pathnameWithoutLang, resolveRouteUrl])

  /**
   * 是否顯示內容
   * Mobile 和 Tablet 在 /account 時不顯示內容
   */
  const withContent = useMemo(() => {
    if (isNarrow) {
      return (
        pathnameWithoutLang !== resolveRouteUrl({ name: RouteName.Account })
      )
    }
    return true
  }, [isNarrow, pathnameWithoutLang, resolveRouteUrl])

  /**
   * 背景顏色
   */
  const backgroundColor = useMemo(() => {
    if (
      isNarrow &&
      pathnameWithoutLang === resolveRouteUrl({ name: RouteName.Account })
    )
      return '#F3F3F3'
    if (isNarrow) return '#E0E0E0'
    return '#C0C5C8'
  }, [isNarrow, pathnameWithoutLang, resolveRouteUrl])

  return {
    withSidebar,
    withContent,
    backgroundColor,
    pathnameWithoutLang,
    isNarrow,
  }
}
