'use client'

import LandingSectionWrapper from '@/common/components/elements/Landing/LandingSectionWrapper'
import SectionTitleWithLink from '@/common/components/elements/Landing/SectionTitle'
import { useResponsive } from '@/common/lib/responsive/ResponsiveProvider'
import { OVERLAPPED_SECTION_PADDING_BOTTOM } from '@/modules/LandingPage/constants'
import IndexPodcastCards, {
  ScrollableIndexPodcastCards,
} from '@/modules/Podcast/components/IndexPodcastCards'
import FullWidthScrollableListWrapper from '@/modules/LandingPage/components/FullWidthScrollableListWrapper'
import { Episode } from '@/modules/Podcast/business/Episode'

type PodcastSectionProps = {
  title: string
  episodes: Episode[]
}

const PodcastSection = ({ title, episodes }: PodcastSectionProps) => {
  const { isMobile } = useResponsive()

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
