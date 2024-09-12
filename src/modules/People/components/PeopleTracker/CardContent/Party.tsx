import UHStack from '@/common/components/atoms/UHStack'
import UIconButton from '@/common/components/atoms/UIconButton'
import { Party as PartyEnum } from '@/common/enums/Party'
import { styled } from '@/common/lib/mui/theme'
import { Typography, useTheme } from '@mui/material'
import Image from 'next/image'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward'

const StyledPartyLogo = styled(Image)(() => ({
  width: '50px',
  height: '50px',
}))

const StyledArrowOutwardIcon = styled(ArrowOutwardIcon)(({ theme }) => ({
  color: theme.color.grey[400],
}))

const getPartyLogo = (party: PartyEnum) => {
  if (party === PartyEnum.OTHER) return null
  return `/assets/party-logo/${party}.png`
}

interface PartyProps {
  party: PartyEnum
  onModalOpen?: () => void
}

const Party = function ({ party, onModalOpen }: PartyProps) {
  const theme = useTheme()
  const partyLogo = getPartyLogo(party)

  return (
    <UHStack
      alignItems="center"
      justifyContent="center"
      width="100%"
      spacing={2}
      padding={theme.spacing(2)}
    >
      {partyLogo && (
        <StyledPartyLogo src={partyLogo} alt={party} width={50} height={50} />
      )}
      <Typography variant="subtitleL" textTransform="capitalize" flex={1}>
        {party.toLowerCase()}
      </Typography>
      <UIconButton
        variant="rounded"
        size="small"
        color="inherit"
        onClick={onModalOpen}
      >
        <StyledArrowOutwardIcon />
      </UIconButton>
    </UHStack>
  )
}

export default Party
