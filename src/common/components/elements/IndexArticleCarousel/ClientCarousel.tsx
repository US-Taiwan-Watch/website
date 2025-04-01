'use client'

import Carousel from '@/common/components/elements/Carousel'
import DotPagination from '@/common/components/elements/Carousel/DotPagination'
import type React from 'react'

interface ClientCarouselProps {
  children: React.ReactNode
}

export default function ClientCarousel({ children }: ClientCarouselProps) {
  return (
    <Carousel renderPagination={(props) => <DotPagination {...props} />}>
      {children}
    </Carousel>
  )
}
