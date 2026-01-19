import useSocialLinks from '@/common/hooks/useSocialLinks'
import useTranslationClient from '@/common/lib/i18n/hooks/useTranslationClient'
import { RouteName } from '@/common/lib/router/routes'
import useURouterClient from '@/common/lib/router/useURouterClient'
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
  const { resolveRouteUrl } = useURouterClient()
  const { t } = useTranslationClient('footer')
  const { socialLinkItems } = useSocialLinks()

  const subLinkItems: Array<SubLinkItem> = useMemo(
    () => [
      {
        type: 'title',
        title: t('navItem.ustw.title', { ns: 'footer' }),
        subLinks: [
          {
            type: 'subLink',
            title: t('navItem.ustw.mission.title', { ns: 'footer' }),
            url: resolveRouteUrl({ name: RouteName.AboutMission }),
          },
          {
            type: 'subLink',
            title: t('navItem.ustw.footprints.title', { ns: 'footer' }),
            url: resolveRouteUrl({ name: RouteName.AboutFootprints }),
          },
          {
            type: 'subLink',
            title: t('navItem.ustw.member.title', { ns: 'footer' }),
            url: resolveRouteUrl({ name: RouteName.AboutMembers }),
          },
          {
            type: 'subLink',
            title: t('navItem.ustw.newsroom.title', { ns: 'footer' }),
            url: resolveRouteUrl({ name: RouteName.AboutNewsroom }),
          },
          {
            type: 'subLink',
            title: t('navItem.ustw.data.title', { ns: 'footer' }),
            url: resolveRouteUrl({ name: RouteName.AboutData }),
          },
          // TODO: 目前先隱藏 `FAQ`
          // {
          //   type: 'subLink',
          //   title: t('navItem.ustw.faq.title', { ns: 'footer' }),
          //   url: '#faq',
          // },
          {
            type: 'subLink',
            title: t('navItem.ustw.articles.title', { ns: 'footer' }),
            url: resolveRouteUrl({ name: RouteName.Article }),
          },
          // TODO: 目前先隱藏 `Events`
          // {
          //   type: 'subLink',
          //   title: t('navItem.ustw.events.title', { ns: 'footer' }),
          //   url: '#events',
          // },
        ],
      },
      {
        type: 'title',
        title: t('navItem.ketagalanMedia.title', { ns: 'footer' }),
        subLinks: [
          {
            type: 'subLink',
            title: t('navItem.ketagalanMedia.articles.title', { ns: 'footer' }),
            url: resolveRouteUrl({ name: RouteName.KetagalanMedia }),
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
            url: resolveRouteUrl({ name: RouteName.Bill }),
          },
          {
            type: 'subLink',
            title: t('navItem.discover.people.title', { ns: 'footer' }),
            url: resolveRouteUrl({ name: RouteName.People }),
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
            url: resolveRouteUrl({ name: RouteName.PodcastWatchHere }),
          },
          {
            type: 'subLink',
            title: t('navItem.podcasts.watchInfo.title', { ns: 'footer' }),
            url: resolveRouteUrl({ name: RouteName.PodcastWatchInfo }),
          },
          {
            type: 'subLink',
            title: t('navItem.podcasts.watchBookClub.title', { ns: 'footer' }),
            url: resolveRouteUrl({ name: RouteName.PodcastWatchBookClub }),
          },
        ],
      },
    ],
    [t, resolveRouteUrl]
  )

  return {
    socialLinkItems,
    subLinkItems,
  }
}
