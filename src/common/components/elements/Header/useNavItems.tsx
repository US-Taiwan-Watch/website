import useTranslationClient from '@/common/lib/i18n/hooks/useTranslationClient'
import useURouterClient from '@/common/lib/router/useURouterClient'
import { RouteName } from '@/common/lib/router/routes'
import { useMemo } from 'react'

export type HeaderNavItem =
  | {
      id: string
      type: 'link'
      title: string
      href: string
    }
  | {
      id: string
      type: 'list'
      title: string
      list: Array<HeaderNavItem>
    }

export default function useNavItems() {
  const { resolveRouteUrl } = useURouterClient()
  const { t } = useTranslationClient('header')

  const navItems = useMemo<Array<HeaderNavItem>>(() => {
    return [
      {
        id: 'discover',
        type: 'list',
        title: t('navItem.discover.title', { ns: 'header' }),
        list: [
          {
            id: 'discover-bill',
            type: 'link',
            title: t('navItem.discover.bills.title', { ns: 'header' }),
            href: resolveRouteUrl({ name: RouteName.Bill }),
          },
          {
            id: 'discover-people',
            type: 'link',
            title: t('navItem.discover.people.title', { ns: 'header' }),
            href: resolveRouteUrl({ name: RouteName.People }),
          },
        ],
      },
      {
        id: 'articles',
        type: 'link',
        title: t('navItem.articles.title', { ns: 'header' }),
        href: resolveRouteUrl({ name: RouteName.Article }),
      },
      {
        id: 'ketagalan-media',
        type: 'link',
        title: t('navItem.ketagalanMedia.title', { ns: 'header' }),
        href: resolveRouteUrl({ name: RouteName.KetagalanMedia }),
      },
      {
        id: 'podcasts',
        type: 'list',
        title: t('navItem.podcasts.title', { ns: 'header' }),
        list: [
          {
            id: 'podcasts-1',
            type: 'link',
            title: t('navItem.podcasts.watchHere.title', { ns: 'header' }),
            href: resolveRouteUrl({ name: RouteName.PodcastWatchHere }),
          },
          {
            id: 'podcasts-2',
            type: 'link',
            title: t('navItem.podcasts.watchInfo.title', { ns: 'header' }),
            href: resolveRouteUrl({ name: RouteName.PodcastWatchInfo }),
          },
          {
            id: 'podcasts-3',
            type: 'link',
            title: t('navItem.podcasts.watchBookClub.title', { ns: 'header' }),
            href: resolveRouteUrl({ name: RouteName.PodcastWatchBookClub }),
          },
        ],
      },
      {
        id: 'events',
        type: 'link',
        title: t('navItem.events.title', { ns: 'header' }),
        href: resolveRouteUrl({ name: RouteName.Home }),
      },
      {
        id: 'about',
        type: 'list',
        title: t('navItem.about.title', { ns: 'header' }),
        list: [
          {
            id: 'about-mission',
            type: 'link',
            title: t('navItem.about.mission.title', { ns: 'header' }),
            href: resolveRouteUrl({ name: RouteName.AboutMission }),
          },
          {
            id: 'about-footprints',
            type: 'link',
            title: t('navItem.about.footprints.title', { ns: 'header' }),
            href: resolveRouteUrl({ name: RouteName.AboutFootprints }),
          },
          {
            id: 'about-data',
            type: 'link',
            title: t('navItem.about.data.title', { ns: 'header' }),
            href: resolveRouteUrl({ name: RouteName.AboutData }),
          },
          {
            id: 'about-newsroom',
            type: 'link',
            title: t('navItem.about.newsroom.title', { ns: 'header' }),
            href: resolveRouteUrl({ name: RouteName.AboutNewsroom }),
          },
        ],
      },
    ]
  }, [t, resolveRouteUrl])

  return { navItems }
}
