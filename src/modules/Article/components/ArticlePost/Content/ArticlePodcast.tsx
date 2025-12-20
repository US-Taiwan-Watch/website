'use client'

import EpisodeCard from '@/modules/Podcast/components/EpisodeCard'
import { useEpisode } from '@/modules/Podcast/hooks/useEpisode'
import { Box, CircularProgress, Typography } from '@mui/material'

interface ArticlePodcastProps {
  episodeId: string
}

export default function ArticlePodcast({ episodeId }: ArticlePodcastProps) {
  const { episode, isLoading, error } = useEpisode(episodeId)

  if (isLoading) {
    return (
      <Box display="flex" justifyContent="center" py={4}>
        <CircularProgress />
      </Box>
    )
  }

  if (error) {
    return (
      <Box py={2}>
        <Typography color="error" variant="body2">
          Failed to load podcast episode
        </Typography>
      </Box>
    )
  }

  if (!episode) return null

  return <EpisodeCard episode={episode} />
}
