import type { MetadataRoute } from 'next'
import ServerBillApi from '@/modules/Bill/api/ServerBillApi'
import getURouterServer from '@/common/lib/router/getURouterServer'
import { RouteName } from '@/common/lib/router/routes'
import { generatePageLinks } from '@/common/utils/sitemap.utils'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { resolveRouteUrl } = getURouterServer()
  const bills = (await ServerBillApi.getBillIds()) ?? []

  return [
    ...generatePageLinks(resolveRouteUrl({ name: RouteName.Bill })),
    ...generatePageLinks(resolveRouteUrl({ name: RouteName.BillList })),
    ...bills.flatMap((bill) =>
      generatePageLinks(
        resolveRouteUrl({
          name: RouteName.BillDetail,
          params: {
            billId: bill.id,
          },
        }),
        bill.updatedAt
      )
    ),
  ]
}
