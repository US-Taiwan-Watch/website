import { Language } from '@/common/lib/i18n/types'
import ServerBillApi from '@/modules/Bill/api/ServerBillApi'
import BillListSection from '@/modules/Bill/components/BillLanding/BillListSection'
import BillStatisticsSection from '@/modules/Bill/components/BillLanding/BillStatisticsSection'
import Stack from '@mui/material/Stack'
import { Metadata } from 'next'
import getURouterServer from '@/common/lib/router/getURouterServer'
import { generateCommonMetadata } from '@/common/utils/metadata'
import { RouteName } from '@/common/lib/router/routes'

/**
 * 最新法案數量
 */
const LATEST_BILLS_COUNT = 5

/**
 * 熱門法案數量
 */
const POPULAR_BILLS_COUNT = 5

type BillPageProps = {
  params: {
    lang: Language
  }
}

export const generateMetadata = async ({
  params,
}: BillPageProps): Promise<Metadata> => {
  const { resolveRouteUrl } = getURouterServer()
  return generateCommonMetadata({
    lang: params.lang,
    pathname: resolveRouteUrl({ name: RouteName.Bill }),
    namespace: 'seo_bill',
  })
}

export default async function Bill({ params }: BillPageProps) {
  const { lang } = params
  const latestBills = await ServerBillApi.getLatestBills({
    limit: LATEST_BILLS_COUNT,
  })
  const popularBills = await ServerBillApi.getPopularBills({
    limit: POPULAR_BILLS_COUNT,
  })

  return (
    <Stack
      gap={{
        xs: 5,
        sm: 10,
      }}
    >
      <BillStatisticsSection lang={lang} />
      <BillListSection latestBills={latestBills} popularBills={popularBills} />
    </Stack>
  )
}
