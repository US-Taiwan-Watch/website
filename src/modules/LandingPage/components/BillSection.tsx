'use client'

import { BILL_DATA_MOCK } from '@/modules/Bill/data'
import { Stack } from '@mui/material'
import SectionTitleWithLink from '@/common/components/elements/Landing/SectionTitleWithLink'
import IndexBillCardList from '@/modules/Bill/components/IndexBillCard/IndexBillCardList'
import { ROUTES } from '@/routes'

const BillSection = () => {
  return (
    <Stack py={10} gap={7.5}>
      <SectionTitleWithLink title="Bills" link={ROUTES.BILL} />
      <IndexBillCardList billData={BILL_DATA_MOCK} />
    </Stack>
  )
}

export default BillSection
