'use client'

import clsx from 'clsx'
import PodcastUtils, {
  Podcast,
  PodcastType,
} from '@/modules/Podcast/business/Podcast'
import { Box, Grid2 as Grid, Stack } from '@mui/material'
import type React from 'react'
import { memo, useMemo } from 'react'
import { styled } from '@/common/lib/mui/theme'
import IndexEpisodeCard from '@/modules/Podcast/components/IndexEpisodeCard'
import Image from 'next/image'
import PodcastSourceIcon from '@/modules/Podcast/components/PodcastSourceIcon'
import Link from 'next/link'
import UIconButton from '@/common/components/atoms/UIconButton'
import UButton from '@/common/components/atoms/UButton'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import UHeightLimitedText from '@/common/components/atoms/UHeightLimitedText'
import withSelectable from '@/common/hooks/withSelectable'
import { type ComponentProps } from 'react'
import { Episode } from '@/modules/Podcast/business/Episode'
import usePodcastStore from '@/modules/Podcast/store/usePodcastStore'
import { useResponsive } from '@/common/lib/responsive/ResponsiveProvider'
import useTranslationClient from '@/common/lib/i18n/hooks/useTranslationClient'

const StyledIndexPodcastCardBox = styled(Box)(({ theme }) => ({
  '&.WATCH_HERE': {
    backgroundColor: theme.color.orange[900],
  },
  '&.WATCH_INFO': {
    backgroundColor: theme.color.indigo[700],
  },
  '&.WATCH_BOOK_CLUB': {
    backgroundColor: theme.color.orange[900],
  },
  color: theme.color.common.white,
  borderRadius: '30px',
  // margin: `0 ${theme.spacing(2)}`,
}))

const StyledBanner = styled(Image)(() => ({
  borderRadius: '30px',
  width: '100%',
  objectFit: 'cover',
}))
const StyledBannerWithSelectable =
  withSelectable<ComponentProps<typeof StyledBanner>>(StyledBanner)

const StyledTitle = styled(UHeightLimitedText)(() => ({
  fontWeight: 700,
}))
const StyledTitleWithSelectable =
  withSelectable<ComponentProps<typeof StyledTitle>>(StyledTitle)

const StyledDescription = styled(UHeightLimitedText)(() => ({
  fontWeight: 500,
}))
const StyledDescriptionWithSelectable =
  withSelectable<ComponentProps<typeof StyledDescription>>(StyledDescription)

const StyledPodcastSourceIconButton = styled(UIconButton)(({ theme }) => ({
  backgroundColor: theme.color.common.black,
  color: theme.color.common.white,
  borderRadius: '10px',
  padding: '5px',
}))
const StyledPodcastSourceIconButtonWithSelectable = withSelectable<
  ComponentProps<typeof StyledPodcastSourceIconButton>
>(StyledPodcastSourceIconButton)

const UButtonWithSelectable =
  withSelectable<ComponentProps<typeof UButton>>(UButton)

const IndexEpisodeCardWithSelectable = withSelectable<
  ComponentProps<typeof IndexEpisodeCard>
>(IndexEpisodeCard, 'containerProps.onMouseDown')

interface IndexPodcastCardProps {
  className?: string
  podcast: Podcast
  episodes: Array<Episode>
}

const IndexPodcastCard = memo(function IndexPodcastCard({
  className,
  podcast,
  episodes,
}: IndexPodcastCardProps) {
  const { isMobile } = useResponsive()
  const { t } = useTranslationClient('podcast')

  return (
    <StyledIndexPodcastCardBox
      className={clsx(className, podcast.type)}
      padding={2}
      width={{
        xs: '80dvw',
        sm: 'auto',
      }}
    >
      <Grid container spacing={4}>
        <Grid
          size={{
            xs: 12,
            sm: 7,
          }}
          rowSpacing={0}
        >
          <Stack
            height="100%"
            direction="column"
            spacing={2}
            justifyContent="space-between"
          >
            {podcast.bannerImg && (
              <StyledBannerWithSelectable
                src={podcast.bannerImg}
                alt={podcast.title || ''}
                width={600}
                height={200}
              />
            )}
            <StyledTitleWithSelectable
              variant="h4"
              fontWeight={700}
              maxLine={2}
            >
              {podcast.title}
            </StyledTitleWithSelectable>
            <StyledDescriptionWithSelectable variant="body2" maxLine={4}>
              {podcast.description}
            </StyledDescriptionWithSelectable>
            <Stack direction="row" spacing={2}>
              {PodcastUtils.sources.map((source, index) => (
                <Link
                  key={index}
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <StyledPodcastSourceIconButtonWithSelectable
                    variant="contained"
                    color="black"
                    size="medium"
                  >
                    <PodcastSourceIcon sourceType={source.type} />
                  </StyledPodcastSourceIconButtonWithSelectable>
                </Link>
              ))}
            </Stack>
            <Link href={PodcastUtils.getPodcastPageLink(podcast.type)}>
              <UButtonWithSelectable
                variant="contained"
                color="info"
                rounded
                size="medium"
                endIcon={
                  <ArrowForwardIcon
                    sx={{
                      width: { xs: 16, sm: 24 },
                      height: { xs: 16, sm: 24 },
                    }}
                  />
                }
                sx={{ width: 'max-content' }}
              >
                {t('card.cta.more', { ns: 'podcast' })}
              </UButtonWithSelectable>
            </Link>
          </Stack>
        </Grid>
        {!isMobile && (
          <Grid size={5}>
            <Stack direction="column" spacing={2}>
              {episodes.map((episode, index) => (
                <IndexEpisodeCardWithSelectable key={index} episode={episode} />
              ))}
            </Stack>
          </Grid>
        )}
      </Grid>
    </StyledIndexPodcastCardBox>
  )
})

export default IndexPodcastCard

export const WatchHerePodcastCard = () => {
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
  const episodes = usePodcastStore.use.episodes()
  return (
    <IndexPodcastCard
      podcast={podcast}
      episodes={PodcastUtils.filterEpisodes(
        podcast,
        episodes,
        'CREATED_AT_DESC',
        3
      )}
    />
  )
}
export const WatchInfoPodcastCard = () => {
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
  const episodes = usePodcastStore.use.episodes()
  return (
    <IndexPodcastCard
      podcast={podcast}
      episodes={PodcastUtils.filterEpisodes(
        podcast,
        episodes,
        'CREATED_AT_DESC',
        3
      )}
    />
  )
}
export const WatchBookClubPodcastCard = () => {
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
  const episodes = usePodcastStore.use.episodes()
  return (
    <IndexPodcastCard
      podcast={podcast}
      episodes={PodcastUtils.filterEpisodes(
        podcast,
        episodes,
        'CREATED_AT_DESC',
        3
      )}
    />
  )
}
