'use client'

import { SponsorIcon } from '@/common/styles/assets/Icons'
import { Stack, Typography, useTheme } from '@mui/material'
import { styled, USTWTheme } from '@/common/lib/mui/theme'
import UContentCard from '@/common/components/atoms/UContentCard'
import UHStack from '@/common/components/atoms/UHStack'
import CircleIcon from '@mui/icons-material/Circle'
import { Party } from '@/common/enums/Party'
import usePartyColor from '@/common/lib/Party/usePartyColor'
import Link from 'next/link'
import { ROUTES } from '@/routes'
import { useParams } from 'next/navigation'
import { Language } from '@/common/lib/i18n/types'
import {
  BillTopSponsorsData,
  getBillTopCosponsors,
  getBillTopSponsors,
} from '@/modules/Bill/data'
import { Congress } from '@/common/classes/Congress'
import { useMemo } from 'react'

const StyledSponsorRowContainer = styled(UHStack)(({ theme }) => ({
  padding: theme.spacing(1.5, 3, 1.5, 2),
  borderRadius: '15px',
  backgroundColor: theme.color.grey[100],
  justifyContent: 'space-between',
  alignItems: 'center',
}))

type SponsorRowProps = {
  data: BillTopSponsorsData
}

function SponsorRow({ data: { people, billCount } }: SponsorRowProps) {
  const theme = useTheme<USTWTheme>()
  const { partyColor } = usePartyColor()

  return (
    <StyledSponsorRowContainer>
      <Stack>
        <Typography variant="articleH5">{people.name}</Typography>
        <UHStack gap="6px" alignItems="center">
          <CircleIcon
            sx={{
              color: partyColor[people.party ?? Party.INDEPENDENT],
              fontSize: '8px',
            }}
          />
          <Typography
            variant="buttonXXS"
            color={theme.color.neutral[500]}
            textTransform="capitalize"
          >
            {people.party?.toLowerCase()}
          </Typography>
        </UHStack>
      </Stack>
      <Typography variant="h6">{billCount}</Typography>
    </StyledSponsorRowContainer>
  )
}

type SponsorCardProps = {
  isCosponsor?: boolean
}

export default function SponsorCard({ isCosponsor }: SponsorCardProps) {
  const currentCongressNumber = useMemo(
    () => Congress.getCurrentCongressNumber(),
    []
  )
  const { lang } = useParams<{ lang: Language }>()
  const sponsorsList = isCosponsor
    ? getBillTopCosponsors(lang)
    : getBillTopSponsors(lang)

  return (
    <UContentCard
      headerIconAction="tooltip"
      withHeader
      headerProps={{
        title: isCosponsor ? 'Top 5 Cosponsor' : 'Top 5 Sponsor',
        icon: <SponsorIcon />,
        iconColor: 'primary',
        sx: { borderBottom: 0 },
      }}
      tooltipProps={{
        content: isCosponsor ? 'Top 5 Cosponsor' : 'Top 5 Sponsor',
      }}
    >
      <Stack spacing={1} pt={2}>
        {sponsorsList.map(({ people, billCount }, index) => (
          <Link
            key={index}
            href={{
              pathname: ROUTES.BILL_LIST,
              query: {
                congress: currentCongressNumber,
                ...(isCosponsor
                  ? { cosponsor: people.id }
                  : { sponsor: people.id }),
              },
            }}
          >
            <SponsorRow data={{ people, billCount }} />
          </Link>
        ))}
      </Stack>
    </UContentCard>
  )
}
