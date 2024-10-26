'use client'

import Carousel from '@/common/components/elements/Carousel'
import { styled } from '@/common/lib/mui/theme'
import { Box, Container } from '@mui/material'
import BillCard from '@/modules/Bill/components/BillCard'
import { BILL_DATA_MOCK } from '@/modules/Bill/data'
import UFullWidthBackgroundBox from '@/common/components/atoms/UFullWidthBackgroundBox'
import ArrowPagination from '@/common/components/elements/Carousel/ArrowPagination'
import { Bill } from '@/modules/Bill/classes/Bill'

const StyledCarouselContainer = styled(UFullWidthBackgroundBox)(() => ({
  overflow: 'hidden',
  backgroundColor: 'inherit',
  '& .slick-list': {
    overflow: 'visible',
  },
  '& .slick-slide:not(.slick-active)': {
    opacity: 0.5,
    scale: '0.9',
  },
}))

type Props = {
  simplified?: boolean
  data?: Bill[]
}

export default function BillCardCarousel({
  simplified,
  data = BILL_DATA_MOCK,
}: Props) {
  return (
    <StyledCarouselContainer>
      <Container maxWidth="lg">
        <Carousel
          centerMode
          settings={{
            infinite: false,
            centerPadding: '0px',
            slidesToShow: 3,
            slidesToScroll: 1,
            centerMode: false,
          }}
          renderPagination={(props) => (
            <ArrowPagination {...props} showDot={true} />
          )}
        >
          {data.map((bill, index) => (
            <Box key={index} px={1}>
              <BillCard mode="vertical" simplified={simplified} bill={bill} />
            </Box>
          ))}
        </Carousel>
      </Container>
    </StyledCarouselContainer>
  )
}
