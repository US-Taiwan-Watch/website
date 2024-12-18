'use client'

import UButton from '@/common/components/atoms/UButton'
import UHStack from '@/common/components/atoms/UHStack'
import { styled } from '@/common/lib/mui/theme'
import { LinkIcon } from '@/common/styles/assets/Icons'
import { People } from '@/modules/People/classes/People'
import PeopleCategory from '@/modules/People/components/PeopleCategory'
import PeopleTag from '@/modules/People/components/PeopleTag'
import useClipboard from '@/common/hooks/useClipboard'
import { Stack, Typography } from '@mui/material'
import Image from 'next/image'
import { memo } from 'react'

const StyledImage = styled(Image)(() => ({
  width: '200px',
  height: '240px',
  objectFit: 'cover',
  borderRadius: '10px',
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
  const { copyCurrentUrl } = useClipboard()

  return (
    <UHStack spacing={2}>
      {/** 圖片 */}
      {people.image && (
        <StyledImage
          src={people.image}
          alt={people.name ?? ''}
          width={200}
          height={240}
        />
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
          onClick={copyCurrentUrl}
        >
          Link
        </StyledLinkButton>
        <StyledSubscribeButton variant="contained" color="primary" rounded>
          Subscribe
        </StyledSubscribeButton>
      </UHStack>
    </UHStack>
  )
})

export default PeopleInfoSection
