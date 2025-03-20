'use client'

import LandingSectionWrapper from '@/common/components/elements/Landing/LandingSectionWrapper'
import SectionTitleWithLink from '@/common/components/elements/Landing/SectionTitle'
import { useResponsive } from '@/common/lib/responsive/ResponsiveProvider'
import { OVERLAPPED_SECTION_PADDING_BOTTOM } from '@/modules/LandingPage/constants'
import IndexPodcastCards, {
  ScrollableIndexPodcastCards,
} from '@/modules/Podcast/components/IndexPodcastCards'
import PodcastFetcherProvider from '@/modules/Podcast/providers/PodcastFetcherProvider'
import FullWidthScrollableListWrapper from '@/modules/LandingPage/components/FullWidthScrollableListWrapper'

const PodcastSection = () => {
  const { isMobile } = useResponsive()

  return (
    <LandingSectionWrapper
      contentWrapperSx={{
        paddingBottom: `${OVERLAPPED_SECTION_PADDING_BOTTOM}px`,
      }}
    >
      <PodcastFetcherProvider />
      <SectionTitleWithLink title="Podcast" />
      {isMobile ? (
        <FullWidthScrollableListWrapper>
          <ScrollableIndexPodcastCards />
        </FullWidthScrollableListWrapper>
      ) : (
        <IndexPodcastCards />
      )}
    </LandingSectionWrapper>
  )
}

export default PodcastSection
