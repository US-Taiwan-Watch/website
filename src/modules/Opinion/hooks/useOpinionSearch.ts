import { Language } from '@/common/lib/i18n/types'
import useOpinionStore from '@/common/lib/zustand/hooks/useOpinionStore'
import { Opinion } from '@/modules/Opinion/classes/Opinion'
import { filterOpinionsByCategory } from '@/modules/Opinion/data'
import { useParams } from 'next/navigation'
import { useEffect, useMemo, useState } from 'react'

export default function useOpinionSearch(categoryId: string) {
  const { lang } = useParams<{ lang: Language }>()
  const highlightedCategories = useOpinionStore(
    (state) => state.highlightedCategories
  )

  const [opinions, setOpinions] = useState<Array<Opinion>>([])
  const [isOpinionsLoading, setIsOpinionsLoading] = useState<boolean>(true)

  useEffect(() => {
    // TODO: 從 API 取得資料
    setOpinions(
      filterOpinionsByCategory(categoryId).map((opinion) =>
        Opinion.fromDTO(lang, opinion)
      )
    )
    setIsOpinionsLoading(false)
  }, [categoryId, lang])

  const category = useMemo(
    () => highlightedCategories.find((category) => category.id === categoryId),
    [categoryId, highlightedCategories]
  )

  return {
    highlightedCategories,
    category,
    opinions,
    isOpinionsLoading,
  }
}
