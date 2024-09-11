import clsx from 'clsx'
import { styled } from '@/common/lib/mui/theme'
import { People } from '@/modules/People/classes/People'
import { Box } from '@mui/material'

const StyledPeopleTagContainer = styled(Box)(({ theme }) => ({
  width: 'fit-content',
  padding: theme.spacing(0.5, 1),
  borderRadius: theme.spacing(1),
  '&.HOUSE_REPRESENTATIVE': {
    backgroundColor: theme.color.wheat[300], // TODO: 確定黨派顏色
  },
  '&.SENATOR': {
    backgroundColor: theme.color.green[100], // TODO: 確定黨派顏色
  },
  '&.EXPERT': {
    backgroundColor: theme.color.wheat[100], // TODO: 確定黨派顏色
  },
  '&.OFFICIAL': {
    backgroundColor: theme.color.purple[100], // TODO: 確定黨派顏色
  },
  '&.OTHER': {
    backgroundColor: theme.color.neutral[300], // TODO: 確定黨派顏色
  },
  fontWeight: 500,
  textTransform: 'capitalize',
}))

interface PeopleTagProps {
  people: People;
}

const PeopleLabel = function PeopleTag ({ people }: PeopleTagProps) {
  return (
    <StyledPeopleTagContainer className={clsx('', {
      ...(people.position && {
        [people.position.replace(' ', '_')]: true,
      }),
    })}>
      {people.position?.toLowerCase()}
    </StyledPeopleTagContainer>
  )
}

export default PeopleLabel
