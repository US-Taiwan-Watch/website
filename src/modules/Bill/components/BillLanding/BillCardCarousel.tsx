'use client'

import Carousel from '@/common/components/elements/Carousel'
import { styled } from '@/common/lib/mui/theme'
import { Box, Container } from '@mui/material'
import BillCard from '@/modules/Bill/components/BillCard'

const StyledCarouselContainer = styled(Box)(() => ({
  overflow: 'hidden',
  backgroundColor: 'inherit',
  marginLeft: '-50dvw',
  marginRight: '-50dvw',
  '& .slick-list': {
    overflow: 'visible',
  },
  '& .slick-slide:not(.slick-active)': {
    opacity: 0.5,
    scale: '0.9',
  },
}))

export default function BillCardCarousel() {
  return (
    <StyledCarouselContainer>
      <Container maxWidth="lg">
        <Carousel
          centerMode
          settings={{
            infinite: false,
            centerPadding: '0px',
            slidesToShow: 3,
          }}
          showDot={false}
        >
          {Array.from({ length: 10 }).map((_, index) => (
            <Box key={index} px={1}>
              <BillCard mode="vertical" simplified />
            </Box>
          ))}
        </Carousel>
      </Container>
    </StyledCarouselContainer>
  )
}
