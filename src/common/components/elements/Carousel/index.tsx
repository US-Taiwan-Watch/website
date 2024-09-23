'use client'

import type React from 'react'
import { useRef, useState } from 'react'
import Slider, { Settings } from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Stack } from '@mui/material'
import { styled } from '@/common/lib/mui/theme'
import { isArray } from 'lodash-es'
import ArrowPagination from '@/common/components/elements/Carousel/ArrowPagination'

const StyledCarouselContainer = styled(Stack)(() => ({
  width: '100%',
  '& .slick-slider': {
    width: '100%',
  },
}))

export interface PaginationProps {
  slideCount: number
  currentSlide: number
  handlePrev?: () => void
  handleNext?: () => void
  handleDotClick?: (index: number) => void
  showDot?: boolean
}

interface CarouselProps {
  children?: React.ReactNode[] | React.ReactNode
  centerMode?: boolean
  settings?: Settings
  renderPagination?: (props: PaginationProps) => React.ReactNode
}

function Carousel({
  children,
  centerMode = false,
  settings: _settings,
  renderPagination,
}: CarouselProps) {
  const slideCount = isArray(children) ? children.length : children ? 1 : 0
  const sliderRef = useRef<Slider>(null)
  const [currentSlide, setCurrentSlide] = useState(0)

  const settings: Settings = {
    dots: false,
    arrows: false,
    centerMode,
    slidesToShow: 1,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    centerPadding: '16px',
    ..._settings,
    afterChange: (current) => {
      setCurrentSlide(current)
      _settings?.afterChange?.(current)
    },
  }

  const handlePrev = () => {
    sliderRef.current?.slickPrev()
  }

  const handleNext = () => {
    sliderRef.current?.slickNext()
  }

  const handleDotClick = (index: number) => {
    sliderRef.current?.slickGoTo(index)
  }

  // Slider 在 children 只有一個時，會出現一些錯誤，所以需要特別處理
  if (slideCount <= 1) {
    return (
      <StyledCarouselContainer
        className="carousel-slider-container"
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        {children}
      </StyledCarouselContainer>
    )
  }

  return (
    <StyledCarouselContainer
      className="carousel-slider-container"
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      <Slider ref={sliderRef} {...settings}>
        {children}
      </Slider>

      {renderPagination ? (
        renderPagination({
          slideCount,
          currentSlide,
          handlePrev,
          handleNext,
          handleDotClick,
        })
      ) : (
        <ArrowPagination
          slideCount={slideCount}
          currentSlide={currentSlide}
          handlePrev={handlePrev}
          handleNext={handleNext}
          handleDotClick={handleDotClick}
        />
      )}
    </StyledCarouselContainer>
  )
}

export default Carousel
