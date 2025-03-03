import Stack from '@mui/material/Stack'
import BillInfoSection from '@/modules/Bill/components/SingleBill/BillInfoSection'
import BillListSection from '@/modules/Bill/components/SingleBill/BillListSection'
import BillContentSection from '@/modules/Bill/components/SingleBill/BillContentSection'
import { Language } from '@/common/lib/i18n/types'
import { notFound } from 'next/navigation'
import BillApi from '@/modules/Bill/api/BillApi'

interface BillPageProps {
  params: {
    lang: Language
    id: string
  }
}

export default async function Bill({ params }: BillPageProps) {
  const bill = await BillApi.getBill({ id: params.id })

  if (!bill) return notFound()

  const relatedBills = await BillApi.getRelatedBills({ id: params.id })

  return (
    <Stack gap={6}>
      <BillInfoSection bill={bill} />
      <BillContentSection bill={bill} />
      <BillListSection relatedBills={relatedBills} />
    </Stack>
  )
}
