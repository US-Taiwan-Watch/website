'use client'

import UHStack from '@/common/components/atoms/UHStack'
import { styled } from '@/common/lib/mui/theme'
import PeopleCategory from '@/modules/People/components/PeopleCategory'
import PeopleTag from '@/modules/People/components/PeopleTag'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Image from 'next/image'
import React, { memo } from 'react'
import { People } from '@/modules/People/business/People'
import LinkButton from '@/modules/People/components/PeopleTracker/LinkButton'
import SubscribeButton from '@/modules/People/components/PeopleTracker/SubscribeButton'

const StyledImage = styled(Image)(() => ({
  width: '200px',
  height: '240px',
  objectFit: 'cover',
  borderRadius: '10px',
}))

const StyledInfoContainer = styled(Stack)(() => ({
  flex: 1,
}))
interface PeopleInfoSectionProps {
  people: People
}

const PeopleInfoSection = memo(function PeopleInfoSection({
  people,
}: PeopleInfoSectionProps) {
  return (
    <UHStack spacing={2} alignItems="flex-start">
      {/** 圖片 */}
      {people.image && (
        <StyledImage
          src={people.image}
          alt={people.name ?? ''}
          width={200}
          height={240}
          sx={{
            width: {
              xs: 80,
              sm: 193,
            },
            height: {
              xs: 100,
              sm: 236,
            },
          }}
        />
      )}

      {/** Info */}
      <StyledInfoContainer
        gap={{
          xs: 0.5,
          sm: 2,
        }}
        py={{
          xs: 0,
          sm: 1.5,
        }}
      >
        <PeopleCategory people={people} />
        <Typography variant="h4">{people.name}</Typography>
        <Stack direction="row" gap={2} flexWrap="wrap">
          {people.tags.map((tag) => (
            <PeopleTag key={tag.id} value={tag.name} />
          ))}
        </Stack>
      </StyledInfoContainer>

      {/** Actions */}
      <UHStack spacing={2}>
        <LinkButton people={people} />
        <SubscribeButton people={people} />
      </UHStack>
    </UHStack>
  )
})

export default PeopleInfoSection
