'use client'

import { Language } from '@/common/lib/i18n/types'
import useOpinionStore from '@/common/lib/zustand/hooks/useOpinionStore'
import OpinionCategory from '@/modules/Opinion/classes/OpinionCategory'
import {
  getOpinionTags,
  highlightedOpinionCategories,
} from '@/modules/Opinion/data'
import { useParams } from 'next/navigation'
import React, { useEffect } from 'react'

interface CategoryProviderProps {
  children: React.ReactNode
}

export default function CategoryProvider({ children }: CategoryProviderProps) {
  const { lang } = useParams<{ lang: Language }>()

  const setHomeCategories = useOpinionStore((state) => state.setHomeCategories)
  const setHomeHighlightedCategories = useOpinionStore(
    (state) => state.setHomeHighlightedCategories
  )

  useEffect(() => {
    setHomeCategories(
      getOpinionTags().map((tag) => OpinionCategory.fromDTO(lang, tag))
    )
    setHomeHighlightedCategories(
      highlightedOpinionCategories.map((tag) =>
        OpinionCategory.fromDTO(lang, tag)
      )
    )
  }, [setHomeCategories, setHomeHighlightedCategories, lang])

  return <>{children}</>
}
