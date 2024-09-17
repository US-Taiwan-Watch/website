'use client'

import UCategoryChip from '@/common/components/atoms/UCategoryChip'
import UHStack from '@/common/components/atoms/UHStack'
import LandingSectionWrapper from '@/common/components/elements/Landing/LandingSectionWrapper'
import { USTWTheme } from '@/common/lib/mui/theme'
import OpinionPostCards from '@/modules/Opinion/components/OpinionPostCards'
import { opinions } from '@/modules/Opinion/data'
import { Container, Stack, useTheme } from '@mui/material'
import { useState } from 'react'

// TODO: 後續討論
interface Category {
  id: string
  label: string
  image: string
}
const categories: Array<Category> = [
  {
    id: '1',
    label: '編輯精選',
    image: '/assets/category1.jpg',
  },
  {
    id: '2',
    label: '最新',
    image: '/assets/category1.jpg',
  },
  {
    id: '3',
    label: '熱門',
    image: '/assets/category1.jpg',
  },
  {
    id: '4',
    label: '習近平',
    image: '/assets/category1.jpg',
  },
  {
    id: '5',
    label: '黃仁勳',
    image: '/assets/category1.jpg',
  },
  {
    id: '6',
    label: '軍演',
    image: '/assets/category1.jpg',
  },
  {
    id: '7',
    label: '美國國會',
    image: '/assets/category1.jpg',
  },
  {
    id: '8',
    label: '美國選舉',
    image: '/assets/category1.jpg',
  },
]

const OpinionPostSection = () => {
  const theme = useTheme<USTWTheme>()
  const [activeCategoryId, setActiveCategoryId] = useState<string>('1')

  return (
    <LandingSectionWrapper
      backgroundColor={theme.color.neutral[100]}
      contentWrapperSx={{
        paddingTop: theme.spacing(10),
        paddingBottom: theme.spacing(15),
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={8}>
          {/** Tags */}
          <UHStack gap={2} flexWrap="wrap">
            {categories.map((category) => (
              <UCategoryChip
                key={category.id}
                label={category.label}
                img={category.image}
                active={activeCategoryId === category.id}
                onClick={() => setActiveCategoryId(category.id)}
              />
            ))}
          </UHStack>

          {/** Posts */}
          <OpinionPostCards opinions={opinions} />
        </Stack>
      </Container>
    </LandingSectionWrapper>
  )
}

export default OpinionPostSection
