'use client'

import Carousel from '@/common/components/elements/Carousel'
import { styled } from '@/common/lib/mui/theme'
import { Box, Typography } from '@mui/material'
import BillCard, { BillCardProps } from '@/modules/Bill/components/BillCard'
import UFullWidthBackgroundBox from '@/common/components/atoms/UFullWidthBackgroundBox'
import ArrowPagination from '@/common/components/elements/Carousel/ArrowPagination'
import { Bill } from '@/modules/Bill/business/Bill'
import UContainer from '@/common/components/atoms/UContainer'
import { memo } from 'react'
import UHStack from '@/common/components/atoms/UHStack'
import { useResponsive } from '@/common/lib/responsive/ResponsiveProvider'
import useTranslationClient from '@/common/lib/i18n/hooks/useTranslationClient'

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

type BillCardsProps = {
  visibilities?: BillCardProps['visibilities']
  data: Bill[]
}

export const BillCardCarousel = memo(function BillCardCarousel({
  visibilities,
  data,
}: BillCardsProps) {
  const { isTablet } = useResponsive()
  const { t } = useTranslationClient('bill')

  // Handle empty data
  if (!data || data.length === 0) {
    return (
      <Box
        sx={{
          textAlign: 'center',
          py: 8,
          minHeight: 400,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography variant="body1" color="text.secondary">
          {t('page.section.carousel.empty', {
            ns: 'bill',
          })}
        </Typography>
      </Box>
    )
  }

  // 顯示三張的話，最後兩張不可能成為 currentSlide，故藉 availableSlideCount 控制 handleNext
  const slidesToShow = isTablet ? 2 : 3
  const availableSlideCount = data.length - (slidesToShow - 1)

  return (
    <StyledCarouselContainer>
      <UContainer>
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
          {data.map((bill) => (
            <Box key={bill.id} px={1} height="100%">
              <BillCard
                mode="vertical"
                bill={bill}
                visibilities={visibilities}
              />
            </Box>
          ))}
        </Carousel>
      </UContainer>
    </StyledCarouselContainer>
  )
})

export const ScrollableBillCards = memo(function ScrollableBillCards({
  visibilities,
  data,
}: BillCardsProps) {
  const { t } = useTranslationClient('bill')

  // Handle empty data
  if (!data || data.length === 0) {
    return (
      <Box
        sx={{
          textAlign: 'center',
          py: 4,
          minHeight: 200,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography variant="body1" color="text.secondary">
          {t('page.section.carousel.empty', {
            ns: 'bill',
          })}
        </Typography>
      </Box>
    )
  }

  return (
    <Box overflow="auto" py={2} px={2}>
      <UHStack gap={1} width="max-content">
        {data.map((bill) => (
          <Box key={bill.id} width="80dvw">
            <BillCard mode="vertical" bill={bill} visibilities={visibilities} />
          </Box>
        ))}
      </UHStack>
    </Box>
  )
})
