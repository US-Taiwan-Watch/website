import clsx from 'clsx'
import { styled } from '@/common/lib/mui/theme'
import { Stack } from '@mui/material'
import { PaginationProps } from '@/common/components/elements/Carousel'

const StyledPaginationContainer = styled(Stack)(({ theme }) => ({
  marginTop: theme.spacing(2),
  '& .carousel-slider-prev': {
    backgroundColor: theme.color.neutral[500],
    color: theme.color.common.white,
  },
  '& .carousel-slider-next': {
    backgroundColor: theme.color.neutral[500],
    color: theme.color.common.white,
  },
}))

const StyledPaginationDotContainer = styled(Stack)(({ theme }) => ({
  margin: `0px ${theme.spacing(2)}`,
}))

const StyledPaginationDot = styled('div')(({ theme }) => ({
  width: '8px',
  height: '8px',
  borderRadius: '50%',
  backgroundColor: theme.color.grey[1200],
  '&:hover': {
    cursor: 'pointer',
  },
  '&.slick-active': {
    borderRadius: '100px',
    width: '45px',
    height: '8px',
  },
}))

const DotPagination = (props: PaginationProps) => {
  return (
    <StyledPaginationContainer
      direction="row"
      alignItems="center"
      justifyContent="center"
    >
      <StyledPaginationDotContainer
        direction="row"
        alignItems="center"
        justifyContent="center"
        spacing={1}
      >
        {Array.from({ length: props.slideCount }).map((_, index) => (
          <StyledPaginationDot
            key={index}
            onClick={() => props.handleDotClick?.(index)}
            className={clsx({
              'slick-active': index === props.currentSlide,
            })}
          />
        ))}
      </StyledPaginationDotContainer>
    </StyledPaginationContainer>
  )
}

export default DotPagination
