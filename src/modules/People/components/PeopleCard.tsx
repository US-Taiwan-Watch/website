'use client'

import { People } from '@/modules/People/classes/People'
import { memo } from 'react'
import { styled } from '@/common/lib/mui/theme'
import { Box, Grid, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import PeopleCategory from '@/modules/People/components/PeopleCategory'
import PeopleCongressTitle from '@/modules/People/components/PeopleCongressTitle'
import PeopleTag from '@/modules/People/components/PeopleTag'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import UIconButton from '@/common/components/atoms/UIconButton'
import Link from 'next/link'

const StyledPeopleCardContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  padding: theme.spacing(2.5),
  borderRadius: '15px',
  backgroundColor: theme.color.common.white,
  border: `1px solid ${theme.color.grey[1600]}`,
}))

const StyledPeopleCardImageContainer = styled(Box)(() => ({
  position: 'relative',
  borderRadius: '15px',
  overflow: 'hidden',
}))

const StyledPeopleCardImage = styled(Image)(() => ({
  width: '100%',
  height: '100%', // 設置為自動高度
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

const StyledPeopleCardIconButton = styled(UIconButton)(({ theme }) => ({
  '& svg': {
    color: theme.color.neutral[500],
  },
}))

interface PeopleCardProps {
  people: People
  simplified?: boolean
}

const PeopleCard = memo(function PeopleCard({
  people,
  simplified = false,
}: PeopleCardProps) {
  return (
    <StyledPeopleCardContainer>
      <Stack direction="row" spacing={3}>
        {people.image && (
          <StyledPeopleCardImageContainer
            display="flex"
            alignItems="center"
            justifyContent="center"
            sx={{ width: simplified ? 100 : 160 }}
          >
            <StyledPeopleCardImage
              src={people.image}
              alt={people.name || ''}
              fill
            />
          </StyledPeopleCardImageContainer>
        )}
        <Grid container direction="row" flex={1}>
          <Grid item xs={10}>
            <Stack direction="column" spacing={1}>
              <PeopleCategory people={people} />
              <Typography fontSize={'1.5rem'} fontWeight={600}>
                {people.name}
              </Typography>
              {people.congress && (
                <PeopleCongressTitle congress={people.congress} />
              )}
              {!simplified && (
                <StyledPeopleCardDescription fontWeight={400}>
                  {people.description}
                </StyledPeopleCardDescription>
              )}
              <Stack direction="row" gap={2} overflow="scroll">
                {/** 只限制四個 */}
                {people.tags
                  ?.slice(0, 4)
                  .map((tag) => <PeopleTag value={tag} key={tag} />)}
              </Stack>
            </Stack>
          </Grid>
          <Grid item xs={2} display="flex" justifyContent="end">
            <Link href={people.link}>
              <StyledPeopleCardIconButton variant="rounded" color="inherit">
                <ArrowForwardIcon />
              </StyledPeopleCardIconButton>
            </Link>
          </Grid>
        </Grid>
      </Stack>
    </StyledPeopleCardContainer>
  )
})

export default PeopleCard
