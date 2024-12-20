'use client'

import UCategoryChip from '@/common/components/atoms/UCategoryChip'
import UHStack from '@/common/components/atoms/UHStack'
import LandingSectionWrapper from '@/common/components/elements/Landing/LandingSectionWrapper'
import { Language } from '@/common/lib/i18n/types'
import { USTWTheme } from '@/common/lib/mui/theme'
import CommonUtils from '@/modules/Common/Common.utils'
import OpinionPostCards from '@/modules/Opinion/components/OpinionPostCards'
import useOpinionIndex from '@/modules/Opinion/hooks/useOpinionIndex'
import { useTheme } from '@mui/material'
import Stack from '@mui/material/Stack'
import { useParams } from 'next/navigation'
import { useState } from 'react'

const OpinionPostSection = () => {
  const { lang } = useParams<{ lang: Language }>()
  const theme = useTheme<USTWTheme>()
  const [activeTagId, setActiveTagId] = useState<string | undefined>()
  const { opinions, landingTags } = useOpinionIndex(activeTagId)

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
          {landingTags.map((tag) => (
            <UCategoryChip
              key={tag.id}
              label={tag.i18n?.[CommonUtils.parseAPII18nKey(lang)]?.name ?? ''}
              active={activeTagId === tag.id}
              onClick={() => {
                if (activeTagId === tag.id) {
                  setActiveTagId(undefined)
                } else {
                  setActiveTagId(tag.id ?? undefined)
                }
              }}
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
