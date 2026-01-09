'use client'

import { Dialog, IconButton, Box } from '@mui/material'
import { styled, USTWTheme } from '@/common/lib/mui/theme'
import Image from 'next/image'
import { memo, useCallback, useEffect } from 'react'
import CloseIcon from '@mui/icons-material/Close'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'

const StyledDialog = styled(Dialog)(() => ({
  '& .MuiBackdrop-root': {
    backgroundColor: 'rgba(0, 0, 0, 0.92)',
    backdropFilter: 'blur(8px)',
  },
  '& .MuiDialog-paper': {
    backgroundColor: 'transparent',
    boxShadow: 'none',
    maxWidth: '95vw',
    maxHeight: '95vh',
    margin: 0,
    overflow: 'visible',
  },
}))

const NavigationButton = styled(IconButton)(
  ({ theme }: { theme: USTWTheme }) => ({
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    backgroundColor: 'rgba(255, 255, 255, 0.12)',
    backdropFilter: 'blur(12px)',
    color: theme.color.common.white,
    width: 56,
    height: 56,
    border: '1px solid rgba(255, 255, 255, 0.18)',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.20)',
      borderColor: 'rgba(255, 255, 255, 0.3)',
      transform: 'translateY(-50%) scale(1.05)',
    },
    '&:active': {
      transform: 'translateY(-50%) scale(0.98)',
    },
    '&.Mui-disabled': {
      opacity: 0.3,
      color: theme.color.common.white,
    },
  })
)

const CloseButton = styled(IconButton)(({ theme }: { theme: USTWTheme }) => ({
  position: 'absolute',
  top: 16,
  right: 16,
  backgroundColor: 'rgba(255, 255, 255, 0.12)',
  backdropFilter: 'blur(12px)',
  color: theme.color.common.white,
  width: 44,
  height: 44,
  border: '1px solid rgba(255, 255, 255, 0.18)',
  zIndex: 1,
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.20)',
    borderColor: 'rgba(255, 255, 255, 0.3)',
    transform: 'rotate(90deg) scale(1.05)',
  },
}))

const ImageCounter = styled(Box)(({ theme }: { theme: USTWTheme }) => ({
  position: 'absolute',
  bottom: 24,
  left: '50%',
  transform: 'translateX(-50%)',
  backgroundColor: 'rgba(0, 0, 0, 0.6)',
  backdropFilter: 'blur(12px)',
  color: theme.color.common.white,
  padding: '8px 20px',
  borderRadius: '24px',
  border: '1px solid rgba(255, 255, 255, 0.15)',
  fontWeight: 500,
  fontSize: '0.9375rem',
  letterSpacing: '0.02em',
  userSelect: 'none',
}))

export interface ImageLightboxImage {
  url: string
  alt?: string
}

interface ImageLightboxProps {
  open: boolean
  images: ImageLightboxImage[]
  currentIndex: number
  onClose: () => void
  onNavigate: (index: number) => void
}

const ImageLightbox = ({
  open,
  images,
  currentIndex,
  onClose,
  onNavigate,
}: ImageLightboxProps) => {
  const handlePrevious = useCallback(() => {
    if (currentIndex > 0) {
      onNavigate(currentIndex - 1)
    }
  }, [currentIndex, onNavigate])

  const handleNext = useCallback(() => {
    if (currentIndex < images.length - 1) {
      onNavigate(currentIndex + 1)
    }
  }, [currentIndex, images.length, onNavigate])

  // Keyboard navigation
  useEffect(() => {
    if (!open) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      } else if (e.key === 'ArrowLeft') {
        handlePrevious()
      } else if (e.key === 'ArrowRight') {
        handleNext()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [open, onClose, handlePrevious, handleNext])

  if (!images[currentIndex]) return null

  const currentImage = images[currentIndex]

  return (
    <StyledDialog
      open={open}
      onClose={onClose}
      maxWidth={false}
      fullWidth={false}
      onClick={onClose}
    >
      <Box
        sx={{
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minWidth: { xs: '90vw', sm: '70vw', md: '60vw' },
          minHeight: { xs: '60vh', sm: '70vh', md: '80vh' },
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <CloseButton onClick={onClose} aria-label="Close lightbox">
          <CloseIcon />
        </CloseButton>

        {/* Main Image */}
        <Box
          sx={{
            position: 'relative',
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            animation: 'fadeIn 0.3s ease-out',
            '@keyframes fadeIn': {
              from: { opacity: 0, transform: 'scale(0.96)' },
              to: { opacity: 1, transform: 'scale(1)' },
            },
          }}
        >
          <Image
            src={currentImage.url}
            alt={currentImage.alt || `Image ${currentIndex + 1}`}
            width={1200}
            height={800}
            style={{
              maxWidth: '100%',
              maxHeight: '85vh',
              width: 'auto',
              height: 'auto',
              objectFit: 'contain',
              borderRadius: '8px',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)',
            }}
            priority
          />
        </Box>

        {/* Navigation Buttons */}
        {images.length > 1 && (
          <>
            <NavigationButton
              onClick={handlePrevious}
              disabled={currentIndex === 0}
              aria-label="Previous image"
              sx={{ left: { xs: 8, sm: 16 } }}
            >
              <ChevronLeftIcon fontSize="large" />
            </NavigationButton>

            <NavigationButton
              onClick={handleNext}
              disabled={currentIndex === images.length - 1}
              aria-label="Next image"
              sx={{ right: { xs: 8, sm: 16 } }}
            >
              <ChevronRightIcon fontSize="large" />
            </NavigationButton>
          </>
        )}

        {/* Image Counter */}
        {images.length > 1 && (
          <ImageCounter>
            {currentIndex + 1} / {images.length}
          </ImageCounter>
        )}
      </Box>
    </StyledDialog>
  )
}

export default memo(ImageLightbox)
