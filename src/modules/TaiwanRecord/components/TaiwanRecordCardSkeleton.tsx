'use client'

import UAccordion from '@/common/components/atoms/UAccordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import { ExpandMoreIcon } from '@/common/styles/assets/Icons'
import { Skeleton, Stack, Box, useTheme } from '@mui/material'
import { USTWTheme } from '@/common/lib/mui/theme'
import { memo } from 'react'
import { useResponsive } from '@/common/lib/responsive/ResponsiveProvider'

const TaiwanRecordCardSkeleton = memo(function TaiwanRecordCardSkeleton() {
  const { isMobile } = useResponsive()
  const theme = useTheme<USTWTheme>()

  return (
    <UAccordion defaultExpanded>
      <AccordionSummary expandIcon={<ExpandMoreIcon width={24} height={24} />}>
        <Stack gap={theme.spacing(1.5)} width="100%">
          {/* Title skeleton */}
          <Skeleton variant="text" width="60%" height={32} />
        </Stack>
      </AccordionSummary>
      <AccordionDetails>
        <Stack gap={theme.spacing(1.5)}>
          {/* Content skeleton */}
          <Box>
            <Skeleton variant="text" width="100%" />
            <Skeleton variant="text" width="100%" />
            <Skeleton variant="text" width="80%" />
          </Box>

          {/* Images skeleton */}
          <Stack direction="row" gap={theme.spacing(1)}>
            {(isMobile ? [1] : [1, 2, 3, 4]).map((index) => (
              <Skeleton
                key={index}
                variant="rectangular"
                width={285}
                height={285}
                sx={{
                  borderRadius: 1,
                  flex: 1,
                }}
              />
            ))}
          </Stack>

          {/* Date and sources skeleton */}
          <Stack gap={theme.spacing(0.5)}>
            <Skeleton variant="text" width="40%" height={20} />
            <Skeleton variant="text" width="50%" height={20} />
          </Stack>
        </Stack>
      </AccordionDetails>
    </UAccordion>
  )
})

export default TaiwanRecordCardSkeleton
