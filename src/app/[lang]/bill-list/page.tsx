import BillList from '@/modules/Bill/components/BillList'
import { Metadata } from 'next'
import getURouterServer from '@/common/lib/router/getURouterServer'
import { generateCommonMetadata } from '@/common/utils/metadata'
import { RouteName } from '@/common/lib/router/routes'
import { Language } from '@/common/lib/i18n/types'

type BillListPageProps = {
  params: {
    lang: Language
  }
}

export const generateMetadata = async ({
  params,
}: BillListPageProps): Promise<Metadata> => {
  const { resolveRouteUrl } = getURouterServer()
  return generateCommonMetadata({
    lang: params.lang,
    pathname: resolveRouteUrl({ name: RouteName.BillList }),
    namespace: 'seo_bill_list',
  })
}

export default function BillListPage() {
  return <BillList />
}
