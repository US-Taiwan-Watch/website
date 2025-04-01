import useSocialLinks from '@/common/hooks/useSocialLinks'
import useTranslationClient from '@/common/lib/i18n/hooks/useTranslationClient'
import { ROUTES } from '@/routes'
import { useMemo } from 'react'

export type SubLinkItem =
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
  const { t } = useTranslationClient('footer')
  const { socialLinkItems } = useSocialLinks()

  // TODO: 這邊的資料都連到內部頁面
  const subLinkItems: Array<SubLinkItem> = useMemo(
    () => [
      {
        type: 'title',
        title: t('navItem.ustw.title', { ns: 'footer' }),
        subLinks: [
          {
            type: 'subLink',
            title: t('navItem.ustw.mission.title', { ns: 'footer' }),
            url: '#our-mission',
          },
          {
            type: 'subLink',
            title: t('navItem.ustw.footprints.title', { ns: 'footer' }),
            url: '#our-footprints',
          },
          {
            type: 'subLink',
            title: t('navItem.ustw.member.title', { ns: 'footer' }),
            url: '#our-member',
          },
          {
            type: 'subLink',
            title: t('navItem.ustw.newsroom.title', { ns: 'footer' }),
            url: '#our-newsroom',
          },
          {
            type: 'subLink',
            title: t('navItem.ustw.data.title', { ns: 'footer' }),
            url: '#our-data',
          },
          {
            type: 'subLink',
            title: t('navItem.ustw.faq.title', { ns: 'footer' }),
            url: '#faq',
          },
          {
            type: 'subLink',
            title: t('navItem.ustw.articles.title', { ns: 'footer' }),
            url: ROUTES.ARTICLE,
          },
          {
            type: 'subLink',
            title: t('navItem.ustw.events.title', { ns: 'footer' }),
            url: '#events',
          },
        ],
      },
      {
        type: 'title',
        title: t('navItem.ketagalanMedia.title', { ns: 'footer' }),
        subLinks: [
          {
            type: 'subLink',
            title: t('navItem.ketagalanMedia.articles.title', { ns: 'footer' }),
            url: '#articles',
          },
          {
            type: 'subLink',
            title: t('navItem.ketagalanMedia.about.title', { ns: 'footer' }),
            url: '#about',
          },
        ],
      },
      {
        type: 'title',
        title: t('navItem.discover.title', { ns: 'footer' }),
        subLinks: [
          {
            type: 'subLink',
            title: t('navItem.discover.bills.title', { ns: 'footer' }),
            url: ROUTES.BILL,
          },
          {
            type: 'subLink',
            title: t('navItem.discover.people.title', { ns: 'footer' }),
            url: ROUTES.PEOPLE,
          },
        ],
      },
      {
        type: 'title',
        title: t('navItem.podcasts.title', { ns: 'footer' }),
        subLinks: [
          {
            type: 'subLink',
            title: t('navItem.podcasts.watchHere.title', { ns: 'footer' }),
            url: '#觀測站底加辣',
          },
          {
            type: 'subLink',
            title: t('navItem.podcasts.watchInfo.title', { ns: 'footer' }),
            url: '#觀測站予你知',
          },
          {
            type: 'subLink',
            title: t('navItem.podcasts.watchBookClub.title', { ns: 'footer' }),
            url: '#觀測站讀書會',
          },
        ],
      },
    ],
    [t]
  )

  return {
    socialLinkItems,
    subLinkItems,
  }
}
