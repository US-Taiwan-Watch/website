import { useResponsive } from '@/common/lib/responsive/ResponsiveProvider'
import { usePathname, useParams } from 'next/navigation'
import { useMemo } from 'react'
import { Language } from '@/common/lib/i18n/types'
import { ROUTES } from '@/routes'

/**
 * 是否顯示相關介面
 * @returns
 */
export default function useAccountLayout() {
  const { lang } = useParams<{ lang: Language }>()
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
        ROUTES.ACCOUNT_SUBSCRIBE,
        ROUTES.ACCOUNT_SETTING,
        ROUTES.ACCOUNT_PASSWORD,
        ROUTES.ACCOUNT_NOTIFICATION,
      ].includes(pathnameWithoutLang)
    }
    return true
  }, [isNarrow, pathnameWithoutLang])

  /**
   * 是否顯示內容
   * Mobile 和 Tablet 在 /account 時不顯示內容
   */
  const withContent = useMemo(() => {
    if (isNarrow) {
      return pathnameWithoutLang !== ROUTES.ACCOUNT
    }
    return true
  }, [isNarrow, pathnameWithoutLang])

  /**
   * 背景顏色
   */
  const backgroundColor = useMemo(() => {
    if (isNarrow && pathnameWithoutLang === ROUTES.ACCOUNT) return '#F3F3F3'
    if (isNarrow) return '#E0E0E0'
    return '#C0C5C8'
  }, [isNarrow, pathnameWithoutLang])

  return {
    withSidebar,
    withContent,
    backgroundColor,
    pathnameWithoutLang,
    isNarrow,
  }
}
