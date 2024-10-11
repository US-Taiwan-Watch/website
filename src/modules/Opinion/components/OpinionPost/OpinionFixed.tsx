import UIconButton from '@/common/components/atoms/UIconButton'
import { BookmarkIcon, OutlinedShareIcon } from '@/common/styles/assets/Icons'
import { Box, Stack } from '@mui/material'

const OpinionFixed = () => {
  return (
    <Box
      sx={{
        position: 'sticky',
        top: 245,
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
          right: 0,
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
