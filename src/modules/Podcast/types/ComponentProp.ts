export interface CallbackParams {
  podcastId: string;
  episodeId: string;
}

export interface EpisodeCardProps {
  podcastId: string;
  episodeId: string;
  onPlay?: (params: CallbackParams) => void;
  onPause?: (params: CallbackParams) => void;
}

export interface EpisodeCardRef {
  play: () => void;
  pause: () => void;
}
