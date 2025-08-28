import {
  BookmarkIcon,
  NotificationIcon,
  PasswordIcon,
  SettingIcon,
} from '@/common/styles/assets/Icons'
import { useMemo } from 'react'
import useTranslationClient from '@/common/lib/i18n/hooks/useTranslationClient'
import useAccountPathname from '@/modules/Account/hooks/useAccountPathname'
import useURouterClient from '@/common/lib/router/useURouterClient'
import { RouteName } from '@/common/lib/router/routes'
import useAccountStore from '@/modules/Account/hooks/useAccountStore'
import { Connection } from '@/modules/Account/business/Account'

export default function useAccountNavItems() {
  const account = useAccountStore.use.account()
  const { resolveRouteUrl } = useURouterClient()
  const { t } = useTranslationClient('account')
  const { pathnameWithoutLang } = useAccountPathname()

  const navItems = useMemo(
    () => [
      {
        label: t('navItem.subscribe', { ns: 'account' }),
        href: resolveRouteUrl({ name: RouteName.AccountSubscribe }),
        icon: <BookmarkIcon sx={{ width: 24, height: 24 }} />,
      },
      {
        label: t('navItem.setting', { ns: 'account' }),
        href: resolveRouteUrl({ name: RouteName.AccountSetting }),
        icon: <SettingIcon sx={{ width: 24, height: 24 }} />,
      },
      ...(account?.connection === Connection['User-Password']
        ? [
            {
              label: t('navItem.password', { ns: 'account' }),
              href: resolveRouteUrl({ name: RouteName.AccountPassword }),
              icon: <PasswordIcon sx={{ width: 24, height: 24 }} />,
            },
          ]
        : []),
      {
        label: t('navItem.notification', { ns: 'account' }),
        href: resolveRouteUrl({ name: RouteName.AccountNotification }),
        icon: <NotificationIcon sx={{ width: 24, height: 24 }} />,
      },
    ],
    [t, resolveRouteUrl, account?.connection]
  )

  const currentNavItem = useMemo(() => {
    return navItems.find((item) => item.href === pathnameWithoutLang)
  }, [navItems, pathnameWithoutLang])

  return { navItems, currentNavItem }
}
