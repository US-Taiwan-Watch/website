'use client'

import { Language } from '@/common/lib/i18n/types'
import useOpinionStore from '@/common/lib/zustand/hooks/useOpinionStore'
import OpinionCategory from '@/modules/Opinion/classes/OpinionCategory'
import { getOpinionTags } from '@/modules/Opinion/data'
import { useParams } from 'next/navigation'
import React, { useEffect } from 'react'

interface CategoryProviderProps {
  children: React.ReactNode
}

export default function CategoryProvider({ children }: CategoryProviderProps) {
  const { lang } = useParams<{ lang: Language }>()

  const setCategories = useOpinionStore((state) => state.setCategories)
  const fetchHighlightedCategories = useOpinionStore(
    (state) => state.fetchHighlightedCategories
  )

  useEffect(() => {
    setCategories(
      getOpinionTags().map((tag) => OpinionCategory.fromDTO(lang, tag))
    )
    fetchHighlightedCategories()
  }, [setCategories, fetchHighlightedCategories, lang])

  return <>{children}</>
}
