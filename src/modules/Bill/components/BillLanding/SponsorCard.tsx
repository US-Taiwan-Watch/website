'use client'

import { SponsorIcon } from '@/common/styles/assets/Icons'
import { Stack, Typography, useTheme } from '@mui/material'
import { styled, USTWTheme } from '@/common/lib/mui/theme'
import UContentCard from '@/common/components/atoms/UContentCard'
import UHStack from '@/common/components/atoms/UHStack'
import { BILL_SPONSOR_MOCK } from '@/modules/Bill/data'
import { People } from '@/modules/People/classes/People'
import CircleIcon from '@mui/icons-material/Circle'
import { Party } from '@/common/enums/Party'
import usePartyColor from '@/common/lib/Party/usePartyColor'
import UCardInfo from '@/common/components/atoms/UCardInfo'

const StyledSponsorRowContainer = styled(UHStack)(({ theme }) => ({
  padding: theme.spacing(1.5, 3, 1.5, 2),
  borderRadius: '15px',
  backgroundColor: theme.color.grey[100],
  justifyContent: 'space-between',
  alignItems: 'center',
}))

type SponsorRowProps = {
  sponsor: People
}

function SponsorRow({ sponsor }: SponsorRowProps) {
  const theme = useTheme<USTWTheme>()
  const { partyColor } = usePartyColor()

  return (
    <StyledSponsorRowContainer>
      <Stack>
        <Typography variant="articleH5">{sponsor.name}</Typography>
        <UHStack gap="6px" alignItems="center">
          <CircleIcon
            sx={{
              color: partyColor[sponsor.party ?? Party.OTHER],
              fontSize: '8px',
            }}
          />
          <Typography
            variant="buttonXXS"
            color={theme.color.neutral[500]}
            textTransform="capitalize"
          >
            {sponsor.party?.toLowerCase()}
          </Typography>
        </UHStack>
      </Stack>
      <Typography variant="h6">2</Typography>
    </StyledSponsorRowContainer>
  )
}

type SponsorCardProps = {
  isCosponsor?: boolean
}

export default function SponsorCard({ isCosponsor }: SponsorCardProps) {
  return (
    <UContentCard
      withHeader
      headerProps={{
        title: isCosponsor ? 'Top 5 Cosponsor' : 'Top 5 Sponsor',
        icon: <SponsorIcon />,
        iconColor: 'primary',
        action: (
          <UCardInfo
            content={isCosponsor ? 'Top 5 Cosponsor' : 'Top 5 Sponsor'}
          />
        ),
        sx: { borderBottom: 0 },
      }}
    >
      <Stack spacing={1} pt={2}>
        {BILL_SPONSOR_MOCK.map((sponsor, index) => (
          <SponsorRow key={index} sponsor={sponsor} />
        ))}
      </Stack>
    </UContentCard>
  )
}
