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
import SvgYoutubeIcon from './YoutubeIcon.svg'
import SvgProfileIcon from './ProfileIcon.svg'
import SvgSearchIcon from './SearchIcon.svg'

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
