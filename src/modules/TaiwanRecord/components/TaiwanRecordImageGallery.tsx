'use client'

import {
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Box,
  Typography,
} from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { styled, USTWTheme } from '@/common/lib/mui/theme'
import Image from 'next/image'
import { memo, useCallback, useState } from 'react'
import CloseIcon from '@mui/icons-material/Close'
import TaiwanRecordImageLightbox, {
  TaiwanRecordImage,
} from '@/modules/TaiwanRecord/components/TaiwanRecordImageLightbox'
import ZoomInIcon from '@mui/icons-material/ZoomIn'

const StyledDialog = styled(Dialog)(({ theme }: { theme: USTWTheme }) => ({
  '& .MuiBackdrop-root': {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    backdropFilter: 'blur(8px)',
  },
  '& .MuiDialog-paper': {
    borderRadius: theme.shape.borderRadius * 2,
    maxWidth: '900px',
    width: '90vw',
    maxHeight: '85vh',
  },
}))

const StyledDialogTitle = styled(DialogTitle)(
  ({ theme }: { theme: USTWTheme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: theme.spacing(2.5, 3),
    borderBottom: `1px solid ${theme.color.grey[1100]}`,
  })
)

const CloseButton = styled(IconButton)(({ theme }: { theme: USTWTheme }) => ({
  color: theme.color.grey[3700],
  transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
  '&:hover': {
    backgroundColor: theme.color.grey[1100],
    color: theme.color.common.black,
    transform: 'rotate(90deg)',
  },
}))

const ImageGrid = styled(Box)(({ theme }: { theme: USTWTheme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gap: theme.spacing(2.5),
  padding: theme.spacing(0.5),
  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: theme.spacing(2),
  },
  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: theme.spacing(1.5),
  },
}))

const ImageThumbnail = styled(Box)(({ theme }: { theme: USTWTheme }) => ({
  position: 'relative',
  width: '100%',
  aspectRatio: '1 / 1',
  borderRadius: theme.shape.borderRadius,
  overflow: 'hidden',
  cursor: 'pointer',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  border: `2px solid transparent`,
  animation: 'fadeInUp 0.4s cubic-bezier(0.4, 0, 0.2, 1) backwards',
  '@keyframes fadeInUp': {
    from: {
      opacity: 0,
      transform: 'translateY(12px)',
    },
    to: {
      opacity: 1,
      transform: 'translateY(0)',
    },
  },
  '&:hover': {
    transform: 'scale(1.02) translateY(-2px)',
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
    borderColor: theme.color.purple[100],
    '& .thumbnail-overlay': {
      opacity: 1,
    },
  },
  // Staggered animation delay for grid items
  '&:nth-of-type(1)': { animationDelay: '0ms' },
  '&:nth-of-type(2)': { animationDelay: '50ms' },
  '&:nth-of-type(3)': { animationDelay: '100ms' },
  '&:nth-of-type(4)': { animationDelay: '150ms' },
  '&:nth-of-type(5)': { animationDelay: '200ms' },
  '&:nth-of-type(6)': { animationDelay: '250ms' },
  '&:nth-of-type(7)': { animationDelay: '300ms' },
  '&:nth-of-type(8)': { animationDelay: '350ms' },
  '&:nth-of-type(n+9)': { animationDelay: '400ms' },
}))

const ThumbnailOverlay = styled(Box)(() => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(255, 255, 255, 0.15)',
  backdropFilter: 'blur(2px)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  opacity: 0,
  transition: 'opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
}))

interface TaiwanRecordImageGalleryProps {
  open: boolean
  images: TaiwanRecordImage[]
  onClose: () => void
  title?: string
}

const TaiwanRecordImageGallery = ({
  open,
  images,
  onClose,
  title,
}: TaiwanRecordImageGalleryProps) => {
  const theme = useTheme<USTWTheme>()
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const handleThumbnailClick = useCallback((index: number) => {
    setCurrentImageIndex(index)
    setIsLightboxOpen(true)
  }, [])

  const handleLightboxClose = useCallback(() => {
    setIsLightboxOpen(false)
  }, [])

  const handleLightboxNavigate = useCallback((index: number) => {
    setCurrentImageIndex(index)
  }, [])

  return (
    <>
      <StyledDialog open={open} onClose={onClose} maxWidth={false}>
        <StyledDialogTitle>
          <Typography variant="subtitleL" sx={{ fontWeight: 600 }}>
            {title}
          </Typography>
          <CloseButton onClick={onClose} aria-label="Close gallery">
            <CloseIcon />
          </CloseButton>
        </StyledDialogTitle>

        <DialogContent sx={{ padding: theme.spacing(3), overflowY: 'auto' }}>
          {images.length > 0 && (
            <ImageGrid>
              {images.map((image, index) => (
                <ImageThumbnail
                  key={`${image.url}-${index}`}
                  onClick={() => handleThumbnailClick(index)}
                  role="button"
                  tabIndex={0}
                  aria-label={`View image ${index + 1} of ${images.length}`}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault()
                      handleThumbnailClick(index)
                    }
                  }}
                >
                  <Image
                    src={image.url}
                    alt={image.alt || `Image ${index + 1}`}
                    fill
                    sizes="(max-width: 600px) 50vw, (max-width: 900px) 33vw, 25vw"
                    style={{
                      objectFit: 'cover',
                    }}
                  />
                  <ThumbnailOverlay
                    className="thumbnail-overlay"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <ZoomInIcon />
                  </ThumbnailOverlay>
                </ImageThumbnail>
              ))}
            </ImageGrid>
          )}
        </DialogContent>
      </StyledDialog>

      {/* Lightbox for full-size viewing */}
      <TaiwanRecordImageLightbox
        open={isLightboxOpen}
        images={images}
        currentIndex={currentImageIndex}
        onClose={handleLightboxClose}
        onNavigate={handleLightboxNavigate}
      />
    </>
  )
}

export default memo(TaiwanRecordImageGallery)
