import clsx from 'clsx'
import { styled } from '@/common/lib/mui/theme'
import { People } from '@/modules/People/classes/People'
import { Box } from '@mui/material'

const StyledPeopleTagContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  borderRadius: theme.spacing(1),
  '&.DEMOCRAT': {
    backgroundColor: theme.color.indigo[50],
  },
  '&.REPUBLICAN': {
    backgroundColor: theme.color.tyrian[50],
  },
  '&.OTHER': {
    backgroundColor: theme.color.neutral[300],
  },
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
      {people.position}
    </StyledPeopleTagContainer>
  )
}

export default PeopleLabel
