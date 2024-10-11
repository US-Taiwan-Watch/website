import UContentCard from '@/common/components/atoms/UContentCard'
import { StarsIcon } from '@/common/styles/assets/Icons'
import { Typography } from '@mui/material'

const BioByAI = function BioByAI() {
  return (
    <UContentCard
      headerIconAction="modal"
      withHeader
      headerProps={{
        title: 'Bio by AI',
        icon: <StarsIcon />,
        iconColor: 'primary',
      }}
    >
      <Typography component="p">
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

export default BioByAI
