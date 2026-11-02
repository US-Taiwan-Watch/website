'use client'

import { useEffect, useState } from 'react'
import { Skeleton } from '@mui/material'
import LandingSectionWrapper from '@/common/components/elements/Landing/LandingSectionWrapper'
import SectionTitleWithLink from '@/common/components/elements/Landing/SectionTitle'
import { useResponsive } from '@/common/lib/responsive/ResponsiveProvider'
import { OVERLAPPED_SECTION_PADDING_BOTTOM } from '@/modules/LandingPage/constants'
import IndexPodcastCards, {
  ScrollableIndexPodcastCards,
} from '@/modules/Podcast/components/IndexPodcastCards'
import FullWidthScrollableListWrapper from '@/modules/LandingPage/components/FullWidthScrollableListWrapper'
import { Episode } from '@/modules/Podcast/business/Episode'
import { getEpisodes } from '@/modules/Podcast/api/soundon'
import { config } from '@/config'

type PodcastSectionProps = {
  title: string
}

export const PodcastSectionSkeleton = () => {
  return <Skeleton variant="rectangular" width="100%" height={500} />
}

const PodcastSection = ({ title }: PodcastSectionProps) => {
  const { isMobile } = useResponsive()
  const [episodes, setEpisodes] = useState<Episode[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchEpisodes = async () => {
      const podcastId = config.SOUNDON_PODCAST_ID
      if (!podcastId) {
        setIsLoading(false)
        return
      }

      try {
        const data = await getEpisodes({ podcastId })
        setEpisodes(data)
      } catch {
        setEpisodes([])
      } finally {
        setIsLoading(false)
      }
    }

    fetchEpisodes()
  }, [])

  if (isLoading) {
    return <PodcastSectionSkeleton />
  }

  if (episodes.length === 0) {
    return null
  }

  return (
    <LandingSectionWrapper
      contentWrapperSx={{
        paddingBottom: `${OVERLAPPED_SECTION_PADDING_BOTTOM}px`,
      }}
    >
      <SectionTitleWithLink title={title} />
      {isMobile ? (
        <FullWidthScrollableListWrapper>
          <ScrollableIndexPodcastCards episodes={episodes} />
        </FullWidthScrollableListWrapper>
      ) : (
        <IndexPodcastCards episodes={episodes} />
      )}
    </LandingSectionWrapper>
  )
}

export default PodcastSection
