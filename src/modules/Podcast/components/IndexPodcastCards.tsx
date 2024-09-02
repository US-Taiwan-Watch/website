'use client'

import UFullWidthBackgroundBox from '@/common/components/atoms/UFullWidthBackgroundBox'
import Carousel from '@/common/components/elements/Carousel'
import {
  WatchBookClubPodcastCard,
  WatchHerePodcastCard,
  WatchInfoPodcastCard,
} from '@/modules/Podcast/components/IndexPodcastCard'
import { Container } from '@mui/material'
import { styled } from '@mui/material/styles'

const StyledUFullWidthBackgroundBox = styled(UFullWidthBackgroundBox)(() => ({
  overflow: 'hidden',
  backgroundColor: 'inherit',
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
      <Container>
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
      </Container>
    </StyledUFullWidthBackgroundBox>
  )
}

export default IndexPodcastCards
