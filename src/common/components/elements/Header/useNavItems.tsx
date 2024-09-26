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
  // TODO: Change title depending on language
  const navItems = useMemo<Array<HeaderNavItem>>(() => {
    return [
      {
        id: 'discover',
        type: 'list',
        title: 'Discover',
        list: [
          {
            id: 'discover-bill',
            type: 'link',
            title: 'Bill',
            href: ROUTES.BILL,
          },
          {
            id: 'discover-people',
            type: 'link',
            title: 'People',
            href: ROUTES.PEOPLE,
          },
        ],
      },
      {
        id: 'articles',
        type: 'link',
        title: 'Articles',
        // FIXME: 暫時隱藏 opinion 的連結
        // href: ROUTES.OPINION,
        href: ROUTES.HOME,
      },
      {
        id: 'ketagalan-media',
        type: 'link',
        title: 'Ketagalan Media',
        href: ROUTES.HOME,
      },
      {
        id: 'podcasts',
        type: 'list',
        title: 'Podcasts',
        list: [
          {
            id: 'podcasts-1',
            type: 'link',
            title: '觀測站底加辣',
            href: ROUTES.HOME,
          },
          {
            id: 'podcasts-2',
            type: 'link',
            title: '觀測站予你知',
            href: ROUTES.HOME,
          },
          {
            id: 'podcasts-3',
            type: 'link',
            title: '觀測站讀書會',
            href: ROUTES.HOME,
          },
        ],
      },
      {
        id: 'events',
        type: 'link',
        title: 'Events',
        href: ROUTES.HOME,
      },
      {
        id: 'about',
        type: 'list',
        title: 'About',
        list: [
          {
            id: 'about-mission',
            type: 'link',
            title: 'Mission',
            href: ROUTES.HOME,
          },
          {
            id: 'about-footprints',
            type: 'link',
            title: 'Footprints',
            href: ROUTES.HOME,
          },
          {
            id: 'about-data',
            type: 'link',
            title: 'Data',
            href: ROUTES.HOME,
          },
          {
            id: 'about-newsroom',
            type: 'link',
            title: 'Newsroom',
            href: ROUTES.HOME,
          },
        ],
      },
    ]
  }, [])

  return { navItems }
}
