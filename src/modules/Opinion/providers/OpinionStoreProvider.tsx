'use client'

import { Language } from '@/common/lib/i18n/types'
import useOpinionStore from '@/modules/Opinion/store/useOpinionStore'
import { TAGS_DTO_MOCK } from '@/modules/Common/dtoData'
import OpinionCategory from '@/modules/Opinion/classes/OpinionCategory'
import { getOpinionCategories } from '@/modules/Opinion/data'
import { useParams } from 'next/navigation'
import { useEffect } from 'react'

export default function OpinionStoreProvider() {
  const { lang } = useParams<{ lang: Language }>()

  const setLandingTags = useOpinionStore((state) => state.setLandingTags)
  const setHomeHighlightedCategories =
    useOpinionStore.use.setHomeHighlightedCategories()

  useEffect(() => {
    setLandingTags(TAGS_DTO_MOCK.filter((tag) => tag.isFeatured))
    setHomeHighlightedCategories(
      getOpinionCategories().map((category) =>
        OpinionCategory.fromDTO(lang, category)
      )
    )
  }, [setLandingTags, setHomeHighlightedCategories, lang])

  return null
}
