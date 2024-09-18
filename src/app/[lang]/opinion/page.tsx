'use client'

import UFullWidthBackgroundBox from '@/common/components/atoms/UFullWidthBackgroundBox'
import useOpinionStore from '@/common/lib/zustand/hooks/useOpinionStore'
import OpinionLandingBannerCards from '@/modules/Opinion/components/OpinionLanding/OpinionLandingBannerCards'
import OpinionPostSection from '@/modules/Opinion/components/OpinionLanding/OpinionPostSection'
import OpinionNavbar from '@/modules/Opinion/components/OpinionNavbar'
import { Stack } from '@mui/material'
import { useEffect } from 'react'

export default function Opinion() {
  const fetchCategories = useOpinionStore((state) => state.fetchCategories)
  const fetchHighlightedCategories = useOpinionStore(
    (state) => state.fetchHighlightedCategories
  )

  useEffect(() => {
    fetchCategories()
    fetchHighlightedCategories()
  }, [fetchCategories, fetchHighlightedCategories])

  return (
    <Stack>
      <UFullWidthBackgroundBox>
        <OpinionNavbar />
      </UFullWidthBackgroundBox>
      <OpinionLandingBannerCards />
      <OpinionPostSection />
    </Stack>
  )
}
