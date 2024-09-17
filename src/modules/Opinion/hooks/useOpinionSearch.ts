import { Opinion } from '@/modules/Opinion/classes/Opinion'
import {
  opinions as MOCK_OPINIONS,
  opinionCategories,
} from '@/modules/Opinion/data'
import { OpinionCategory } from '@/modules/Opinion/types/OpinionCategory'
import { useEffect, useMemo, useState } from 'react'

export default function useOpinionSearch(categoryId: string) {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [categories, setCategories] = useState<Array<OpinionCategory>>([])

  useEffect(() => {
    // TODO: 從 API 取得資料
    setCategories(opinionCategories)
    setIsLoading(false)
  }, [])

  const [opinions, setOpinions] = useState<Array<Opinion>>([])

  useEffect(() => {
    // TODO: 從 API 取得資料
    setOpinions(MOCK_OPINIONS)
    setIsLoading(false)
  }, [categoryId])

  const category = useMemo(
    () => categories.find((category) => category.id === categoryId),
    [categoryId, categories]
  )

  return {
    categories,
    category,
    opinions,
    isLoading,
  }
}
