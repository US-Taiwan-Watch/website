'use client'

import UContainer from '@/common/components/atoms/UContainer'
import UFullWidthBackgroundBox from '@/common/components/atoms/UFullWidthBackgroundBox'
import UHStack from '@/common/components/atoms/UHStack'
import Carousel from '@/common/components/elements/Carousel'
import { Episode } from '@/modules/Podcast/business/Episode'
import {
  BookClubPodcastCard,
  NowYouKnowPodcastCard,
  SpiceUpPodcastCard,
} from '@/modules/Podcast/components/IndexPodcastCard'
import { Box } from '@mui/material'
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

type IndexPodcastCardsProps = {
  episodes: Episode[]
}

const IndexPodcastCards = ({ episodes }: IndexPodcastCardsProps) => {
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
          <SpiceUpPodcastCard episodes={episodes} />
          <NowYouKnowPodcastCard episodes={episodes} />
          <BookClubPodcastCard episodes={episodes} />
        </Carousel>
      </UContainer>
    </StyledUFullWidthBackgroundBox>
  )
}

export default IndexPodcastCards

export const ScrollableIndexPodcastCards = ({
  episodes,
}: IndexPodcastCardsProps) => {
  return (
    <Box overflow="auto" py={2} px={2}>
      <UHStack gap={2} width="max-content">
        <SpiceUpPodcastCard episodes={episodes} />
        <NowYouKnowPodcastCard episodes={episodes} />
        <BookClubPodcastCard episodes={episodes} />
      </UHStack>
    </Box>
  )
}
