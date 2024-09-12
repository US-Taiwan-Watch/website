import { PodcastSourceType } from '@/modules/Podcast/classes/Podcast'
import {
  ApplePodcastIcon,
  GooglePodcastIcon,
  SoundOnPodcastIcon,
  SpotifyIcon,
} from '@/common/styles/assets/Icons'
import { SvgIconProps } from '@mui/material'

interface PodcastSourceIconProps extends SvgIconProps {
  sourceType: PodcastSourceType
}

const PodcastSourceIcon = (props: PodcastSourceIconProps) => {
  switch (props.sourceType) {
    case PodcastSourceType.APPLE:
      return <ApplePodcastIcon {...props} />
    case PodcastSourceType.GOOGLE:
      return <GooglePodcastIcon {...props} />
    case PodcastSourceType.SPOTIFY:
      return <SpotifyIcon {...props} />
    case PodcastSourceType.SOUND_ON:
      return <SoundOnPodcastIcon {...props} />
    default:
      return <ApplePodcastIcon {...props} />
  }
}

export default PodcastSourceIcon
