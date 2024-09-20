import { styled } from '@/common/lib/mui/theme'
import { Stack, Typography } from '@mui/material'

const StyledOpinionPostTagContainer = styled(Stack)(({ theme }) => ({
  padding: theme.spacing(0.5, 1),
  borderRadius: theme.spacing(1),
  border: `1px solid ${theme.color.grey[1400]}`,
}))

const StyledHashTag = styled(Typography)(({ theme }) => ({
  fontWeight: 500,
  color: theme.color.neutral[500],
}))

const StyledOpinionPostTagText = styled(Typography)(({ theme }) => ({
  fontWeight: 500,
  color: theme.color.common.black,
}))

interface OpinionPostTagProps {
  value: string
}

const OpinionPostTag = function OpinionPostTag({ value }: OpinionPostTagProps) {
  return (
    <StyledOpinionPostTagContainer
      direction="row"
      spacing={0.5}
      alignItems="center"
      justifyContent="center"
    >
      <StyledHashTag variant="buttonXXS" fontWeight={500}>
        {'#'}
      </StyledHashTag>
      <StyledOpinionPostTagText variant="buttonXXS" fontWeight={500}>
        {value}
      </StyledOpinionPostTagText>
    </StyledOpinionPostTagContainer>
  )
}

export default OpinionPostTag
