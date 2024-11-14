'use client'

import { BILL_DATA_MOCK } from '@/modules/Bill/data'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import SectionTitleWithLink from '@/common/components/elements/Landing/SectionTitleWithLink'
import IndexBillCardList from '@/modules/Bill/components/IndexBillCard/IndexBillCardList'
import { ROUTES } from '@/routes'

const BillSection = () => {
  return (
    <Container maxWidth="lg">
      <Stack py={10} gap={7.5}>
        <SectionTitleWithLink title="Bills" link={ROUTES.BILL} />
        <IndexBillCardList billData={BILL_DATA_MOCK} />
      </Stack>
    </Container>
  )
}

export default BillSection
