'use client'

import { SvgIcon, SvgIconProps } from '@mui/material'

import SvgBookmarkIcon from './BookmarkIcon.svg'
import SvgFacebookIcon from './FacebookIcon.svg'
import SvgInstagramIcon from './InstagramIcon.svg'
import SvgLanguageIcon from './LanguageIcon.svg'
import SvgLinkIcon from './LinkIcon.svg'
import SvgMailIcon from './MailIcon.svg'
import SvgOutlinedShareIcon from './OutlinedShareIcon.svg'
import SvgPodcastIcon from './PodcastIcon.svg'
import SvgShareIcon from './ShareIcon.svg'
import SvgSpotifyIcon from './SpotifyIcon.svg'
import SvgThreadsIcon from './ThreadsIcon.svg'
import SvgXIcon from './XIcon.svg'
import SvgYoutubeIcon from './YouTubeIcon.svg'
import SvgProfileIcon from './ProfileIcon.svg'
import SvgSearchIcon from './SearchIcon.svg'
import SvgBackwardIcon from './BackwardIcon.svg'
import SvgForwardIcon from './ForwardIcon.svg'
import SvgNorthEastIcon from './NorthEastIcon.svg'
import SvgApplePodcastIcon from './ApplePodcastIcon.svg'
import SvgGooglePodcastIcon from './GooglePodcastIcon.svg'
import SvgSoundOnPodcastIcon from './SoundOnPodcastIcon.svg'
import SvgBriefcaseIcon from './BriefcaseIcon.svg'
import SvgLineChartIcon from './LineChartIcon.svg'
import SvgPeopleIcon from './PeopleIcon.svg'
import SvgPeopleCheckIcon from './PeopleCheckIcon.svg'
import SvgStarsIcon from './StarsIcon.svg'
import SvgDocumentIcon from './DocumentIcon.svg'
import SvgPersonIcon from './PersonIcon.svg'
import SvgSponsorIcon from './SponsorIcon.svg'
import SvgTrendIcon from './TrendIcon.svg'
import SvgCongressIcon from './CongressIcon.svg'
import SvgActionsIcon from './ActionsIcon.svg'
import SvgCosponsorsIcon from './CosponsorsIcon.svg'
import SvgTrackerIcon from './TrackerIcon.svg'
import SvgCalenderIcon from './CalenderIcon.svg'
import SvgNoteIcon from './NoteIcon.svg'
import SvgVersionIcon from './VersionIcon.svg'
import SvgPerson2Icon from './Person2Icon.svg'
import SvgPeopleJoinIcon from './PeopleJoinIcon.svg'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const SizableSvgIcon = (props: SvgIconProps & { component: any }) => {
  return (
    <SvgIcon
      {...props.component().props}
      {...props}
      sx={{
        width: '100%',
        height: '100%',
      }}
    />
  )
}

export const BookmarkIcon = (props: SvgIconProps) => (
  <SizableSvgIcon component={SvgBookmarkIcon} {...props} />
)

export const FacebookIcon = (props: SvgIconProps) => (
  <SizableSvgIcon component={SvgFacebookIcon} {...props} />
)

export const InstagramIcon = (props: SvgIconProps) => (
  <SizableSvgIcon component={SvgInstagramIcon} {...props} />
)

export const LanguageIcon = (props: SvgIconProps) => (
  <SizableSvgIcon component={SvgLanguageIcon} {...props} />
)

export const LinkIcon = (props: SvgIconProps) => (
  <SizableSvgIcon component={SvgLinkIcon} {...props} />
)

export const MailIcon = (props: SvgIconProps) => (
  <SizableSvgIcon component={SvgMailIcon} {...props} />
)

export const OutlinedShareIcon = (props: SvgIconProps) => (
  <SizableSvgIcon component={SvgOutlinedShareIcon} {...props} />
)

export const PodcastIcon = (props: SvgIconProps) => (
  <SizableSvgIcon component={SvgPodcastIcon} {...props} />
)

export const ShareIcon = (props: SvgIconProps) => (
  <SizableSvgIcon component={SvgShareIcon} {...props} />
)

export const SpotifyIcon = (props: SvgIconProps) => (
  <SizableSvgIcon component={SvgSpotifyIcon} {...props} />
)

export const ThreadsIcon = (props: SvgIconProps) => (
  <SizableSvgIcon component={SvgThreadsIcon} {...props} />
)

export const XIcon = (props: SvgIconProps) => (
  <SizableSvgIcon component={SvgXIcon} {...props} />
)

export const YoutubeIcon = (props: SvgIconProps) => (
  <SizableSvgIcon component={SvgYoutubeIcon} {...props} />
)

export const ProfileIcon = (props: SvgIconProps) => (
  <SizableSvgIcon component={SvgProfileIcon} {...props} />
)

export const SearchIcon = (props: SvgIconProps) => (
  <SizableSvgIcon component={SvgSearchIcon} {...props} />
)

export const BackwardIcon = (props: SvgIconProps) => (
  <SizableSvgIcon component={SvgBackwardIcon} {...props} />
)

export const ForwardIcon = (props: SvgIconProps) => (
  <SizableSvgIcon component={SvgForwardIcon} {...props} />
)

export const NorthEastIcon = (props: SvgIconProps) => (
  <SizableSvgIcon component={SvgNorthEastIcon} {...props} />
)

export const ApplePodcastIcon = (props: SvgIconProps) => (
  <SizableSvgIcon component={SvgApplePodcastIcon} {...props} />
)

export const GooglePodcastIcon = (props: SvgIconProps) => (
  <SizableSvgIcon component={SvgGooglePodcastIcon} {...props} />
)

export const SoundOnPodcastIcon = (props: SvgIconProps) => (
  <SizableSvgIcon component={SvgSoundOnPodcastIcon} {...props} />
)

export const BriefcaseIcon = (props: SvgIconProps) => (
  <SizableSvgIcon component={SvgBriefcaseIcon} {...props} />
)

export const LineChartIcon = (props: SvgIconProps) => (
  <SizableSvgIcon component={SvgLineChartIcon} {...props} />
)

export const PeopleIcon = (props: SvgIconProps) => (
  <SizableSvgIcon component={SvgPeopleIcon} {...props} />
)

export const PeopleCheckIcon = (props: SvgIconProps) => (
  <SizableSvgIcon component={SvgPeopleCheckIcon} {...props} />
)

export const StarsIcon = (props: SvgIconProps) => (
  <SizableSvgIcon component={SvgStarsIcon} {...props} />
)

export const DocumentIcon = (props: SvgIconProps) => (
  <SizableSvgIcon component={SvgDocumentIcon} {...props} />
)

export const PersonIcon = (props: SvgIconProps) => (
  <SizableSvgIcon component={SvgPersonIcon} {...props} />
)

export const SponsorIcon = (props: SvgIconProps) => (
  <SizableSvgIcon component={SvgSponsorIcon} {...props} />
)

export const CosponsorsIcon = (props: SvgIconProps) => (
  <SizableSvgIcon component={SvgCosponsorsIcon} {...props} />
)

export const TrendIcon = (props: SvgIconProps) => (
  <SizableSvgIcon component={SvgTrendIcon} {...props} />
)

export const CongressIcon = (props: SvgIconProps) => (
  <SizableSvgIcon component={SvgCongressIcon} {...props} />
)

export const ActionsIcon = (props: SvgIconProps) => (
  <SizableSvgIcon component={SvgActionsIcon} {...props} />
)

export const TrackerIcon = (props: SvgIconProps) => (
  <SizableSvgIcon component={SvgTrackerIcon} {...props} />
)

export const CalenderIcon = (props: SvgIconProps) => (
  <SizableSvgIcon component={SvgCalenderIcon} {...props} />
)

export const NoteIcon = (props: SvgIconProps) => (
  <SizableSvgIcon component={SvgNoteIcon} {...props} />
)

export const VersionIcon = (props: SvgIconProps) => (
  <SizableSvgIcon component={SvgVersionIcon} {...props} />
)

export const Person2Icon = (props: SvgIconProps) => (
  <SizableSvgIcon component={SvgPerson2Icon} {...props} />
)

export const PeopleJoinIcon = (props: SvgIconProps) => (
  <SizableSvgIcon component={SvgPeopleJoinIcon} {...props} />
)
