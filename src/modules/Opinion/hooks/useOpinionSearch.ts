import { Language } from '@/common/lib/i18n/types'
import useOpinionStore from '@/common/lib/zustand/hooks/useOpinionStore'
import { Opinion } from '@/modules/Opinion/classes/Opinion'
import { filterOpinionsByCategory } from '@/modules/Opinion/data'
import { useParams } from 'next/navigation'
import { useEffect, useMemo, useState } from 'react'

export default function useOpinionSearch(categoryId: string) {
  const { lang } = useParams<{ lang: Language }>()
  const homeCategories = useOpinionStore((state) => state.homeCategories)

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
    () => homeCategories.find((category) => category.id === categoryId),
    [categoryId, homeCategories]
  )

  return {
    homeCategories,
    category,
    opinions,
    isOpinionsLoading,
  }
}
