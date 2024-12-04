import UHStack from '@/common/components/atoms/UHStack'
import UIconButton from '@/common/components/atoms/UIconButton'
import { Party as PartyEnum } from '@/common/enums/Party'
import { styled, USTWTheme } from '@/common/lib/mui/theme'
import { Stack, Typography, useTheme } from '@mui/material'
import Image from 'next/image'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward'
import { PersonIcon } from '@/common/styles/assets/Icons'
import CloseIcon from '@mui/icons-material/Close'
import {
  PeoplePartyChangeRecord,
  PeopleUtils,
} from '@/modules/People/domains/People.utils'
import UContentCard from '@/common/components/atoms/UContentCard'
import useModal from '@/common/hooks/useModal'
import UContentCardDialog from '@/common/components/atoms/UContentCardDialog'

/**
 * 政黨行
 * @param partyExperience 政黨經歷
 * @returns 政黨行
 */
const PartyRow = function PartyRow({
  record,
}: {
  record: PeoplePartyChangeRecord
}) {
  const theme = useTheme<USTWTheme>()

  return (
    <Stack
      className="party-row"
      sx={{
        padding: theme.spacing(2, 1),
        '&:not(:last-child)': {
          borderBottom: `1px solid ${theme.color.grey[1900]}`,
        },
        marginTop: theme.spacing(2),
      }}
    >
      <Typography variant="bodyM" fontWeight={700}>
        {record.newParty}
      </Typography>
      <Typography
        variant="bodyS"
        sx={{ color: theme.color.neutral[500] }}
        fontWeight={400}
      >
        {record.changedAt?.format(PeopleUtils.TimeFormat)}
      </Typography>
    </Stack>
  )
}

const StyledPartyLogo = styled(Image)(() => ({
  width: '50px',
  height: '50px',
}))

const StyledArrowOutwardIcon = styled(ArrowOutwardIcon)(({ theme }) => ({
  color: theme.color.grey[400],
}))

const getPartyLogo = (party: PartyEnum) => {
  // TODO: Independent logo 待補
  if (party === PartyEnum.INDEPENDENT) return null
  return `/assets/party-logo/${party}.png`
}

interface PartyProps {
  party?: PartyEnum
  changeRecords?: Array<PeoplePartyChangeRecord>
}

const Party = function ({
  party = PartyEnum.INDEPENDENT,
  changeRecords = [],
}: PartyProps) {
  const theme = useTheme<USTWTheme>()
  const partyLogo = getPartyLogo(party)
  const { isModalOpen, handleOpenModal, handleCloseModal } = useModal()

  const handleButtonClick = () => {
    handleOpenModal()
  }

  return (
    <UContentCard>
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
          onClick={handleButtonClick}
        >
          <StyledArrowOutwardIcon />
        </UIconButton>
        <UContentCardDialog open={isModalOpen} onClose={handleCloseModal}>
          <UContentCard
            withHeader
            headerProps={{
              title: 'political party',
              icon: <PersonIcon />,
              iconColor: 'primary',
              action: (
                <UIconButton
                  variant="rounded"
                  color="inherit"
                  size="small"
                  onClick={handleCloseModal}
                >
                  <CloseIcon sx={{ color: theme.color.neutral[500] }} />
                </UIconButton>
              ),
            }}
            sx={{
              padding: 0,
              border: 'none',
              borderRadius: 0,
            }}
          >
            {changeRecords.map((record, index) => (
              <PartyRow key={index} record={record} />
            ))}
          </UContentCard>
        </UContentCardDialog>
      </UHStack>
    </UContentCard>
  )
}

export default Party
