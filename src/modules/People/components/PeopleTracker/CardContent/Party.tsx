import UHStack from '@/common/components/atoms/UHStack'
import UIconButton from '@/common/components/atoms/UIconButton'
import { Party as PartyEnum } from '@/common/enums/Party'
import { styled, USTWTheme } from '@/common/lib/mui/theme'
import { Stack, Typography, useTheme } from '@mui/material'
import Image from 'next/image'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward'
import { useMemo } from 'react'
import { PersonIcon } from '@/common/styles/assets/Icons'
import CloseIcon from '@mui/icons-material/Close'
import { PartyExperience, People } from '@/modules/People/classes/People'
import UContentCard from '@/common/components/atoms/UContentCard'
import useModal from '@/common/hooks/useModal'
import UContentCardDialog from '@/common/components/atoms/UContentCardDialog'

/**
 * 計算經歷的時間
 * @param experience 經歷
 * @returns 時間文字
 */
const usePartyExperienceTime = function (experience: PartyExperience) {
  // TODO: i18n
  const timeText = useMemo(() => {
    if (!experience.start) return ''

    // 現在進行中
    if (!experience.end) {
      return `${experience.start?.format(People.TimeFormat)} ~ Present`
    } else {
      return `${experience.start?.format(People.TimeFormat)} ~ ${experience.end?.format(People.TimeFormat)}`
    }
  }, [experience])

  return { timeText }
}

/**
 * 政黨行
 * @param partyExperience 政黨經歷
 * @returns 政黨行
 */
const PartyRow = function PartyRow({
  partyExperience,
}: {
  partyExperience: PartyExperience
}) {
  const theme = useTheme<USTWTheme>()
  const { timeText } = usePartyExperienceTime(partyExperience)

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
        {partyExperience.party}
      </Typography>
      <Typography
        variant="bodyS"
        sx={{ color: theme.color.neutral[500] }}
        fontWeight={400}
      >
        {timeText}
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
  if (party === PartyEnum.OTHER) return null
  return `/assets/party-logo/${party}.png`
}

interface PartyProps {
  party: PartyEnum
  partyExperiences?: Array<PartyExperience>
}

const Party = function ({ party, partyExperiences = [] }: PartyProps) {
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
            {partyExperiences.map((partyExperience, index) => (
              <PartyRow key={index} partyExperience={partyExperience} />
            ))}
          </UContentCard>
        </UContentCardDialog>
      </UHStack>
    </UContentCard>
  )
}

export default Party
