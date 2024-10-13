'use client'

import UButton from '@/common/components/atoms/UButton'
import UContentCard from '@/common/components/atoms/UContentCard'
import { StarsIcon } from '@/common/styles/assets/Icons'
import { Typography, useTheme } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { USTWTheme } from '@/common/lib/mui/theme'

export default function BioByAI() {
  const theme = useTheme<USTWTheme>()

  return (
    <UContentCard
      withHeader
      headerProps={{
        title: 'Summary From AI',
        icon: <StarsIcon />,
        iconColor: 'primary',
        action: (
          // TODO: link to the bill
          <a
            href="https://www.congress.gov/bill/118th-congress/house-bill/8281/all-actions"
            target="_blank"
            rel="noopener noreferrer"
          >
            <UButton
              endIcon={
                <ArrowForwardIcon sx={{ color: theme.color.neutral[500] }} />
              }
              color="info"
              variant="outlined"
              size="small"
              sx={{
                py: 0.5,
                px: 1,
                borderRadius: '9px',
                border: `1.5px solid ${theme.color.grey[1400]}`,
              }}
            >
              <Typography variant="buttonXS">Full Text</Typography>
            </UButton>
          </a>
        ),
      }}
    >
      <Typography variant="body" pt={2}>
        Senator Pete Ricketts, a Republican, is the junior senator from
        Nebraska, appointed on January 23, 2023. He is up for reelection in
        2024. Ricketts strongly advocates for Taiwan’s security. He co-sponsored
        the BOLSTER Act to facilitate U.S.-made defense equipment transfers from
        European NATO countries to Taiwan and promote coordinated sanctions
        against China. He supports strengthening economic and political ties
        between Taiwan, the U.S., and Europe, focusing on Taiwan’s integration
        into international organizations and economic resilience, especially in
        semiconductors. Ricketts also emphasizes humanitarian aid for Taiwan and
        counters Chinese propaganda to support Taiwan’s democracy.
      </Typography>
    </UContentCard>
  )
}
