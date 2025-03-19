'use client'

import clsx from 'clsx'
import Podcast, { PodcastType } from '@/modules/Podcast/classes/Podcast'
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
import { Episode } from '@/modules/Podcast/classes/Episode'
import usePodcastStore from '@/modules/Podcast/store/usePodcastStore'
import { useResponsive } from '@/common/lib/responsive/ResponsiveProvider'

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
              {Podcast.sources.map((source, index) => (
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
            <UButtonWithSelectable
              variant="contained"
              color="info"
              rounded
              size="medium"
              endIcon={<ArrowForwardIcon />}
              sx={{ width: 'max-content' }}
            >
              More Episode
            </UButtonWithSelectable>
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
  const podcast = useMemo<Podcast>(
    () =>
      new Podcast({
        type: PodcastType.WATCH_HERE,
        bannerImg: '/assets/podcast/podcast_banner_WATCH_HERE.png',
        title: 'USTW - 觀測站底加辣',
        description:
          '《觀測站底加辣》從2020年四月上線以來，已經邁入第三季，且目前連續進行超過160集，全年無休為大家深入分析台美關係最新動態。我們的聽眾遍布全球，下載量突破200萬，歡迎大家一起和我們用耳朵追時事，解析台美中地緣政治。另外我們也不定時加入「觀測站予你知」，訪談各界重量級來賓，為大家增加重要的新知、認識新出版的好書，以及開拓更廣的視野。主持群：李可心、陳方隅、Ledo、Jerry、Ting、Cathy。',
      }),
    []
  )
  const episodes = usePodcastStore.use.episodes()
  return (
    <IndexPodcastCard
      podcast={podcast}
      episodes={Podcast.filterEpisodes(podcast, episodes, 'CREATED_AT_DESC', 3)}
    />
  )
}
export const WatchInfoPodcastCard = () => {
  const podcast = useMemo<Podcast>(
    () =>
      new Podcast({
        type: PodcastType.WATCH_INFO,
        bannerImg: '/assets/podcast/podcast_banner_WATCH_INFO.png',
        title: 'USTW - 觀測站予你知',
        description:
          '《觀測站予你知》是本站《觀測站底加辣》podcast的子品牌，旨在提供各種重要的資訊，包括新書出版、好書推薦、作者或學者或政治工作者的訪談，我們把所有關於美中台關係當中的重要議題都放在這個予你知的節目專題當中，設定20分鐘的時間跟您聊聊重要的資訊，增廣見聞。其實一開始設定是要聊「輕鬆」一點的生活話題，但我們很顯然都是一群（太過）認真嚴肅的人，然後工作又太忙了些，所以，這個系列大家就佛系收聽囉！',
      }),
    []
  )
  const episodes = usePodcastStore.use.episodes()
  return (
    <IndexPodcastCard
      podcast={podcast}
      episodes={Podcast.filterEpisodes(podcast, episodes, 'CREATED_AT_DESC', 3)}
    />
  )
}
export const WatchBookClubPodcastCard = () => {
  const podcast = useMemo<Podcast>(
    () =>
      new Podcast({
        type: PodcastType.WATCH_BOOK_CLUB,
        bannerImg: '/assets/podcast/podcast_banner_WATCH_BOOK_CLUB.png',
        title: 'USTW - 觀測站讀書會',
        description:
          '《觀測站讀書會》是本站《觀測站底加辣》podcast的子品牌，有別於每週的時事更新，以橫切面方式關注美中台議題，《觀測站讀書會》則是希望透過一本書，以縱面聚焦的方式專注討論特定議題，並邀請作者或學者或政治工作者等專業來賓共同討論選書。每集讀書會約20至30分鐘，除了有簡單的選書導讀，還會透過精彩的分析與提問增添討論豐富度，不管有沒有讀過選書，都歡迎收聽！',
      }),
    []
  )
  const episodes = usePodcastStore.use.episodes()
  return (
    <IndexPodcastCard
      podcast={podcast}
      episodes={Podcast.filterEpisodes(podcast, episodes, 'CREATED_AT_DESC', 3)}
    />
  )
}
