'use client'

import React, { createContext, useCallback, useContext, useState } from 'react'
import ImageLightbox, { ImageLightboxImage } from './index'

type ImageLightboxContextType = {
  show: (images: ImageLightboxImage[], indexStart?: number) => void
  hide: () => void
}

const ImageLightboxContext = createContext<ImageLightboxContextType>({
  show: () => {},
  hide: () => {},
})

export const useImageLightbox = () => {
  const context = useContext(ImageLightboxContext)
  if (!context) {
    throw new Error(
      'useImageLightbox must be used within a ImageLightboxProvider'
    )
  }
  return context
}

export default function ImageLightboxProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [isOpen, setIsOpen] = useState(false)
  const [images, setImages] = useState<ImageLightboxImage[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)

  const show = useCallback(
    (newImages: ImageLightboxImage[], indexStart: number = 0) => {
      setImages(newImages)
      setCurrentIndex(indexStart)
      setIsOpen(true)
    },
    []
  )

  const hide = useCallback(() => {
    setIsOpen(false)
  }, [])

  const handleNavigate = useCallback((index: number) => {
    setCurrentIndex(index)
  }, [])

  return (
    <ImageLightboxContext.Provider value={{ show, hide }}>
      {children}
      <ImageLightbox
        open={isOpen}
        images={images}
        currentIndex={currentIndex}
        onClose={hide}
        onNavigate={handleNavigate}
      />
    </ImageLightboxContext.Provider>
  )
}
