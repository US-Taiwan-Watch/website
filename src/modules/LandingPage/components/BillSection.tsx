import Container from '@mui/material/Container'
import { Stack } from '@mui/material'
import { SectionTitleWithLink } from '@/common/components/elements/Landing/SectionTitle'
import IndexBillCardList from '@/modules/Bill/components/IndexBillCard/IndexBillCardList'
import { ROUTES } from '@/routes'
import { Language } from '@/common/lib/i18n/types'
import { query } from '@/common/lib/graphql/ServerApolloClient'
import {
  BillsQuery,
  BillsQueryVariables,
} from '@/common/lib/graphql/__generated__/graphql'
import { QUERY_BILLS } from '@/modules/Bill/graphql/gql'
import { isNull } from 'lodash-es'
import { BillUtils } from '@/modules/Bill/business/Bill'

interface BillSectionProps {
  lang: Language
}

export default async function BillSection({ lang }: BillSectionProps) {
  const { data } = await query<BillsQuery, BillsQueryVariables>({
    query: QUERY_BILLS,
    variables: {
      where: {
        isFeatured: {
          equals: true,
        },
      },
    },
  })

  const featuredBills =
    data?.Bills?.docs
      ?.filter((bill) => !isNull(bill))
      .map((bill) => BillUtils.parse(lang, bill)) ?? []

  return (
    <Container maxWidth="lg">
      <Stack py={10} gap={7.5}>
        <SectionTitleWithLink title="Bills" link={ROUTES.BILL} />
        <IndexBillCardList billData={featuredBills} />
      </Stack>
    </Container>
  )
}
