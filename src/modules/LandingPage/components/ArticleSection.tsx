'use client'

import { Stack } from '@mui/material'
import UHStack from '@/common/components/atoms/UHStack'
import UCategoryChip from '@/common/components/atoms/UCategoryChip'
import LandingSectionWrapper from '@/common/components/elements/Landing/LandingSectionWrapper'
import { SectionTitleWithLink } from '@/common/components/elements/Landing/SectionTitle'
import { OVERLAPPED_SECTION_PADDING_BOTTOM } from '@/modules/LandingPage/constants'
import useOpinionStore from '@/common/lib/zustand/hooks/useOpinionStore'
import { useEffect, useState } from 'react'
import OpinionPostCards from '@/modules/Opinion/components/OpinionPostCards'
import useOpinionIndex from '@/modules/Opinion/hooks/useOpinionIndex'
import { ROUTES } from '@/routes'
import CommonUtils from '@/modules/Common/Common.utils'
import { useParams } from 'next/navigation'
import { Language } from '@/common/lib/i18n/types'

const ArticleSection = () => {
  const { lang } = useParams<{ lang: Language }>()
  const [activeCategoryId, setActiveCategoryId] = useState<string | undefined>()
  const landingTags = useOpinionStore((state) => state.landingTags)

  // 預設塞第一個
  useEffect(() => {
    if (landingTags.length > 0) {
      setActiveCategoryId(landingTags[0]?.id ?? undefined)
    }
  }, [landingTags])

  const { opinions } = useOpinionIndex(activeCategoryId)

  return (
    <LandingSectionWrapper
      contentWrapperSx={{
        paddingBottom: `${OVERLAPPED_SECTION_PADDING_BOTTOM}px`,
      }}
    >
      <SectionTitleWithLink title="Articles" link={ROUTES.OPINION} />
      <Stack gap={5}>
        <UHStack gap={2}>
          {landingTags.map((tag) => (
            <UCategoryChip
              key={tag.id}
              label={tag.i18n?.[CommonUtils.parseAPII18nKey(lang)]?.name ?? ''}
              active={activeCategoryId === tag.id}
              onClick={() => setActiveCategoryId(tag.id ?? undefined)}
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
