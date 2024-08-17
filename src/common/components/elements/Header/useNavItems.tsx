import { useMemo } from 'react'

export type HeaderNavItem =
| {
    id: string;
    type: 'link';
    title: string;
    href: string;
  }
| {
    id: string;
    type: 'list';
    title: string;
    list: Array<HeaderNavItem>;
  };

export default function useNavItems () {
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
            href: '/#',
          },
          {
            id: 'discover-people',
            type: 'link',
            title: 'People',
            href: '/#',
          },
        ],
      },
      {
        id: 'articles',
        type: 'link',
        title: 'Articles',
        href: '/#',
      },
      {
        id: 'ketagalan-media',
        type: 'link',
        title: 'Ketagalan Media',
        href: '/#',
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
            href: '/#',
          },
          {
            id: 'podcasts-2',
            type: 'link',
            title: '觀測站予你知',
            href: '/#',
          },
          {
            id: 'podcasts-3',
            type: 'link',
            title: '觀測站讀書會 ',
            href: '/#',
          },
        ],
      },
      {
        id: 'events',
        type: 'link',
        title: 'Events',
        href: '/#',
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
            href: '/#',
          },
          {
            id: 'about-footprints',
            type: 'link',
            title: 'Footprints',
            href: '/#',
          },
          {
            id: 'about-data',
            type: 'link',
            title: 'Data',
            href: '/#',
          },
          {
            id: 'about-newsroom',
            type: 'link',
            title: 'Newsroom',
            href: '/#',
          },
        ],
      },
    ]
  }, [])

  return { navItems }
}
