import Stack from '@mui/material/Stack'
import BillInfoSection from '@/modules/Bill/components/SingleBill/BillInfoSection'
import BillListSection from '@/modules/Bill/components/SingleBill/BillListSection'
import BillContentSection from '@/modules/Bill/components/SingleBill/BillContentSection'
import { Language } from '@/common/lib/i18n/types'
import { notFound } from 'next/navigation'
import ServerBillApi from '@/modules/Bill/api/ServerBillApi'
import { Metadata } from 'next'
import getURouterServer from '@/common/lib/router/getURouterServer'
import { generateCommonMetadata } from '@/common/utils/metadata'
import { RouteName } from '@/common/lib/router/routes'
import { I18N_SUPPORTED_LANGUAGE } from '@/common/lib/i18n/settings'

interface BillPageProps {
  params: {
    lang: Language
    id: string
  }
}

export const generateMetadata = async ({
  params,
}: BillPageProps): Promise<Metadata> => {
  const { resolveRouteUrl } = getURouterServer()
  const bill = await ServerBillApi.getBill(params.lang, { id: params.id })
  const billTitle = bill?.title ?? ''
  const billDescription = bill?.summary

  return {
    ...(await generateCommonMetadata({
      lang: params.lang,
      pathname: resolveRouteUrl({
        name: RouteName.BillDetail,
        params: { billId: params.id },
      }),
      namespace: 'seo_bill_detail',
      titleVariables: {
        billTitle,
      },
      descriptionVariables: {
        billTitle,
      },
    })),
    ...(billDescription && { description: billDescription }),
  }
}

export const generateStaticParams = async () => {
  const ids = await ServerBillApi.getBillIds()
  return I18N_SUPPORTED_LANGUAGE.flatMap((lang) =>
    ids.map((id) => ({
      lang,
      id: id.id,
    }))
  )
}

export default async function Bill({ params }: BillPageProps) {
  const [bill, relatedBills] = await Promise.all([
    ServerBillApi.getBill(params.lang, { id: params.id }),
    ServerBillApi.getRelatedBills(params.lang, {
      id: params.id,
    }),
  ])

  if (!bill) return notFound()

  return (
    <Stack
      gap={{
        xs: 4,
        sm: 6,
      }}
    >
      <BillInfoSection bill={bill} />
      <BillContentSection bill={bill} />
      <BillListSection relatedBills={relatedBills} />
    </Stack>
  )
}
