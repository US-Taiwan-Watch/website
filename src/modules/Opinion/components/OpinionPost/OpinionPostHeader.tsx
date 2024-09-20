'use client'

import UButton from '@/common/components/atoms/UButton'
import UHStack from '@/common/components/atoms/UHStack'
import { USTWTheme } from '@/common/lib/mui/theme'
import OpinionPostTag from '@/modules/Opinion/components/OpinionPost/OpinionPostTag'
import { Stack, Typography, useTheme } from '@mui/material'

// TODO: 定義介面

const OpinionPostHeader = function OpinionPostHeader() {
  const theme = useTheme<USTWTheme>()

  return (
    <Stack spacing={3}>
      {/** Categories */}
      <UHStack gap={2}>
        <UButton
          variant="outlined"
          size="small"
          sx={{
            padding: theme.spacing(0.5, 1),
            minWidth: 'fit-content',
            borderColor: theme.color.orange[900],
            color: theme.color.orange[900],
          }}
        >
          {'軍事'}
        </UButton>
      </UHStack>

      {/** Title */}
      <Typography
        component="h1"
        variant="h3"
        fontWeight={500}
        sx={{ color: theme.color.grey[3100] }}
      >
        {'國家級警報：中共發射衛星火箭'}
      </Typography>

      {/** Subtitle */}
      <Typography
        variant="subtitleL"
        sx={{ color: theme.color.grey[3200] }}
        fontWeight={400}
      >
        {'國家級警報：中共發射衛星火箭飛越「南台灣」'}
      </Typography>

      <Stack spacing={2}>
        {/** Date */}
        <Typography
          variant="bodyS"
          sx={{ color: theme.color.grey[3300] }}
          fontWeight={500}
        >
          {'Release time: 2024-04-02   |   By Sam / Tom '}
        </Typography>
        {/** Tags */}
        <UHStack gap={1}>
          <OpinionPostTag value={'軍事'} />
          <OpinionPostTag value={'軍事'} />
          <OpinionPostTag value={'軍事'} />
        </UHStack>
      </Stack>

      {/** Repost source from */}
      <Stack spacing={1}>
        <Typography
          variant="bodyS"
          fontWeight={500}
          sx={{ color: theme.color.grey[3400] }}
        >
          {'Repost source from'}
        </Typography>

        {/** Links */}
        <a href="https://www.google.com">
          <Typography
            variant="bodyS"
            fontWeight={400}
            sx={{ color: theme.color.orange[900], textDecoration: 'underline' }}
          >
            {
              'CNN NEWS - The entire town is burning.’ Fires rage as Rohingya caught up on the front lines of Myanmar’s civil war'
            }
          </Typography>
        </a>
        <a href="https://www.google.com">
          <Typography
            variant="bodyS"
            fontWeight={400}
            sx={{ color: theme.color.orange[900], textDecoration: 'underline' }}
          >
            {
              'CNN NEWS - The entire town is burning.’ Fires rage as Rohingya caught up on the front lines of Myanmar’s civil war'
            }
          </Typography>
        </a>
      </Stack>
    </Stack>
  )
}

export default OpinionPostHeader
