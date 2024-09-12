'use client'

import { Stack } from '@mui/material'
import UHStack from '@/common/components/atoms/UHStack'
import UCategoryChip from '@/common/components/atoms/UCategoryChip'
import LandingSectionWrapper from '@/common/components/elements/Landing/LandingSectionWrapper'
import SectionTitleWithLink from '@/common/components/elements/Landing/SectionTitleWithLink'
import { OVERLAPPED_SECTION_PADDING_BOTTOM } from '@/modules/LandingPage/constants'

const ArticleSection = () => {
  return (
    <LandingSectionWrapper
      contentWrapperSx={{
        paddingBottom: `${OVERLAPPED_SECTION_PADDING_BOTTOM}px`,
      }}
    >
      <SectionTitleWithLink title="Articles" link="#" />
      <Stack gap={5}>
        <UHStack gap={2}>
          <UCategoryChip img="/assets/category1.jpg" label="編輯精選" />
          <UCategoryChip img="/assets/category1.jpg" label="編輯精選" active />
        </UHStack>
        TODO: Article Cards Here
      </Stack>
    </LandingSectionWrapper>
  )
}

export default ArticleSection
