import clsx from 'clsx'
import { styled } from '@/common/lib/mui/theme'
import { People } from '@/modules/People/classes/People'
import { Box } from '@mui/material'

const StyledPeopleTagContainer = styled(Box)(({ theme }) => ({
  width: 'fit-content',
  padding: theme.spacing(0.5, 1),
  borderRadius: theme.spacing(1),
  '&.DEMOCRAT': {
    backgroundColor: theme.color.indigo[50], // TODO: 確定黨派顏色
  },
  '&.REPUBLICAN': {
    backgroundColor: theme.color.tyrian[50], // TODO: 確定黨派顏色
  },
  '&.OTHER': {
    backgroundColor: theme.color.neutral[300], // TODO: 確定黨派顏色
  },
  fontWeight: 500,
}))

interface PeopleTagProps {
  people: People;
}

const PeopleLabel = function PeopleTag ({ people }: PeopleTagProps) {
  return (
    <StyledPeopleTagContainer className={clsx('', {
      ...(people.party && {
        [people.party]: true,
      }),
    })}>
      {people.positionLabel}
    </StyledPeopleTagContainer>
  )
}

export default PeopleLabel
