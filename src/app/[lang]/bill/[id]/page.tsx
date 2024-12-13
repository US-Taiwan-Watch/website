'use client' // for importing mock data

import Stack from '@mui/material/Stack'
import BillInfoSection from '@/modules/Bill/components/SingleBill/BillInfoSection'
import BillListSection from '@/modules/Bill/components/SingleBill/BillListSection'
import BillContentSection from '@/modules/Bill/components/SingleBill/BillContentSection'
import { Language } from '@/common/lib/i18n/types'
import { findBill } from '@/modules/Bill/data'
import { notFound } from 'next/navigation'
import { Bill as BillClass } from '@/modules/Bill/classes/Bill'
interface BillPageProps {
  params: {
    lang: Language
    id: string
  }
}

export default function Bill({ params }: BillPageProps) {
  const dto = findBill(params.id)
  if (!dto) return notFound()
  const bill = BillClass.fromDTO(params.lang, dto)

  return (
    <Stack gap={6}>
      <BillInfoSection bill={bill} />
      <BillContentSection bill={bill} />
      <BillListSection
        relatedBills={BillClass.getRelatedBills(dto, params.lang)}
      />
    </Stack>
  )
}
