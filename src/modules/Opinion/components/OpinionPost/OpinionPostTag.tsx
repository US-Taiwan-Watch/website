import { styled } from '@/common/lib/mui/theme'
import { OpinionTag } from '@/modules/Opinion/classes/Opinion'
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
  tag: OpinionTag
}

const OpinionPostTag = function OpinionPostTag({ tag }: OpinionPostTagProps) {
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
        {tag.label}
      </StyledOpinionPostTagText>
    </StyledOpinionPostTagContainer>
  )
}

export default OpinionPostTag
