'use client'

import clsx from 'clsx'
import PodcastUtils, {
  Podcast,
  PodcastType,
} from '@/modules/Podcast/business/Podcast'
import { Box, Divider, Stack, Typography, useTheme } from '@mui/material'
import type React from 'react'
import { memo, useMemo } from 'react'
import PodcastSourceIcon from '@/modules/Podcast/components/PodcastSourceIcon'
import Link from 'next/link'
import UIconButton from '@/common/components/atoms/UIconButton'
import { useResponsive } from '@/common/lib/responsive/ResponsiveProvider'
import useTranslationClient from '@/common/lib/i18n/hooks/useTranslationClient'
import Image from 'next/image'
import { USTWTheme } from '@/common/lib/mui/theme'

interface PodcastCardProps {
  className?: string
  podcast: Podcast
}

const PodcastCard = memo(function PodcastCard({
  className,
  podcast,
}: PodcastCardProps) {
  const theme = useTheme<USTWTheme>()
  const { isMobile, isTablet } = useResponsive()

  return (
    <Box
      className={clsx(className, podcast.type)}
      padding={2}
      width="100%"
      borderRadius="30px"
      sx={{
        '&.WATCH_HERE': {
          backgroundColor: theme.color.orange[900],
        },
        '&.WATCH_INFO': {
          backgroundColor: theme.color.indigo[700],
        },
        '&.WATCH_BOOK_CLUB': {
          backgroundColor: theme.color.orange[900],
        },
        color: 'common.white',
      }}
    >
      <Stack
        direction={{
          xs: 'column',
          md: 'row',
        }}
        gap={{
          xs: 1.5,
          md: 5,
        }}
      >
        {(isMobile || isTablet) && (
          <Image
            src={podcast.bannerImg}
            alt={podcast.title}
            width={500}
            height={420}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: '20px',
            }}
          />
        )}
        <Stack
          height="100%"
          direction="column"
          justifyContent="space-between"
          gap={2}
          p={{
            xs: 1.5,
            md: 2.5,
          }}
          pr={{
            xs: 1.5,
            md: 4,
          }}
        >
          <Stack
            gap={{
              xs: 1.25,
              lg: 2.5,
            }}
            maxWidth={{
              xs: '100%',
              md: '456px',
            }}
          >
            <Typography variant="h3" fontWeight={500}>
              {podcast.title}
            </Typography>
            {(isMobile || isTablet) && (
              <Divider sx={{ borderColor: '#FFFFFF4D' }} />
            )}
            <Typography>{podcast.description}</Typography>
          </Stack>
          <Stack direction="row" spacing={2}>
            {PodcastUtils.sources.map((source, index) => (
              <Link
                key={index}
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <UIconButton
                  variant="contained"
                  color="black"
                  size={isMobile || isTablet ? 'xs' : 'small'}
                  sx={{
                    backgroundColor: 'common.black',
                    color: 'common.white',
                    borderRadius: '10px',
                  }}
                >
                  <PodcastSourceIcon sourceType={source.type} />
                </UIconButton>
              </Link>
            ))}
          </Stack>
        </Stack>
        {!isMobile && !isTablet && (
          <Box flex={1}>
            <Image
              src={podcast.bannerImg}
              alt={podcast.title}
              width={500}
              height={420}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '20px',
              }}
            />
          </Box>
        )}
      </Stack>
    </Box>
  )
})

export default PodcastCard

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
  return <PodcastCard podcast={podcast} />
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
  return <PodcastCard podcast={podcast} />
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
  return <PodcastCard podcast={podcast} />
}
