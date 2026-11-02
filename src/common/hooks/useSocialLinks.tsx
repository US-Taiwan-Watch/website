import {
  FacebookIcon,
  InstagramIcon,
  PodcastIcon,
  XIcon,
  ThreadsIcon,
  YoutubeIcon,
  MailIcon,
} from '@/common/styles/assets/Icons'
import type React from 'react'

type SocialLinkItem = {
  icon: React.ReactNode
  url: string
}

export default function useSocialLinks() {
  const socialLinkItems: Array<SocialLinkItem> = [
    {
      icon: <FacebookIcon />,
      url: 'https://www.facebook.com/ustaiwanwatch',
    },
    {
      icon: <XIcon />,
      url: 'https://x.com/ustaiwanwatch',
    },
    {
      icon: <InstagramIcon />,
      url: 'https://www.instagram.com/ustaiwanwatch/',
    },
    {
      icon: <PodcastIcon />,
      url: 'https://podcasts.apple.com/tw/podcast/%E7%BE%8E%E5%9C%8B%E5%8F%B0%E7%81%A3%E8%A7%80%E6%B8%AC%E7%AB%99/id1508245836',
    },
    {
      icon: <ThreadsIcon />,
      url: 'https://www.threads.net/@ustaiwanwatch',
    },
    {
      icon: <YoutubeIcon />,
      url: 'https://www.youtube.com/c/USTaiwanWatch',
    },
    {
      icon: <MailIcon />,
      url: 'mailto:contact@ustw.watch',
    },
  ]

  return {
    socialLinkItems,
  }
}
