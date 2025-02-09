'use client'

import Carousel from '@/common/components/elements/Carousel'
import { styled } from '@/common/lib/mui/theme'
import { Box, Container } from '@mui/material'
import BillCard from '@/modules/Bill/components/BillCard'
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
  data: Bill[]
}

export default function BillCardCarousel({ simplified, data }: Props) {
  // 顯示三張的話，最後兩張不可能成為 currentSlide，故藉 availableSlideCount 控制 handleNext
  const slidesToShow = 3
  const availableSlideCount = data.length - (slidesToShow - 1)

  return (
    <StyledCarouselContainer>
      <Container maxWidth="lg">
        <Carousel
          centerMode
          settings={{
            infinite: false,
            centerPadding: '0px',
            slidesToShow,
            slidesToScroll: 1,
            centerMode: false,
          }}
          renderPagination={(props) => (
            <ArrowPagination
              {...props}
              slideCount={availableSlideCount}
              handleNext={() => {
                if (props.currentSlide + 1 < availableSlideCount) {
                  props.sliderRef?.current?.slickNext()
                }
              }}
              showDot
            />
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
