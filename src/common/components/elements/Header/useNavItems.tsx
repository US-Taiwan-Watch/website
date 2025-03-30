import useTranslationClient from '@/common/lib/i18n/hooks/useTranslationClient'
import { ROUTES } from '@/routes'
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
            href: ROUTES.BILL,
          },
          {
            id: 'discover-people',
            type: 'link',
            title: t('navItem.discover.people.title', { ns: 'header' }),
            href: ROUTES.PEOPLE,
          },
        ],
      },
      {
        id: 'articles',
        type: 'link',
        title: t('navItem.articles.title', { ns: 'header' }),
        href: ROUTES.ARTICLE,
      },
      {
        id: 'ketagalan-media',
        type: 'link',
        title: t('navItem.ketagalanMedia.title', { ns: 'header' }),
        href: ROUTES.HOME,
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
            href: ROUTES.HOME,
          },
          {
            id: 'podcasts-2',
            type: 'link',
            title: t('navItem.podcasts.watchInfo.title', { ns: 'header' }),
            href: ROUTES.HOME,
          },
          {
            id: 'podcasts-3',
            type: 'link',
            title: t('navItem.podcasts.watchBookClub.title', { ns: 'header' }),
            href: ROUTES.HOME,
          },
        ],
      },
      {
        id: 'events',
        type: 'link',
        title: t('navItem.events.title', { ns: 'header' }),
        href: ROUTES.HOME,
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
            href: ROUTES.HOME,
          },
          {
            id: 'about-footprints',
            type: 'link',
            title: t('navItem.about.footprints.title', { ns: 'header' }),
            href: ROUTES.HOME,
          },
          {
            id: 'about-data',
            type: 'link',
            title: t('navItem.about.data.title', { ns: 'header' }),
            href: ROUTES.HOME,
          },
          {
            id: 'about-newsroom',
            type: 'link',
            title: t('navItem.about.newsroom.title', { ns: 'header' }),
            href: ROUTES.HOME,
          },
        ],
      },
    ]
  }, [t])

  return { navItems }
}
