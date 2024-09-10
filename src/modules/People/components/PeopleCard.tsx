import { People } from '@/modules/People/classes/People'
import { memo } from 'react'
import { styled } from '@/common/lib/mui/theme'
import { Grid, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import PeopleLabel from '@/modules/People/components/PeopleLabel'
import PeopleCongressTitle from '@/modules/People/components/PeopleCongressTitle'
import PeopleTag from '@/modules/People/components/PeopleTag'

const StyledPeopleCardContainer = styled(Stack)(({ theme }) => ({
  width: '100%',
  padding: theme.spacing(2),
  borderRadius: '15px',
  backgroundColor: theme.color.common.white,
}))

const StyledPeopleCardImage = styled(Image)(() => ({
  height: '100%',
  borderRadius: '15px',
  objectFit: 'cover',
}))

const StyledPeopleCardDescription = styled(Typography)(({ theme }) => ({
  fontWeight: 400,
  color: theme.color.grey[1500],
  display: '-webkit-box',
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
}))

interface PeopleCardProps {
  people: People;
}

const PeopleCard = memo(function PeopleCard ({ people }: PeopleCardProps) {
  return (
    <StyledPeopleCardContainer direction="row" spacing={2}>
      {people.image && (
        <StyledPeopleCardImage
          src={people.image}
          alt={people.name || ''}
          width={160}
          height={200}
        />
      )}
      <Grid container direction="row" spacing={2} flex={1}>
        <Grid item xs={10}>
          <Stack direction="column" spacing={2}>
            <PeopleLabel people={people} />
            <Typography variant="h6">{people.name}</Typography>
            {people.congress && (
              <PeopleCongressTitle congress={people.congress} />
            )}
            <StyledPeopleCardDescription>
              {people.description}
            </StyledPeopleCardDescription>
            <Stack direction="row" spacing={2} flexWrap="wrap">
              {people.tags?.map((tag) => (
                <PeopleTag value={tag} key={tag} />
              ))}
            </Stack>
          </Stack>
        </Grid>
        <Grid item xs={2}></Grid>
      </Grid>
    </StyledPeopleCardContainer>
  )
})

export default PeopleCard
