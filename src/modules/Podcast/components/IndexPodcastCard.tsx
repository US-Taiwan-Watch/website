import clsx from 'clsx'
import Podcast, {
  PodcastSourceType,
  PodcastType,
} from '@/modules/Podcast/classes/Podcast'
import { Box, Grid2 as Grid, Stack } from '@mui/material'
import type React from 'react'
import { memo } from 'react'
import { styled } from '@/common/lib/mui/theme'
import IndexEpisodeCard from '@/modules/Podcast/components/IndexEpisodeCard'
import Image from 'next/image'
import PodcastSourceIcon from '@/modules/Podcast/components/PodcastSourceIcon'
import Link from 'next/link'
import UIconButton from '@/common/components/atoms/UIconButton'
import UButton from '@/common/components/atoms/UButton'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import UHeightLimitedText from '@/common/components/atoms/UHeightLimitedText'

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

const StyledTitle = styled(UHeightLimitedText)(() => ({
  fontWeight: 700,
}))

const StyledDescription = styled(UHeightLimitedText)(() => ({
  fontWeight: 500,
}))

const StyledPodcastSourceIconButton = styled(UIconButton)(({ theme }) => ({
  backgroundColor: theme.color.common.black,
  color: theme.color.common.white,
  borderRadius: '10px',
  padding: '5px',
}))

interface IndexPodcastCardProps {
  className?: string
  podcast: Podcast
}

const IndexPodcastCard = memo(function IndexPodcastCard({
  className,
  podcast,
}: IndexPodcastCardProps) {
  return (
    <StyledIndexPodcastCardBox
      className={clsx(className, podcast.type)}
      padding={2}
    >
      <Grid container spacing={4}>
        <Grid size={7} rowSpacing={0}>
          <Stack
            height="100%"
            direction="column"
            spacing={2}
            justifyContent="space-between"
          >
            {podcast.bannerImg && (
              <StyledBanner
                src={podcast.bannerImg}
                alt={podcast.title || ''}
                width={600}
                height={200}
              />
            )}
            <StyledTitle variant="h4" fontWeight={700} maxLine={2}>
              {podcast.title}
            </StyledTitle>
            <StyledDescription variant="body2" maxLine={4}>
              {podcast.description}
            </StyledDescription>
            <Stack direction="row" spacing={2}>
              {podcast.sources?.map((source, index) => (
                <Link key={index} href={source.url}>
                  <StyledPodcastSourceIconButton
                    variant="contained"
                    color="black"
                    size="medium"
                  >
                    <PodcastSourceIcon sourceType={source.type} />
                  </StyledPodcastSourceIconButton>
                </Link>
              ))}
            </Stack>
            <UButton
              variant="contained"
              color="info"
              rounded
              size="medium"
              endIcon={<ArrowForwardIcon />}
              sx={{ width: 'max-content' }}
            >
              More Episode
            </UButton>
          </Stack>
        </Grid>
        <Grid size={5}>
          <Stack direction="column" spacing={2}>
            {podcast.episodeIdx?.map(
              (episodeId, index) =>
                podcast.podcastId && (
                  <IndexEpisodeCard
                    key={index}
                    podcastId={podcast.podcastId}
                    episodeId={episodeId}
                  />
                )
            )}
          </Stack>
        </Grid>
      </Grid>
    </StyledIndexPodcastCardBox>
  )
})

export default IndexPodcastCard

const withMockPodcast = function (podcastType: PodcastType) {
  const podcast = new Podcast({
    id: '123',
    type: podcastType,
    bannerImg: '/assets/podcast1.png',
    title: 'USTW - 觀測站底加辣',
    description:
      '《觀測站底加辣》迎來第三季，每週為您帶來台美關係最新動態與深入分析，並邀請來賓如前參謀總長李喜明、美國聖湯瑪斯大學葉耀元教授等。感謝您的支持，節目超過150集，下載量突破200萬，聽眾遍全球。與我們一起用耳朵追時事，解析台美中地緣政治。主持群：李可心、陳方隅、Jerry、Ledo、Ting。',
    sources: [
      {
        type: PodcastSourceType.APPLE,
        url: 'https://via.placeholder.com/150',
      },
      {
        type: PodcastSourceType.GOOGLE,
        url: 'https://via.placeholder.com/150',
      },
      {
        type: PodcastSourceType.SPOTIFY,
        url: 'https://via.placeholder.com/150',
      },
    ],
    podcastId: '6cdfccc6-7c47-4c35-8352-7f634b1b6f71',
    episodeIdx: [
      'ee208548-5c37-4b0d-91ba-7306d2572518',
      'ee208548-5c37-4b0d-91ba-7306d2572518',
      'ee208548-5c37-4b0d-91ba-7306d2572518',
    ],
  })

  return function withMockPodcast(
    props: Omit<IndexPodcastCardProps, 'podcast'>
  ) {
    return <IndexPodcastCard {...props} podcast={podcast} />
  }
}

export const WatchHerePodcastCard = withMockPodcast(PodcastType.WATCH_HERE)
export const WatchInfoPodcastCard = withMockPodcast(PodcastType.WATCH_INFO)
export const WatchBookClubPodcastCard = withMockPodcast(
  PodcastType.WATCH_BOOK_CLUB
)
