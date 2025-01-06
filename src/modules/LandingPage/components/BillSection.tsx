'use client'

import Container from '@mui/material/Container'
import { Stack } from '@mui/material'
import { SectionTitleWithLink } from '@/common/components/elements/Landing/SectionTitle'
import IndexBillCardList from '@/modules/Bill/components/IndexBillCard/IndexBillCardList'
import { ROUTES } from '@/routes'
import { FEATURED_BILLS } from '@/modules/Bill/data'

const BillSection = () => {
  return (
    <Container maxWidth="lg">
      <Stack py={10} gap={7.5}>
        <SectionTitleWithLink title="Bills" link={ROUTES.BILL} />
        <IndexBillCardList billData={FEATURED_BILLS} />
      </Stack>
    </Container>
  )
}

export default BillSection
