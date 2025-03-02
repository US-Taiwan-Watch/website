'use client'

import UContainer from '@/common/components/atoms/UContainer'
import UFullWidthBackgroundBox from '@/common/components/atoms/UFullWidthBackgroundBox'
import Carousel from '@/common/components/elements/Carousel'
import { Bill } from '@/modules/Bill/business/Bill'
import IndexBillCard from '@/modules/Bill/components/IndexBillCard'
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
        <Carousel
          centerMode
          settings={{
            slidesToShow: 1,
            infinite: false,
            centerPadding: '0px',
          }}
        >
          {billData.map((bill) => (
            <IndexBillCard key={bill.id} bill={bill} />
          ))}
        </Carousel>
      </UContainer>
    </StyledUFullWidthBackgroundBox>
  )
}
