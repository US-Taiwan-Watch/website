import type { MetadataRoute } from 'next'
import ServerBillApi from '@/modules/Bill/api/ServerBillApi'
import getURouterServer from '@/common/lib/router/getURouterServer'
import { RouteName } from '@/common/lib/router/routes'
import { generatePageLinks } from '@/common/utils/sitemap.utils'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { resolveRouteUrl } = getURouterServer()
  const billIds = (await ServerBillApi.getBillIds()) ?? []

  return [
    ...generatePageLinks(resolveRouteUrl({ name: RouteName.Bill })),
    ...generatePageLinks(resolveRouteUrl({ name: RouteName.BillList })),
    ...billIds
      .map((billId) =>
        resolveRouteUrl({
          name: RouteName.BillDetail,
          params: {
            billId,
          },
        })
      )
      .flatMap((page) => generatePageLinks(page)),
  ]
}
