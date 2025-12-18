'use client'

import UPagination, {
  usePagination,
} from '@/common/components/atoms/UPagination'
import ULoadMoreButton from '@/common/components/atoms/ULoadMoreButton'
import { useResponsive } from '@/common/lib/responsive/ResponsiveProvider'
import PodcastUtils, {
  Podcast,
  PodcastType,
} from '@/modules/Podcast/business/Podcast'
import EpisodeCard from '@/modules/Podcast/components/EpisodeCard'
import { Box, Stack } from '@mui/material'
import { useMemo } from 'react'
import useTranslationClient from '@/common/lib/i18n/hooks/useTranslationClient'
import { Episode } from '@/modules/Podcast/business/Episode'

const EPISODE_COUNT_PER_PAGE = 5

type EpisodeListProps = {
  podcast: Podcast
  episodes: Array<Episode>
}

export default function EpisodeList({
  podcast,
  episodes: allEpisodes,
}: EpisodeListProps) {
  const { isMobile, isTablet } = useResponsive()
  const podcastEpisodes = useMemo(() => {
    return PodcastUtils.filterEpisodes(podcast, allEpisodes, 'CREATED_AT_DESC')
  }, [podcast, allEpisodes])
  const totalPages = useMemo(
    () => Math.ceil(podcastEpisodes.length / EPISODE_COUNT_PER_PAGE),
    [podcastEpisodes]
  )
  const { page, handlePageChange } = usePagination({
    totalPages,
  })

  // 處理資料
  const shouldAppendData = useMemo(
    () => isMobile || isTablet,
    [isMobile, isTablet]
  )

  const episodes = useMemo(() => {
    if (shouldAppendData) {
      return podcastEpisodes.slice(0, page * EPISODE_COUNT_PER_PAGE)
    }
    return podcastEpisodes.slice(
      Math.max(0, page - 1) * EPISODE_COUNT_PER_PAGE,
      page * EPISODE_COUNT_PER_PAGE
    )
  }, [podcastEpisodes, page, shouldAppendData])

  return (
    <Stack
      gap={{
        xs: 1,
        md: 2,
      }}
      alignItems="center"
      justifyContent="center"
    >
      {episodes.map((episode) => (
        <Box key={episode.id} width="100%">
          <EpisodeCard episode={episode} />
        </Box>
      ))}

      {/** Infinite Scroll (Mobile) */}
      {shouldAppendData && (
        <Box width="100%" px={1} mt={2}>
          <ULoadMoreButton
            onLoadMore={() => handlePageChange(page + 1)}
            hasMore={page < totalPages}
          />
        </Box>
      )}

      {/** Pagination (Desktop) */}
      {!shouldAppendData && totalPages > 1 && (
        <UPagination
          count={totalPages}
          page={page}
          onChange={(_, page) => {
            handlePageChange(page)
          }}
        />
      )}
    </Stack>
  )
}

export const WatchHereEpisodeList = ({
  episodes,
}: {
  episodes: Array<Episode>
}) => {
  const { t } = useTranslationClient('podcast')
  const podcast = useMemo<Podcast>(
    () =>
      PodcastUtils.parse({
        type: PodcastType.WATCH_HERE,
        bannerImg: '/assets/podcast/podcast_banner_WATCH_HERE.png',
        title: t('asset.watchHere.title', { ns: 'podcast' }),
        description: t('asset.watchHere.description', { ns: 'podcast' }),
      }),
    [t]
  )
  return <EpisodeList podcast={podcast} episodes={episodes} />
}

export const WatchInfoEpisodeList = ({
  episodes,
}: {
  episodes: Array<Episode>
}) => {
  const { t } = useTranslationClient('podcast')
  const podcast = useMemo<Podcast>(
    () =>
      PodcastUtils.parse({
        type: PodcastType.WATCH_INFO,
        bannerImg: '/assets/podcast/podcast_banner_WATCH_INFO.png',
        title: t('asset.watchInfo.title', { ns: 'podcast' }),
        description: t('asset.watchInfo.description', { ns: 'podcast' }),
      }),
    [t]
  )
  return <EpisodeList podcast={podcast} episodes={episodes} />
}

export const WatchBookClubEpisodeList = ({
  episodes,
}: {
  episodes: Array<Episode>
}) => {
  const { t } = useTranslationClient('podcast')
  const podcast = useMemo<Podcast>(
    () =>
      PodcastUtils.parse({
        type: PodcastType.WATCH_BOOK_CLUB,
        bannerImg: '/assets/podcast/podcast_banner_WATCH_BOOK_CLUB.png',
        title: t('asset.watchBookClub.title', { ns: 'podcast' }),
        description: t('asset.watchBookClub.description', { ns: 'podcast' }),
      }),
    [t]
  )
  return <EpisodeList podcast={podcast} episodes={episodes} />
}
