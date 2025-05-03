import { Stack } from '@mui/material'
import { SectionTitleWithLink } from '@/common/components/elements/Landing/SectionTitle'
import IndexBillCardList from '@/modules/Bill/components/IndexBillCard/IndexBillCardList'
import UContainer from '@/common/components/atoms/UContainer'
import ServerBillApi from '@/modules/Bill/api/ServerBillApi'
import getURouterServer from '@/common/lib/router/getURouterServer'
import { RouteName } from '@/common/lib/router/routes'

/**
 * 首頁法案區塊呈現數量
 */
const BILL_SECTION_LIMIT = 10

type BillSectionProps = {
  title: string
}

export default async function BillSection({ title }: BillSectionProps) {
  const { resolveRouteUrl } = getURouterServer()
  const featuredBills = await ServerBillApi.getHomeFeaturedBills({
    limit: BILL_SECTION_LIMIT,
  })

  return (
    <UContainer>
      <Stack
        py={{
          xs: 4,
          sm: 10,
        }}
        gap={{
          xs: 4,
          sm: 7.5,
        }}
      >
        <SectionTitleWithLink
          title={title}
          link={resolveRouteUrl({ name: RouteName.Bill })}
        />
        <IndexBillCardList billData={featuredBills} />
      </Stack>
    </UContainer>
  )
}
