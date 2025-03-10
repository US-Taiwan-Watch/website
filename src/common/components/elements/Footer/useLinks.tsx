import useSocialLinks from '@/common/hooks/useSocialLinks'
import { ROUTES } from '@/routes'

type SubLinkItem =
  | {
      type: 'title'
      title: string
      subLinks: Array<SubLinkItem>
    }
  | {
      type: 'subLink'
      title: string
      url: string
    }

export default function useLinks() {
  const { socialLinkItems } = useSocialLinks()

  // TODO: 這邊的資料都連到內部頁面
  const subLinkItems: Array<SubLinkItem> = [
    {
      type: 'title',
      title: 'USTW',
      subLinks: [
        {
          type: 'subLink',
          title: 'Our Mission',
          url: '#our-mission',
        },
        {
          type: 'subLink',
          title: 'Our Footprints',
          url: '#our-footprints',
        },
        {
          type: 'subLink',
          title: 'Our Ｍember',
          url: '#our-member',
        },
        {
          type: 'subLink',
          title: 'Our Newsroom',
          url: '#our-newsroom',
        },
        {
          type: 'subLink',
          title: 'Our Data',
          url: '#our-data',
        },
        {
          type: 'subLink',
          title: 'FAQ',
          url: '#faq',
        },
        {
          type: 'subLink',
          title: 'Articles',
          url: ROUTES.ARTICLE,
        },
        {
          type: 'subLink',
          title: 'Events',
          url: '#events',
        },
      ],
    },
    {
      type: 'title',
      title: 'Ketagalan Media',
      subLinks: [
        {
          type: 'subLink',
          title: 'Articles',
          url: '#articles',
        },
        {
          type: 'subLink',
          title: 'About',
          url: '#about',
        },
      ],
    },
    {
      type: 'title',
      title: 'Discover',
      subLinks: [
        {
          type: 'subLink',
          title: 'Bills',
          url: ROUTES.BILL,
        },
        {
          type: 'subLink',
          title: 'People',
          url: ROUTES.PEOPLE,
        },
      ],
    },
    {
      type: 'title',
      title: 'Podcasts',
      subLinks: [
        {
          type: 'subLink',
          title: '觀測站底加辣',
          url: '#觀測站底加辣',
        },
        {
          type: 'subLink',
          title: '觀測站予你知',
          url: '#觀測站予你知',
        },
        {
          type: 'subLink',
          title: '觀測站讀書會',
          url: '#觀測站讀書會',
        },
      ],
    },
  ]

  return {
    socialLinkItems,
    subLinkItems,
  }
}
