'use client'

import { PeopleJoinIcon } from '@/common/styles/assets/Icons'
import NumberCard from '@/modules/People/components/PeopleTracker/CardContent/NumberCard'
import BillCard from '@/modules/Bill/components/BillCard'
import { Box } from '@mui/material'
import { People } from '@/modules/People/business/People'
import { useParams } from 'next/navigation'
import { Language } from '@/common/lib/i18n/types'
import { useQuery } from '@apollo/client/react'
import {
  PeopleCosponsorBillsQuery,
  PeopleCosponsorBillsQueryVariables,
} from '@/common/lib/graphql/__generated__/graphql'
import { QUERY_PEOPLE_COSPONSOR_BILLS } from '@/modules/People/graphql/gql'
import { isNull } from 'lodash-es'
import { BillUtils } from '@/modules/Bill/business/Bill'
import useTranslationClient from '@/common/lib/i18n/hooks/useTranslationClient'

interface CoSponsoredProps {
  people: People
}

const CoSponsored = function ({ people }: CoSponsoredProps) {
  const { lang } = useParams<{ lang: Language }>()
  const { t } = useTranslationClient(['people'])

  const { data } = useQuery<
    PeopleCosponsorBillsQuery,
    PeopleCosponsorBillsQueryVariables
  >(QUERY_PEOPLE_COSPONSOR_BILLS, {
    variables: {
      id: people.id ?? '',
    },
  })

  const cosponsorBills =
    data?.People?.cosponsorBills
      ?.filter((bill) => !isNull(bill))
      .map((bill) => BillUtils.parse(lang, bill)) ?? []

  return (
    <NumberCard
      title={t('page.card.coSponsored.title', { ns: 'people' })}
      number={cosponsorBills.length}
      headerProps={{
        title: t('page.card.coSponsored.title', { ns: 'people' }),
        icon: <PeopleJoinIcon />,
        iconColor: 'primary',
      }}
    >
      {cosponsorBills.map((bill, index) => (
        <Box key={index}>
          <BillCard mode="horizontal" bill={bill} />
        </Box>
      ))}
    </NumberCard>
  )
}

export default CoSponsored
