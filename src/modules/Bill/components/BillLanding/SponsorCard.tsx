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
import { useMemo } from 'react'
import { CongressUtils } from '@/common/business/Congress'
import { People, PeopleUtils } from '@/modules/People/business/People'
import { useQuery } from '@apollo/client'
import {
  QUERY_BILL_TOP_COSPONSORS,
  QUERY_BILL_TOP_SPONSORS,
} from '@/modules/Bill/graphql/gql'
import {
  BillTopCosponsorsQuery,
  BillTopCosponsorsQueryVariables,
  BillTopSponsorsQuery,
  BillTopSponsorsQueryVariables,
} from '@/common/lib/graphql/__generated__/graphql'
import { isNull, isUndefined } from 'lodash-es'

const TOP_SPONSORS_LIMIT = 5
const TOP_COSPONSORS_LIMIT = 5

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
    () => CongressUtils.getCurrentCongressNumber(),
    []
  )
  const { lang } = useParams<{ lang: Language }>()

  const { data: sponsorsData } = useQuery<
    BillTopSponsorsQuery,
    BillTopSponsorsQueryVariables
  >(QUERY_BILL_TOP_SPONSORS, {
    variables: { limit: TOP_SPONSORS_LIMIT },
  })

  const { data: cosponsorsData } = useQuery<
    BillTopCosponsorsQuery,
    BillTopCosponsorsQueryVariables
  >(QUERY_BILL_TOP_COSPONSORS, {
    variables: { limit: TOP_COSPONSORS_LIMIT },
  })

  const sponsorsList = useMemo(() => {
    if (isCosponsor) {
      return (
        cosponsorsData?.BillTopCosponsors?.filter((doc) => !isNull(doc))
          ?.filter(
            (cosponsor) =>
              !isNull(cosponsor?.people) && !isUndefined(cosponsor?.people)
          )
          ?.map(({ people, billCount }) => ({
            people: PeopleUtils.parse(lang, people!),
            billCount: billCount ?? 0,
          })) ?? []
      )
    }
    return (
      sponsorsData?.BillTopSponsors?.filter((doc) => !isNull(doc))
        ?.filter(
          (sponsor) => !isNull(sponsor?.people) && !isUndefined(sponsor?.people)
        )
        .map(({ people, billCount }) => ({
          people: PeopleUtils.parse(lang, people!),
          billCount: billCount ?? 0,
        })) ?? []
    )
  }, [lang, isCosponsor, cosponsorsData, sponsorsData])

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
