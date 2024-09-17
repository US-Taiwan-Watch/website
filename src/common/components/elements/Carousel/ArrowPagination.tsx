import clsx from 'clsx'
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined'
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined'
import UIconButton from '@/common/components/atoms/UIconButton'
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
    backgroundColor: theme.color.neutral[500],
    width: '12px',
    height: '12px',
  },
}))

const ArrowPagination = (props: PaginationProps) => {
  return (
    <StyledPaginationContainer
      direction="row"
      alignItems="center"
      justifyContent="center"
    >
      <UIconButton
        className="carousel-slider-prev"
        variant="rounded"
        color="default"
        size="small"
        onClick={props.handlePrev}
      >
        <ArrowBackIosOutlinedIcon />
      </UIconButton>
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
      <UIconButton
        className="carousel-slider-next"
        variant="rounded"
        color="default"
        size="small"
        onClick={props.handleNext}
      >
        <ArrowForwardIosOutlinedIcon />
      </UIconButton>
    </StyledPaginationContainer>
  )
}

export default ArrowPagination
