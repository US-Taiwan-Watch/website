'use client'

import { Divider, Stack, Typography } from '@mui/material'
import { memo, useEffect, useState } from 'react'
import useTranslationClient from '@/common/lib/i18n/hooks/useTranslationClient'
import EpisodeUtils, { Episode } from '@/modules/Podcast/business/Episode'
import UHStack from '@/common/components/atoms/UHStack'
import PodcastSourceIcon from '@/modules/Podcast/components/PodcastSourceIcon'
import Link from 'next/link'
import UIconButton from '@/common/components/atoms/UIconButton'
import { DateUtils } from '@/modules/Common/business/Date'

const DATE_FORMAT = 'YYYY-MM-DD'

type EpisodePostHeaderProps = {
  episode: Episode
}

const EpisodePostHeader = memo(function EpisodePostHeader({
  episode,
}: EpisodePostHeaderProps) {
  const { t } = useTranslationClient('podcast')

  const [formattedDate, setFormattedDate] = useState('')
  useEffect(() => {
    setFormattedDate(DateUtils.formatLocal(episode.publishDate, DATE_FORMAT))
  }, [episode.publishDate])

  return (
    <Stack
      gap={{
        xs: 1,
        md: 2,
      }}
    >
      <Typography
        sx={{
          fontSize: {
            xs: '1.5rem',
            lg: '2.375rem',
          },
          fontWeight: {
            xs: 600,
            lg: 500,
          },
        }}
      >
        {episode.title}
      </Typography>
      <Divider
        sx={{
          borderColor: 'neutral.200',
          my: 0,
          display: {
            xs: 'block',
            md: 'none',
          },
        }}
      />
      {/** Date */}
      <Typography variant="bodyS" sx={{ color: 'grey.3300' }} fontWeight={500}>
        {t('page.releaseTimeAuthor', {
          ns: 'podcast',
          date: formattedDate,
          author: episode.artistName,
        })}
      </Typography>
      <UHStack gap={2}>
        {EpisodeUtils.getSources().map((source, index) => (
          <Link
            key={index}
            href={source.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <UIconButton
              variant="contained"
              color="black"
              size="xs"
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
      </UHStack>
    </Stack>
  )
})

export default EpisodePostHeader
