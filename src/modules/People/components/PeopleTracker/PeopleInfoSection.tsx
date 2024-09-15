'use client'

import UButton from '@/common/components/atoms/UButton'
import UHStack from '@/common/components/atoms/UHStack'
import { styled } from '@/common/lib/mui/theme'
import { LinkIcon } from '@/common/styles/assets/Icons'
import { People } from '@/modules/People/classes/People'
import PeopleCategory from '@/modules/People/components/PeopleCategory'
import PeopleTag from '@/modules/People/components/PeopleTag'
import { Box, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import { memo } from 'react'

const StyledPeopleInfoSectionContainer = styled(UHStack)(() => ({
  minHeight: '240px',
}))

const StyledImageContainer = styled(Box)(() => ({
  position: 'relative',
  width: '200px',
  borderRadius: '10px',
  overflow: 'hidden',
}))

const StyledImage = styled(Image)(() => ({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
}))

const StyledInfoContainer = styled(Stack)(({ theme }) => ({
  flex: 1,
  padding: theme.spacing(2, 0),
}))

const StyledLinkButton = styled(UButton)(({ theme }) => ({
  backgroundColor: theme.color.common.white,
  color: theme.color.common.black,
  height: 'max-content',
  '&:hover': {
    backgroundColor: theme.color.common.white,
  },
}))

const StyledSubscribeButton = styled(UButton)(() => ({
  height: 'max-content',
}))

interface PeopleInfoSectionProps {
  people: People
}

const PeopleInfoSection = memo(function PeopleInfoSection({
  people,
}: PeopleInfoSectionProps) {
  return (
    <StyledPeopleInfoSectionContainer spacing={2}>
      {/** 圖片 */}
      {people.image && (
        <StyledImageContainer>
          <StyledImage src={people.image} alt={people.name ?? ''} fill />
        </StyledImageContainer>
      )}

      {/** Info */}
      <StyledInfoContainer spacing={2}>
        <PeopleCategory people={people} />
        <Typography variant="h4">{people.name}</Typography>
        <Stack direction="row" gap={2} flexWrap="wrap">
          {people.tags?.map((tag) => <PeopleTag value={tag} key={tag} />)}
        </Stack>
      </StyledInfoContainer>

      {/** Actions */}
      <UHStack spacing={2}>
        <StyledLinkButton
          variant="contained"
          startIcon={<LinkIcon width={24} height={24} />}
          rounded
        >
          Link
        </StyledLinkButton>
        <StyledSubscribeButton variant="contained" color="primary" rounded>
          Subscribe
        </StyledSubscribeButton>
      </UHStack>
    </StyledPeopleInfoSectionContainer>
  )
})

export default PeopleInfoSection
