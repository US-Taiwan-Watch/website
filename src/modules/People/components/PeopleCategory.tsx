import clsx from 'clsx'
import { styled } from '@/common/lib/mui/theme'
import { Box, Typography } from '@mui/material'
import UHStack from '@/common/components/atoms/UHStack'
import { People } from '@/modules/People/business/People'

const StyledPeopleTagContainer = styled(Box)(({ theme }) => ({
  width: 'fit-content',
  padding: theme.spacing(0.5, 1),
  borderRadius: theme.spacing(1),
  '&.House_Representative': {
    backgroundColor: theme.color.green[100],
  },
  '&.Senator': {
    backgroundColor: theme.color.wheat[100],
  },
  '&.Expert': {
    backgroundColor: theme.color.orange[100],
  },
  '&.Official': {
    backgroundColor: theme.color.purple[100],
  },
  '&.Other': {
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
    <UHStack spacing={1} flexWrap="wrap">
      {people.positions?.map((position) => (
        <StyledPeopleTagContainer
          key={position}
          className={clsx({
            [position.replace(' ', '_')]: true,
          })}
        >
          <Typography variant="bodyS" fontWeight={500}>
            {position.toLowerCase()}
          </Typography>
        </StyledPeopleTagContainer>
      ))}
    </UHStack>
  )
}

export default PeopleCategory
