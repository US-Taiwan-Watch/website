'use client'

import UFullWidthBackgroundBox from '@/common/components/atoms/UFullWidthBackgroundBox'
import Carousel from '@/common/components/elements/Carousel'
import { Bill } from '@/modules/Bill/classes/Bill'
import IndexBillCard from '@/modules/Bill/components/IndexBillCard'
import { Container } from '@mui/material'
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
      <Container>
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
      </Container>
    </StyledUFullWidthBackgroundBox>
  )
}
