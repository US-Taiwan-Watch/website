'use client'

import UContainer from '@/common/components/atoms/UContainer'
import UFullWidthBackgroundBox from '@/common/components/atoms/UFullWidthBackgroundBox'
import Carousel from '@/common/components/elements/Carousel'
import {
  WatchBookClubPodcastCard,
  WatchHerePodcastCard,
  WatchInfoPodcastCard,
} from '@/modules/Podcast/components/IndexPodcastCard'
import { styled } from '@mui/material/styles'

const StyledUFullWidthBackgroundBox = styled(UFullWidthBackgroundBox)(() => ({
  overflow: 'hidden',
  '& .slick-list': {
    overflow: 'visible',
  },
  '& .slick-slide:not(.slick-current)': {
    opacity: 0.5,
    scale: '0.9',
  },
}))

const IndexPodcastCards = () => {
  return (
    <StyledUFullWidthBackgroundBox>
      <UContainer>
        <Carousel
          centerMode
          settings={{
            slidesToShow: 1,
            infinite: false,
            centerPadding: '0px',
          }}
        >
          <WatchHerePodcastCard />
          <WatchInfoPodcastCard />
          <WatchBookClubPodcastCard />
        </Carousel>
      </UContainer>
    </StyledUFullWidthBackgroundBox>
  )
}

export default IndexPodcastCards
