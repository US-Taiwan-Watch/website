'use client'

import Carousel from '@/common/components/elements/Carousel'
import DotPagination from '@/common/components/elements/Carousel/DotPagination'
import { useResponsive } from '@/common/lib/responsive/ResponsiveProvider'
import type React from 'react'

interface ClientCarouselProps {
  children: React.ReactNode
}

export default function ClientCarousel({ children }: ClientCarouselProps) {
  const { isMobile } = useResponsive()

  if (isMobile) {
    return (
      <Carousel
        centerMode
        settings={{
          slidesToShow: 1,
          infinite: false,
          centerPadding: '0px',
        }}
        renderPagination={() => null}
      >
        {children}
      </Carousel>
    )
  }

  return (
    <Carousel
      centerMode
      settings={{
        slidesToShow: 1,
        infinite: false,
        centerPadding: '0px',
      }}
      renderPagination={(props) => <DotPagination {...props} />}
    >
      {children}
    </Carousel>
  )
}
