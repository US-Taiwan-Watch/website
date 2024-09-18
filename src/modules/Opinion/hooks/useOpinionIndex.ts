/** 首頁的精選文章 */

import useOpinionStore from '@/common/lib/zustand/hooks/useOpinionStore'
import { Opinion } from '@/modules/Opinion/classes/Opinion'
import { opinions as MOCK_OPINIONS } from '@/modules/Opinion/data'
import { useEffect, useState } from 'react'

export default function useOpinionIndex(categoryId?: string) {
  const categories = useOpinionStore((state) => state.categories)

  const [opinions, setOpinions] = useState<Array<Opinion>>([])
  const [isOpinionsLoading, setIsOpinionsLoading] = useState<boolean>(true)

  /** 每一次點選不同的 categoryId 時，都會重新取得資料 */
  useEffect(() => {
    // TODO: 從 API 取得資料
    setOpinions(MOCK_OPINIONS.slice(0, 4))
    setIsOpinionsLoading(false)
  }, [categoryId])

  return {
    categories,
    opinions,
    isOpinionsLoading,
  }
}
