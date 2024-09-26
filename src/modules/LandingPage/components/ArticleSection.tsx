'use client'

import { Stack } from '@mui/material'
import UHStack from '@/common/components/atoms/UHStack'
import UCategoryChip from '@/common/components/atoms/UCategoryChip'
import LandingSectionWrapper from '@/common/components/elements/Landing/LandingSectionWrapper'
import SectionTitleWithLink from '@/common/components/elements/Landing/SectionTitleWithLink'
import { OVERLAPPED_SECTION_PADDING_BOTTOM } from '@/modules/LandingPage/constants'
import useOpinionStore from '@/common/lib/zustand/hooks/useOpinionStore'
import { useEffect, useState } from 'react'
import OpinionPostCards from '@/modules/Opinion/components/OpinionPostCards'
import useOpinionIndex from '@/modules/Opinion/hooks/useOpinionIndex'
import { ROUTES } from '@/routes'

const ArticleSection = () => {
  const fetchHomeCategories = useOpinionStore(
    (state) => state.fetchHomeCategories
  )
  const [activeCategoryId, setActiveCategoryId] = useState<string | undefined>()
  const homeCategories = useOpinionStore((state) => state.homeCategories)

  useEffect(() => {
    fetchHomeCategories()
  }, [fetchHomeCategories])

  // 預設塞第一個
  useEffect(() => {
    if (homeCategories.length > 0) {
      setActiveCategoryId(homeCategories[0].id)
    }
  }, [homeCategories])

  const { opinions } = useOpinionIndex(activeCategoryId)

  return (
    <LandingSectionWrapper
      contentWrapperSx={{
        paddingBottom: `${OVERLAPPED_SECTION_PADDING_BOTTOM}px`,
      }}
    >
      {/** FIXME: 暫時隱藏 opinion 的連結 */}
      <SectionTitleWithLink title="Articles" link={ROUTES.HOME} />
      <Stack gap={5}>
        <UHStack gap={2}>
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
        <OpinionPostCards opinions={opinions} pagination={false} />
      </Stack>
    </LandingSectionWrapper>
  )
}

export default ArticleSection
