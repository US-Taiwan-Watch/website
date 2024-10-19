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

const StyledPeopleTagText = styled(Typography)(({ theme }) => ({
  fontWeight: 500,
  color: theme.color.common.black,
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
}))

interface PeopleTagProps {
  value: string
}

const PeopleTag = function PeopleTag({ value }: PeopleTagProps) {
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

export default PeopleTag
