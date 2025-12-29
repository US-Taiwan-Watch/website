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
import { People } from '@/modules/People/business/People'
import useTranslationClient from '@/common/lib/i18n/hooks/useTranslationClient'
import useURouterClient from '@/common/lib/router/useURouterClient'
import { RouteName } from '@/common/lib/router/routes'

type SponsorRowData = {
  people: People
  billCount: number
}

const StyledSponsorRowContainer = styled(UHStack)(({ theme }) => ({
  padding: theme.spacing(1.5, 3, 1.5, 2),
  borderRadius: '15px',
  backgroundColor: theme.color.grey[100],
  justifyContent: 'space-between',
  alignItems: 'center',
}))

type SponsorRowProps = {
  data: SponsorRowData
}

function SponsorRow({ data: { people, billCount } }: SponsorRowProps) {
  const { t } = useTranslationClient('common')
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
            {t(`party.${people.party?.toLowerCase()}`, { ns: 'common' })}
          </Typography>
        </UHStack>
      </Stack>
      <Typography variant="h6">{billCount}</Typography>
    </StyledSponsorRowContainer>
  )
}

type SponsorCardProps = {
  sponsorsData: Array<SponsorRowData>
  isCosponsor?: boolean
}

export default function SponsorCard({
  sponsorsData,
  isCosponsor,
}: SponsorCardProps) {
  const { t } = useTranslationClient('bill')
  const { resolveRouteUrl } = useURouterClient()

  return (
    <UContentCard
      withHeader
      headerProps={{
        headerIconAction: 'tooltip',
        title: isCosponsor
          ? t('landing.card.topCosponsors.title', { ns: 'bill' })
          : t('landing.card.topSponsors.title', { ns: 'bill' }),
        icon: <SponsorIcon />,
        iconColor: 'primary',
        sx: { borderBottom: 0 },
      }}
      tooltipProps={{
        content: isCosponsor
          ? t('landing.card.topCosponsors.tooltip', { ns: 'bill' })
          : t('landing.card.topSponsors.tooltip', { ns: 'bill' }),
      }}
    >
      <Stack spacing={1} pt={2}>
        {sponsorsData.map(({ people, billCount }, index) => (
          <Link
            key={index}
            href={resolveRouteUrl({
              name: RouteName.BillList,
              query: {
                ...(isCosponsor
                  ? { cosponsor: people.id ?? null }
                  : { sponsor: people.id ?? null }),
              },
            })}
          >
            <SponsorRow data={{ people, billCount }} />
          </Link>
        ))}
      </Stack>
    </UContentCard>
  )
}
