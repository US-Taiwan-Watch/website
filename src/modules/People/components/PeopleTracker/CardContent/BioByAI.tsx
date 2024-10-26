import UContentCard from '@/common/components/atoms/UContentCard'
import { StarsIcon } from '@/common/styles/assets/Icons'
import { Typography } from '@mui/material'

interface BioByAIProps {
  bioByAI?: string
}

const BioByAI = function ({ bioByAI }: BioByAIProps) {
  return (
    <UContentCard
      headerIconAction="modal"
      withHeader
      headerProps={{
        title: 'Bio by AI',
        icon: <StarsIcon />,
        iconColor: 'primary',
      }}
      overflowHidden
      modalContent={<Typography component="p">{bioByAI}</Typography>}
    >
      <Typography component="p">{bioByAI}</Typography>
    </UContentCard>
  )
}

export default BioByAI
