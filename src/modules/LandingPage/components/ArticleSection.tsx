'use client'

import { Stack } from '@mui/material'
import UHStack from '@/common/components/atoms/UHStack'
import UCategoryChip from '@/common/components/atoms/UCategoryChip'
import LandingSectionWrapper from '@/common/components/elements/Landing/LandingSectionWrapper'
import { SectionTitleWithLink } from '@/common/components/elements/Landing/SectionTitle'
import { OVERLAPPED_SECTION_PADDING_BOTTOM } from '@/modules/LandingPage/constants'
import useOpinionStore from '@/modules/Opinion/store/useOpinionStore'
import { useState, useMemo } from 'react'
import OpinionPostCards from '@/modules/Opinion/components/OpinionPostCards'
import { getOpinions } from '@/modules/Opinion/dtoData'
import { ROUTES } from '@/routes'
import CommonUtils from '@/modules/Common/Common.utils'
import { useParams } from 'next/navigation'
import { Language } from '@/common/lib/i18n/types'
import OpinionStoreProvider from '@/modules/Opinion/providers/OpinionStoreProvider'

const ArticleSection = () => {
  const { lang } = useParams<{ lang: Language }>()
  const [activeCategoryId, setActiveCategoryId] = useState<string | undefined>()
  const landingTags = useOpinionStore.use.landingTags()
  const opinions = useMemo(
    () => getOpinions(lang, activeCategoryId, 3),
    [lang, activeCategoryId]
  )
  return (
    <>
      <OpinionStoreProvider />
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
                label={
                  tag.i18n?.[CommonUtils.parseAPII18nKey(lang)]?.name ?? ''
                }
                active={activeCategoryId === tag.id}
                onClick={() => {
                  if (activeCategoryId === tag.id) {
                    setActiveCategoryId(undefined)
                  } else {
                    setActiveCategoryId(tag.id ?? undefined)
                  }
                }}
              />
            ))}
          </UHStack>

          {/** Posts */}
          <OpinionPostCards opinions={opinions} pagination={false} />
        </Stack>
      </LandingSectionWrapper>
    </>
  )
}

export default ArticleSection
