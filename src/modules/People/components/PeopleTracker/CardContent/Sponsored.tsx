'use client'

import NumberCard from '@/modules/People/components/PeopleTracker/CardContent/NumberCard'
import BillCard from '@/modules/Bill/components/BillCard'
import { Person2Icon } from '@/common/styles/assets/Icons'
import { Box } from '@mui/material'
import { People } from '@/modules/People/business/People'
import { useParams } from 'next/navigation'
import { Language } from '@/common/lib/i18n/types'
import {
  PeopleSponsorBillsQuery,
  PeopleSponsorBillsQueryVariables,
} from '@/common/lib/graphql/__generated__/graphql'
import { useQuery } from '@apollo/client'
import { QUERY_PEOPLE_SPONSOR_BILLS } from '@/modules/People/graphql/gql'
import { isNull } from 'lodash-es'
import { BillUtils } from '@/modules/Bill/business/Bill'
import useTranslationClient from '@/common/lib/i18n/hooks/useTranslationClient'

interface SponsoredProps {
  people: People
}

const Sponsored = function ({ people }: SponsoredProps) {
  const { t } = useTranslationClient(['people'])
  const { lang } = useParams<{ lang: Language }>()

  const { data } = useQuery<
    PeopleSponsorBillsQuery,
    PeopleSponsorBillsQueryVariables
  >(QUERY_PEOPLE_SPONSOR_BILLS, {
    variables: {
      id: people.id ?? '',
    },
  })

  const sponsorBills =
    data?.People?.sponsorBills
      ?.filter((bill) => !isNull(bill))
      .map((bill) => BillUtils.parse(lang, bill)) ?? []

  return (
    <NumberCard
      title={t('page.card.sponsored.title', { ns: 'people' })}
      number={sponsorBills.length}
      headerProps={{
        title: t('page.card.sponsored.title', { ns: 'people' }),
        icon: <Person2Icon />,
        iconColor: 'primary',
      }}
    >
      {sponsorBills.map((bill, index) => (
        <Box
          key={index}
          sx={{
            marginLeft: '8px',
            marginRight: '8px',
          }}
        >
          <BillCard mode="horizontal" bill={bill} />
        </Box>
      ))}
    </NumberCard>
  )
}

export default Sponsored
