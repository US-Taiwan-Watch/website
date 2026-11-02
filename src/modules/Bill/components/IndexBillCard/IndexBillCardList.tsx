'use client'

import UContainer from '@/common/components/atoms/UContainer'
import UFullWidthBackgroundBox from '@/common/components/atoms/UFullWidthBackgroundBox'
import { Bill } from '@/modules/Bill/business/Bill'
import IndexBillCard from '@/modules/Bill/components/IndexBillCard'
import ClientCarousel from '@/modules/Bill/components/IndexBillCard/ClientCarousel'
import { styled } from '@mui/material/styles'

const StyledUFullWidthBackgroundBox = styled(UFullWidthBackgroundBox)(() => ({
  overflow: 'hidden',
  '& .slick-list': {
    overflow: 'visible',
  },
  '& .slick-slide:not(.slick-current)': {
    opacity: 0.5,
    scale: '0.9',
  },
}))

type IndexBillCardListProps = {
  billData: Bill[]
}

export default function IndexBillCardList({
  billData,
}: IndexBillCardListProps) {
  return (
    <StyledUFullWidthBackgroundBox>
      <UContainer>
        <ClientCarousel>
          {billData.map((bill) => (
            <IndexBillCard key={bill.id} bill={bill} />
          ))}
        </ClientCarousel>
      </UContainer>
    </StyledUFullWidthBackgroundBox>
  )
}
