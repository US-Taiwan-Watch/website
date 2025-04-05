import Episode from '@/modules/Podcast/business/Episode'
import { Stack } from '@mui/material'
import { memo } from 'react'
import EpisodePostHeader from '@/modules/Podcast/components/EpisodePost/EpisodePostHeader'
import EpisodeCard from '@/modules/Podcast/components/EpisodeCard'

type EpisodePostProps = {
  episode: Episode
}

const EpisodePost = memo(function EpisodePost({ episode }: EpisodePostProps) {
  return (
    <Stack
      gap={{
        xs: 2,
        md: 4,
      }}
    >
      <EpisodePostHeader episode={episode} />
      <EpisodeCard episode={episode} />
    </Stack>
  )
})

export default EpisodePost
