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
  const { isMobile } = useResponsive()

  return (
    <Box
      className={clsx(className, podcast.type)}
      padding={2}
      width="100%"
      borderRadius="30px"
      sx={{
        '&.SPICE_UP': {
          backgroundColor: theme.color.orange[900],
        },
        '&.NOW_YOU_KNOW': {
          backgroundColor: theme.color.indigo[700],
        },
        '&.BOOK_CLUB': {
          backgroundColor: theme.color.orange[900],
        },
        color: 'common.white',
      }}
    >
      <Stack
        direction={{
          xs: 'column',
          sm: 'row',
        }}
        gap={{
          xs: 1.5,
          sm: 0,
        }}
      >
        {isMobile && (
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
          flex={1}
          minWidth={0}
          height="100%"
          direction="column"
          justifyContent="space-between"
          gap={2}
          p={{
            xs: 0,
            sm: 2.5,
          }}
          px={{
            xs: 1.5,
          }}
        >
          <Stack
            gap={{
              xs: 1.25,
              sm: 2.5,
            }}
          >
            <Typography variant="h3" fontWeight={500}>
              {podcast.title}
            </Typography>
            {isMobile && <Divider sx={{ borderColor: '#FFFFFF4D' }} />}
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
                  size={isMobile ? 'xs' : 'small'}
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
        {!isMobile && (
          <Image
            src={podcast.bannerImg}
            alt={podcast.title}
            width={300}
            height={300}
            style={{
              maxWidth: '300px',
              borderRadius: '20px',
            }}
          />
        )}
      </Stack>
    </Box>
  )
})

export default PodcastCard

export const SpiceUpPodcastCard = () => {
  const { isMobile } = useResponsive()
  const { t } = useTranslationClient('podcast')
  const imageUrl = useMemo(() => {
    if (isMobile) {
      return '/assets/podcast/podcast_banner_SPICE_UP.png'
    }
    return '/assets/podcast/podcast_banner_SPICE_UP_square.png'
  }, [isMobile])
  const podcast = useMemo<Podcast>(
    () =>
      PodcastUtils.parse({
        type: PodcastType.SPICE_UP,
        bannerImg: imageUrl,
        title: t('asset.spiceUp.title', { ns: 'podcast' }),
        description: t('asset.spiceUp.description', { ns: 'podcast' }),
      }),
    [t, imageUrl]
  )
  return <PodcastCard podcast={podcast} />
}
export const NowYouKnowPodcastCard = () => {
  const { isMobile } = useResponsive()
  const { t } = useTranslationClient('podcast')
  const imageUrl = useMemo(() => {
    if (isMobile) {
      return '/assets/podcast/podcast_banner_NOW_YOU_KNOW.png'
    }
    return '/assets/podcast/podcast_banner_NOW_YOU_KNOW_square.png'
  }, [isMobile])
  const podcast = useMemo<Podcast>(
    () =>
      PodcastUtils.parse({
        type: PodcastType.NOW_YOU_KNOW,
        bannerImg: imageUrl,
        title: t('asset.nowYouKnow.title', { ns: 'podcast' }),
        description: t('asset.nowYouKnow.description', { ns: 'podcast' }),
      }),
    [t, imageUrl]
  )
  return <PodcastCard podcast={podcast} />
}
export const BookClubPodcastCard = () => {
  const { isMobile } = useResponsive()
  const { t } = useTranslationClient('podcast')
  const imageUrl = useMemo(() => {
    if (isMobile) {
      return '/assets/podcast/podcast_banner_BOOK_CLUB.png'
    }
    return '/assets/podcast/podcast_banner_BOOK_CLUB_square.png'
  }, [isMobile])
  const podcast = useMemo<Podcast>(
    () =>
      PodcastUtils.parse({
        type: PodcastType.BOOK_CLUB,
        bannerImg: imageUrl,
        title: t('asset.bookClub.title', { ns: 'podcast' }),
        description: t('asset.bookClub.description', { ns: 'podcast' }),
      }),
    [t, imageUrl]
  )
  return <PodcastCard podcast={podcast} />
}
