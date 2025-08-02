'use client'

import { Box, Grid2, Stack, Typography } from '@mui/material'
import { Footprint } from '@/modules/About/Footprint/business/Footprint'
import useTranslationClient from '@/common/lib/i18n/hooks/useTranslationClient'
import { useEffect, useState } from 'react'
import { DateUtils } from '@/modules/Common/business/Date'

const DATE_FORMAT = 'MMM DD, YYYY' // Mar 13, 2024

type FootprintCardProps = {
  footprint: Footprint
}

export default function FootprintCard({ footprint }: FootprintCardProps) {
  const { t } = useTranslationClient('about_footprint')
  const [releaseDate, setReleaseDate] = useState('')
  useEffect(() => {
    setReleaseDate(DateUtils.formatLocal(footprint.releaseDate, DATE_FORMAT))
  }, [footprint])

  return (
    <Stack
      gap={{
        xs: 1,
        sm: 1.5,
      }}
      p={{
        xs: 2,
        lg: 3.75,
      }}
      sx={{
        borderRadius: '15px',
        backgroundColor: 'background.paper',
      }}
    >
      <Grid2
        container
        spacing={{
          xs: 1,
          sm: 3,
          lg: 5,
        }}
        alignItems="flex-start"
      >
        <Grid2
          size={{
            xs: 12,
            sm: 2.5,
          }}
          display="flex"
        >
          <Box
            px={0.75}
            py={0.25}
            borderRadius="30px"
            sx={{
              backgroundColor: 'secondary.main',
            }}
          >
            <Typography fontSize="0.875rem" fontWeight={600}>
              {t(`type.${footprint.type}.label`, { ns: 'about_footprint' })}
            </Typography>
          </Box>
        </Grid2>
        <Grid2
          size={{
            xs: 12,
            sm: 9.5,
          }}
        >
          <Typography fontSize="1.25rem" fontWeight={600}>
            {footprint.title}
          </Typography>
        </Grid2>
      </Grid2>
      <Grid2
        container
        spacing={{
          xs: 1,
          sm: 3,
          lg: 5,
        }}
        alignItems="flex-start"
      >
        <Grid2
          size={{
            xs: 12,
            sm: 2.5,
          }}
        >
          <Typography
            fontSize="0.75rem"
            fontWeight={600}
            sx={{
              color: 'neutral.500',
            }}
          >
            {releaseDate}
          </Typography>
        </Grid2>
        <Grid2
          size={{
            xs: 12,
            sm: 9.5,
          }}
        >
          <Typography>{footprint.source}</Typography>
        </Grid2>
      </Grid2>
    </Stack>
  )
}
