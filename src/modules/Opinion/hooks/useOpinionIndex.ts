/** 首頁的精選文章 */

import { Language } from '@/common/lib/i18n/types'
import useOpinionStore from '@/common/lib/zustand/hooks/useOpinionStore'
import { Opinion } from '@/modules/Opinion/classes/Opinion'
import { OPINION_DTO_MOCK } from '@/modules/Opinion/dtoData'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function useOpinionIndex(tagId?: string) {
  const { lang } = useParams<{ lang: Language }>()
  const landingTags = useOpinionStore((state) => state.landingTags)

  const [opinions, setOpinions] = useState<Array<Opinion>>([])
  const [isOpinionsLoading, setIsOpinionsLoading] = useState<boolean>(true)

  /** 每一次點選不同的 categoryId 時，都會重新取得資料 */
  useEffect(() => {
    // TODO: 從 API 取得資料
    if (tagId) {
      setOpinions(
        OPINION_DTO_MOCK.filter((opinion) => {
          const tagSet = new Set(opinion.tags?.map((tag) => tag.id))
          return tagSet.has(tagId)
        }).map((dto) => Opinion.fromDTO(lang, dto))
      )
    } else {
      setOpinions(OPINION_DTO_MOCK.map((dto) => Opinion.fromDTO(lang, dto)))
    }
    setIsOpinionsLoading(false)
  }, [lang, tagId])

  return {
    landingTags,
    opinions,
    isOpinionsLoading,
  }
}
