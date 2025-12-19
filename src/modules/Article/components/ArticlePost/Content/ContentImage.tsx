import { USTWTheme } from '@/common/lib/mui/theme'
import { Box, Stack, StackProps, Typography, useTheme } from '@mui/material'
import Image from 'next/image'
import { useState } from 'react'

interface ContentImageProps extends StackProps {
  image: string
  caption?: string
}

const ContentImage = function ContentImage({
  image,
  caption,
  ...props
}: ContentImageProps) {
  const theme = useTheme<USTWTheme>()
  const [imageError, setImageError] = useState(false)

  if (imageError || !image) {
    return (
      <Stack spacing={2} {...props}>
        <Box
          sx={{
            background: '#f0f0f0',
            paddingBottom: '56.25%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            width: '100%',
          }}
        >
          <Typography
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              color: '#666',
            }}
          >
            Image unavailable
          </Typography>
        </Box>
        {caption && (
          <Typography
            variant="bodyS"
            sx={{ color: theme.color.article.postContentImageCaption }}
          >
            {caption}
          </Typography>
        )}
      </Stack>
    )
  }

  return (
    <Stack spacing={2} {...props}>
      <Box
        style={{ position: 'relative', width: '100%', paddingBottom: '56.25%' }}
      >
        <Image
          src={image}
          alt={caption ?? ''}
          fill
          style={{ objectFit: 'cover' }}
          onError={() => setImageError(true)}
        />
      </Box>
      {caption && (
        <Typography
          variant="bodyS"
          sx={{ color: theme.color.article.postContentImageCaption }}
        >
          {caption}
        </Typography>
      )}
    </Stack>
  )
}

export default ContentImage
