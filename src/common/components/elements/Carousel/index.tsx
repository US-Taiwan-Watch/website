'use client'

import clsx from 'clsx'
import type React from 'react'
import { useRef, useState } from 'react'
import Slider, { Settings } from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Stack } from '@mui/material'
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined'
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined'
import UIconButton from '@/common/components/atoms/UIconButton'
import { styled } from '@/common/lib/mui/theme'
import { isArray } from 'lodash-es'

const StyledCarouselContainer = styled(Stack)(() => ({
  width: '100%',
  '& .slick-slider': {
    width: '100%',
  },
}))

const StyledPaginationContainer = styled(Stack)(({ theme }) => ({
  marginTop: theme.spacing(2),
  '& .carousel-slider-prev': {
    backgroundColor: theme.color.neutral[500],
    color: theme.color.common.white,
  },
  '& .carousel-slider-next': {
    backgroundColor: theme.color.neutral[500],
    color: theme.color.common.white,
  },
}))

const StyledPaginationDotContainer = styled(Stack)(({ theme }) => ({
  margin: `0px ${theme.spacing(2)}`,
}))

const StyledPaginationDot = styled('div')(({ theme }) => ({
  width: '8px',
  height: '8px',
  borderRadius: '50%',
  backgroundColor: theme.color.grey[1200],
  '&:hover': {
    cursor: 'pointer',
  },
  '&.slick-active': {
    backgroundColor: theme.color.neutral[500],
    width: '12px',
    height: '12px',
  },
}))

interface CarouselProps {
  children?: React.ReactNode[] | React.ReactNode
  centerMode?: boolean
  settings?: Settings
}

function Carousel({
  children,
  centerMode = false,
  settings: _settings,
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
      <StyledPaginationContainer
        direction="row"
        alignItems="center"
        justifyContent="center"
      >
        <UIconButton
          className="carousel-slider-prev"
          variant="rounded"
          color="default"
          size="small"
          onClick={handlePrev}
        >
          <ArrowBackIosOutlinedIcon />
        </UIconButton>
        <StyledPaginationDotContainer
          direction="row"
          alignItems="center"
          justifyContent="center"
          spacing={1}
        >
          {Array.from({ length: slideCount }).map((_, index) => (
            <StyledPaginationDot
              key={index}
              onClick={() => handleDotClick(index)}
              className={clsx({
                'slick-active': index === currentSlide,
              })}
            />
          ))}
        </StyledPaginationDotContainer>
        <UIconButton
          className="carousel-slider-next"
          variant="rounded"
          color="default"
          size="small"
          onClick={handleNext}
        >
          <ArrowForwardIosOutlinedIcon />
        </UIconButton>
      </StyledPaginationContainer>
    </StyledCarouselContainer>
  )
}

export default Carousel
