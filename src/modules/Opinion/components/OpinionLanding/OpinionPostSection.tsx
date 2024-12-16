'use client'

import UCategoryChip from '@/common/components/atoms/UCategoryChip'
import UHStack from '@/common/components/atoms/UHStack'
import LandingSectionWrapper from '@/common/components/elements/Landing/LandingSectionWrapper'
import { USTWTheme } from '@/common/lib/mui/theme'
import useOpinionStore from '@/common/lib/zustand/hooks/useOpinionStore'
import { Opinion } from '@/modules/Opinion/classes/Opinion'
import OpinionPostCards from '@/modules/Opinion/components/OpinionPostCards'
import { useTheme } from '@mui/material'
import Stack from '@mui/material/Stack'
import { useEffect, useState } from 'react'

interface OpinionPostSectionProps {
  opinions: Opinion[]
}

const OpinionPostSection = ({ opinions }: OpinionPostSectionProps) => {
  const theme = useTheme<USTWTheme>()
  const [activeCategoryId, setActiveCategoryId] = useState<string | undefined>()

  const homeCategories = useOpinionStore((state) => state.homeCategories)

  // 預設塞第一個
  useEffect(() => {
    if (homeCategories.length > 0) {
      setActiveCategoryId(homeCategories[0].id)
    }
  }, [homeCategories])

  return (
    <LandingSectionWrapper
      backgroundColor={theme.color.neutral[100]}
      contentWrapperSx={{
        paddingTop: theme.spacing(10),
        paddingBottom: theme.spacing(15),
      }}
    >
      <Stack spacing={8}>
        {/** Tags */}
        <UHStack gap={2} flexWrap="wrap">
          {homeCategories.map((category) => (
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
    </LandingSectionWrapper>
  )
}

export default OpinionPostSection
