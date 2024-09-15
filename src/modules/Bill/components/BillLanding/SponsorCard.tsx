'use client'

import UCardHeader from '@/common/components/atoms/UCardHeader'
import { SponsorIcon } from '@/common/styles/assets/Icons'
import { CardContent, Stack, Typography, useTheme } from '@mui/material'
import UIconButton from '@/common/components/atoms/UIconButton'
import { styled, USTWTheme } from '@/common/lib/mui/theme'
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined'
import { UContentCardWithHeader } from '@/common/components/atoms/UContentCard'
import UHStack from '@/common/components/atoms/UHStack'
import { BILL_SPONSOR_MOCK } from '@/modules/Bill/components/data'
import { People } from '@/modules/People/classes/People'
import CircleIcon from '@mui/icons-material/Circle'
import { Party } from '@/common/enums/Party'
import usePartyColor from '@/common/lib/Party/usePartyColor'

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
  const theme = useTheme<USTWTheme>()

  return (
    <UContentCardWithHeader>
      <UCardHeader
        title={isCosponsor ? 'Top 5 Cosponsor' : 'Top 5 Sponsor'}
        icon={<SponsorIcon />}
        iconColor="primary"
        action={
          <UIconButton variant="rounded" color="inherit" size="small">
            <ErrorOutlineOutlinedIcon sx={{ color: theme.color.grey[1800] }} />
          </UIconButton>
        }
        sx={{ borderBottom: 0 }}
      />
      <CardContent sx={{ padding: 0 }}>
        <Stack spacing={1}>
          {BILL_SPONSOR_MOCK.map((sponsor, index) => (
            <SponsorRow key={index} sponsor={sponsor} />
          ))}
        </Stack>
      </CardContent>
    </UContentCardWithHeader>
  )
}
