import { Box } from '@mui/material'
import { Episode } from '@/modules/Podcast/business/Episode'
import Dompurify from 'isomorphic-dompurify'

type EpisodeContentProps = {
  episode: Episode
}

export default function EpisodeContent({ episode }: EpisodeContentProps) {
  if (!episode.contentEncoded) return null
  return (
    <Box
      dangerouslySetInnerHTML={{
        __html: Dompurify.sanitize(episode.contentEncoded),
      }}
      sx={{
        '& a': {
          color: 'grey.3400',
          textDecoration: 'underline',
        },
      }}
    />
  )
}
