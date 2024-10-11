import { USTWTheme } from '@/common/lib/mui/theme'
import { Box, Stack, StackProps, Typography, useTheme } from '@mui/material'
import Image from 'next/image'

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

  return (
    <Stack spacing={2} {...props}>
      <Box
        style={{ position: 'relative', width: '100%', paddingBottom: '56.25%' }}
      >
        <Image
          src={image}
          alt={caption ?? ''}
          layout="fill"
          objectFit="cover"
        />
      </Box>
      {caption && (
        <Typography variant="bodyS" sx={{ color: theme.color.grey[3500] }}>
          {caption}
        </Typography>
      )}
    </Stack>
  )
}

export default ContentImage
