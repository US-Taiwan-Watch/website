interface EpisodeCardCallbackParams {
  podcastId: string
  episodeId: string
}

export interface EpisodeCardProps {
  podcastId: string
  episodeId: string
  onPlay?: (params: EpisodeCardCallbackParams) => void
  onPause?: (params: EpisodeCardCallbackParams) => void
}

export interface EpisodeCardRef {
  play: () => void
  pause: () => void
}
