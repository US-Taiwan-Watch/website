import { Episode } from '@/modules/Podcast/classes/Episode'

export interface EpisodeCardCallbackParams {
  episode: Episode
}

export interface EpisodeCardProps {
  episode: Episode
  onPlay?: (params: EpisodeCardCallbackParams) => void
  onPause?: (params: EpisodeCardCallbackParams) => void
}

export interface EpisodeCardRef {
  togglePlayPause: () => void
}
