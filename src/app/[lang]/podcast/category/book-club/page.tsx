import { config } from '@/config'
import { getEpisodes } from '@/modules/Podcast/api/soundon'
import { BookClubEpisodeList } from '@/modules/Podcast/components/EpisodeList'
import { BookClubPodcastCard } from '@/modules/Podcast/components/PodcastCard'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import getURouterServer from '@/common/lib/router/getURouterServer'
import { generateCommonMetadata } from '@/common/utils/metadata'
import { RouteName } from '@/common/lib/router/routes'
import { Language } from '@/common/lib/i18n/types'

type BookClubPodcastPageProps = {
  params: {
    lang: Language
  }
}

export const generateMetadata = async ({
  params,
}: BookClubPodcastPageProps): Promise<Metadata> => {
  const { resolveRouteUrl } = getURouterServer()
  return generateCommonMetadata({
    lang: params.lang,
    pathname: resolveRouteUrl({ name: RouteName.PodcastBookClub }),
    namespace: 'seo_podcast_book_club',
  })
}

export default async function BookClubPodcastPage() {
  const podcastId = config.SOUNDON_PODCAST_ID
  if (!podcastId) {
    notFound()
  }
  const episodes = await getEpisodes({ podcastId })

  return (
    <>
      <BookClubPodcastCard />
      <BookClubEpisodeList episodes={episodes} />
    </>
  )
}
