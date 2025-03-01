import Stack from '@mui/material/Stack'
import BillInfoSection from '@/modules/Bill/components/SingleBill/BillInfoSection'
import BillListSection from '@/modules/Bill/components/SingleBill/BillListSection'
import BillContentSection from '@/modules/Bill/components/SingleBill/BillContentSection'
import { Language } from '@/common/lib/i18n/types'
import {
  BillQuery,
  BillQueryVariables,
} from '@/common/lib/graphql/__generated__/graphql'
import { QUERY_BILL } from '@/modules/Bill/graphql/gql'
import { notFound } from 'next/navigation'
import { BillUtils } from '@/modules/Bill/business/Bill'
import { isNull } from 'lodash-es'
import { query } from '@/common/lib/graphql/ServerApolloClient'

interface BillPageProps {
  params: {
    lang: Language
    id: string
  }
}

export default async function Bill({ params }: BillPageProps) {
  const { data } = await query<BillQuery, BillQueryVariables>({
    query: QUERY_BILL,
    variables: { id: params.id },
  })

  if (!data?.Bill) return notFound()

  const bill = BillUtils.parse(params.lang, data.Bill)
  const relatedBills =
    data.Bill.relatedBills
      ?.filter((bill) => !isNull(bill))
      .map((bill) => BillUtils.parse(params.lang, bill)) ?? []

  return (
    <Stack gap={6}>
      <BillInfoSection bill={bill} />
      <BillContentSection bill={bill} />
      <BillListSection relatedBills={relatedBills} />
    </Stack>
  )
}
