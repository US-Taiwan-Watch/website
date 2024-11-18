'use client'

import UIconButton from '@/common/components/atoms/UIconButton'
import { USTWTheme } from '@/common/lib/mui/theme'
import { BookmarkIcon, OutlinedShareIcon } from '@/common/styles/assets/Icons'
import { useTheme } from '@mui/material'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'

const OpinionFixed = () => {
  const theme = useTheme<USTWTheme>()

  return (
    <Container
      maxWidth="lg"
      sx={{
        position: 'sticky',
        top: 300,
        width: '100%',
        zIndex: 1000,
      }}
    >
      <Stack
        spacing={1}
        padding={1.5}
        sx={{
          position: 'absolute',
          top: 0,
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

export default OpinionFixed
