import {
  BookmarkIcon,
  NotificationIcon,
  PasswordIcon,
  SettingIcon,
} from '@/common/styles/assets/Icons'
import { useMemo } from 'react'
import useTranslationClient from '@/common/lib/i18n/hooks/useTranslationClient'
import { ROUTES } from '@/routes'
import useAccountPathname from '@/modules/Account/hooks/useAccountPathname'

export default function useAccountNavItems() {
  const { t } = useTranslationClient('account')
  const { pathnameWithoutLang } = useAccountPathname()

  const navItems = useMemo(
    () => [
      {
        label: t('navItem.subscribe', { ns: 'account' }),
        href: ROUTES.ACCOUNT_SUBSCRIBE,
        icon: <BookmarkIcon sx={{ width: 24, height: 24 }} />,
      },
      {
        label: t('navItem.setting', { ns: 'account' }),
        href: ROUTES.ACCOUNT_SETTING,
        icon: <SettingIcon sx={{ width: 24, height: 24 }} />,
      },
      {
        label: t('navItem.password', { ns: 'account' }),
        href: ROUTES.ACCOUNT_PASSWORD,
        icon: <PasswordIcon sx={{ width: 24, height: 24 }} />,
      },
      {
        label: t('navItem.notification', { ns: 'account' }),
        href: ROUTES.ACCOUNT_NOTIFICATION,
        icon: <NotificationIcon sx={{ width: 24, height: 24 }} />,
      },
    ],
    [t]
  )

  const currentNavItem = useMemo(() => {
    return navItems.find((item) => item.href === pathnameWithoutLang)
  }, [navItems, pathnameWithoutLang])

  return { navItems, currentNavItem }
}
