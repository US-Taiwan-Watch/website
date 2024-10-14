'use client'

import UIconButton from '@/common/components/atoms/UIconButton'
import { USTWTheme } from '@/common/lib/mui/theme'
import { BookmarkIcon, OutlinedShareIcon } from '@/common/styles/assets/Icons'
import { Box, Stack, useTheme } from '@mui/material'

const OpinionFixed = () => {
  const theme = useTheme<USTWTheme>()

  return (
    <Box
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
          // hard code 因為要吃掉 container 的 padding，使他與 header 對齊
          right: theme.spacing(-3),
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
    </Box>
  )
}

export default OpinionFixed
