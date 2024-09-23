'use client'

import UCategoryChip from '@/common/components/atoms/UCategoryChip'
import UHStack from '@/common/components/atoms/UHStack'
import LandingSectionWrapper from '@/common/components/elements/Landing/LandingSectionWrapper'
import { USTWTheme } from '@/common/lib/mui/theme'
import useOpinionStore from '@/common/lib/zustand/hooks/useOpinionStore'
import OpinionPostCards from '@/modules/Opinion/components/OpinionPostCards'
import { opinions } from '@/modules/Opinion/data'
import { Container, Stack, useTheme } from '@mui/material'
import { useEffect, useState } from 'react'

const OpinionPostSection = () => {
  const theme = useTheme<USTWTheme>()
  const [activeCategoryId, setActiveCategoryId] = useState<string | undefined>()

  const categories = useOpinionStore((state) => state.categories)

  // 預設塞第一個
  useEffect(() => {
    if (categories.length > 0) {
      setActiveCategoryId(categories[0].id)
    }
  }, [categories])

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
