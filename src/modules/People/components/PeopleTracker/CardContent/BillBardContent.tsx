import { Bill } from '@/modules/Bill/business/Bill'
import { useResponsive } from '@/common/lib/responsive/ResponsiveProvider'
import IndexBillCard from '@/modules/Bill/components/IndexBillCard'
import BillCard from '@/modules/Bill/components/BillCard'
import { memo } from 'react'

type BillCardContentProps = {
  bill: Bill
}

const BillCardContent = function BillCardContent({
  bill,
}: BillCardContentProps) {
  const { isMobile } = useResponsive()

  if (isMobile) return <IndexBillCard timelineVariant="secondary" bill={bill} />

  return <BillCard mode="horizontal" bill={bill} />
}

export default memo(BillCardContent)
