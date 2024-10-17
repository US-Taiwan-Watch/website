import clsx from 'clsx'
import { styled } from '@/common/lib/mui/theme'
import { People } from '@/modules/People/classes/People'
import { Box } from '@mui/material'

const StyledPeopleTagContainer = styled(Box)(({ theme }) => ({
  width: 'fit-content',
  padding: theme.spacing(0.5, 1),
  borderRadius: theme.spacing(1),
  '&.HOUSE_REPRESENTATIVE': {
    backgroundColor: theme.color.green[100],
  },
  '&.SENATOR': {
    backgroundColor: theme.color.wheat[100],
  },
  '&.EXPERT': {
    backgroundColor: theme.color.orange[100],
  },
  '&.OFFICIAL': {
    backgroundColor: theme.color.purple[100],
  },
  '&.OTHER': {
    backgroundColor: theme.color.neutral[300],
  },
  fontWeight: 500,
  textTransform: 'capitalize',
}))

interface PeopleCategoryProps {
  people: People
}

const PeopleCategory = function PeopleCategory({
  people,
}: PeopleCategoryProps) {
  return (
    <StyledPeopleTagContainer
      className={clsx('', {
        ...(people.position && {
          [people.position.replace(' ', '_')]: true,
        }),
      })}
    >
      {people.position?.toLowerCase()}
    </StyledPeopleTagContainer>
  )
}

export default PeopleCategory
