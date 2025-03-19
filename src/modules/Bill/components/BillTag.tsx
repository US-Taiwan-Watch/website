import UWidthLimitedText from '@/common/components/atoms/UWidthLimitedText'
import { styled } from '@/common/lib/mui/theme'
import { Stack, Typography } from '@mui/material'

const StyledPeopleTagContainer = styled(Stack)(({ theme }) => ({
  padding: theme.spacing(0, 1),
  borderRadius: theme.spacing(1),
  backgroundColor: theme.color.grey[100],
  border: `1px solid ${theme.color.grey[1400]}`,
}))

const StyledHashTag = styled(Typography)(({ theme }) => ({
  fontWeight: 500,
  color: theme.color.neutral[500],
}))

const StyledPeopleTagText = styled(UWidthLimitedText)(({ theme }) => ({
  fontWeight: 500,
  color: theme.color.common.black,
}))

interface BillTagProps {
  value: string
}

const BillTag = function BillTag({ value }: BillTagProps) {
  return (
    <StyledPeopleTagContainer
      direction="row"
      spacing={0.5}
      alignItems="center"
      justifyContent="center"
      className="category-tag"
    >
      <StyledHashTag>#</StyledHashTag>
      <StyledPeopleTagText>{value}</StyledPeopleTagText>
    </StyledPeopleTagContainer>
  )
}

export default BillTag
