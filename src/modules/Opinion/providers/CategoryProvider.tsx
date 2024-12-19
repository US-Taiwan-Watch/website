'use client'

import { Language } from '@/common/lib/i18n/types'
import useOpinionStore from '@/common/lib/zustand/hooks/useOpinionStore'
import OpinionCategory from '@/modules/Opinion/classes/OpinionCategory'
import {
  getOpinionCategories,
  highlightedOpinionCategories,
} from '@/modules/Opinion/data'
import { useParams } from 'next/navigation'
import { useEffect } from 'react'

export default function CategoryProvider() {
  const { lang } = useParams<{ lang: Language }>()

  const setHomeCategories = useOpinionStore((state) => state.setHomeCategories)
  const setHomeHighlightedCategories = useOpinionStore(
    (state) => state.setHomeHighlightedCategories
  )

  useEffect(() => {
    setHomeCategories(
      getOpinionCategories().map((category) =>
        OpinionCategory.fromDTO(lang, category)
      )
    )
    setHomeHighlightedCategories(
      highlightedOpinionCategories.map(
        (category) => new OpinionCategory(category)
      )
    )
  }, [setHomeCategories, setHomeHighlightedCategories, lang])

  return null
}
