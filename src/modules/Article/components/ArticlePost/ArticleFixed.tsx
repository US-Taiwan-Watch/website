'use client'

import UIconButton from '@/common/components/atoms/UIconButton'
import { USTWTheme } from '@/common/lib/mui/theme'
import { useResponsive } from '@/common/lib/responsive/ResponsiveProvider'
import { BookmarkIcon, OutlinedShareIcon } from '@/common/styles/assets/Icons'
import { useTheme } from '@mui/material'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'

const ArticleFixed = () => {
  const { isMobile } = useResponsive()
  const theme = useTheme<USTWTheme>()

  if (isMobile) return null

  return (
    <Container
      maxWidth="lg"
      sx={{
        position: 'sticky',
        top: {
          xs: 250,
          lg: 450,
        },
        bottom: 0,
        width: '100%',
        zIndex: 1000,
      }}
    >
      <Stack
        spacing={1}
        padding={1.5}
        sx={{
          position: 'absolute',
          bottom: 0,
          right: theme.spacing(3),
          backgroundColor: 'white',
          borderRadius: '30px',
        }}
      >
        <UIconButton variant="rounded" color="black">
          <BookmarkIcon />
        </UIconButton>
        <UIconButton variant="rounded" color="black">
          <OutlinedShareIcon />
        </UIconButton>
      </Stack>
    </Container>
  )
}

export default ArticleFixed
