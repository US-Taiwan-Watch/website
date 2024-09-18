'use client'

import Carousel from '@/common/components/elements/Carousel'
import { styled } from '@/common/lib/mui/theme'
import { Box, Container } from '@mui/material'
import BillCard from '@/modules/Bill/components/BillCard'
import { BILL_DATA_MOCK } from '@/modules/Bill/data'
import ArrowPagination from '@/common/components/elements/Carousel/ArrowPagination'

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
          renderPagination={(props) => (
            <ArrowPagination {...props} showDot={false} />
          )}
        >
          {BILL_DATA_MOCK.map((bill, index) => (
            <Box key={index} px={1}>
              <BillCard mode="vertical" simplified bill={bill} />
            </Box>
          ))}
        </Carousel>
      </Container>
    </StyledCarouselContainer>
  )
}
