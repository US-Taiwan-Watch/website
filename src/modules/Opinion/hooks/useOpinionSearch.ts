import useOpinionStore from '@/common/lib/zustand/hooks/useOpinionStore'
import { Opinion } from '@/modules/Opinion/classes/Opinion'
import { opinions as MOCK_OPINIONS } from '@/modules/Opinion/data'
import { useEffect, useMemo, useState } from 'react'

export default function useOpinionSearch(categoryId: string) {
  const homeCategories = useOpinionStore((state) => state.homeCategories)

  const [opinions, setOpinions] = useState<Array<Opinion>>([])
  const [isOpinionsLoading, setIsOpinionsLoading] = useState<boolean>(true)

  useEffect(() => {
    // TODO: 從 API 取得資料
    setOpinions(MOCK_OPINIONS)
    setIsOpinionsLoading(false)
  }, [categoryId])

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
