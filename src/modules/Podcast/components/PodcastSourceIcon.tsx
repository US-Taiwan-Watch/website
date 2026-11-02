import { PodcastSourceType } from '@/modules/Podcast/business/Podcast'
import {
  ApplePodcastIcon,
  SoundOnPodcastIcon,
  SpotifyIcon,
} from '@/common/styles/assets/Icons'
import { SvgIconProps } from '@mui/material'

interface PodcastSourceIconProps extends SvgIconProps {
  sourceType: PodcastSourceType
}

const PodcastSourceIcon = (props: PodcastSourceIconProps) => {
  const { sourceType, ...rest } = props
  switch (sourceType) {
    case PodcastSourceType.APPLE:
      return <ApplePodcastIcon {...rest} />
    case PodcastSourceType.SPOTIFY:
      return <SpotifyIcon {...rest} />
    case PodcastSourceType.SOUND_ON:
      return <SoundOnPodcastIcon {...rest} />
    default:
      return <ApplePodcastIcon {...rest} />
  }
}

export default PodcastSourceIcon
