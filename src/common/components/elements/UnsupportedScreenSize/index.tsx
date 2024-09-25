'use client'

import { Box, Typography } from '@mui/material'
import { useEffect } from 'react'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'

export default function UnsupportedScreenSize() {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [])

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      bottom={0}
      zIndex={9999}
      bgcolor="#fff"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      overflow="hidden"
    >
      <InfoOutlinedIcon
        color="info"
        sx={{ width: '50px', height: '50px', marginBottom: 3 }}
      />
      <Typography
        variant="h5"
        textAlign="center"
        sx={{ marginBottom: 5, whiteSpace: 'pre-line', px: 2 }}
      >
        {`The system may not function properly on small screens.\nPlease adjust your screen settings for the best experience.`}
      </Typography>
    </Box>
  )
}
