/** 首頁的精選文章 */

import { Language } from '@/common/lib/i18n/types'
import useOpinionStore from '@/modules/Opinion/store/useOpinionStore'
import { Opinion } from '@/modules/Opinion/classes/Opinion'
import { OPINION_DTO_MOCK } from '@/modules/Opinion/dtoData'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'

/**
 * 取得首頁 / Opinion Langing 頁面的精選文章
 * @param tagId 選擇的 tag
 * @param limit 限制的數量
 * @returns
 */
export default function useOpinionIndex(tagId?: string, limit?: number) {
  const { lang } = useParams<{ lang: Language }>()
  const landingTags = useOpinionStore((state) => state.landingTags)

  const [opinions, setOpinions] = useState<Array<Opinion>>([])
  const [isOpinionsLoading, setIsOpinionsLoading] = useState<boolean>(true)

  /** 每一次點選不同的 categoryId 時，都會重新取得資料 */
  useEffect(() => {
    // TODO: 從 API 取得資料
    let opinions: Opinion[] = []
    if (tagId) {
      opinions = OPINION_DTO_MOCK.filter((opinion) => {
        const tagSet = new Set(opinion.tags?.map((tag) => tag.id))
        return tagSet.has(tagId)
      }).map((dto) => Opinion.fromDTO(lang, dto))
    } else {
      opinions = OPINION_DTO_MOCK.map((dto) => Opinion.fromDTO(lang, dto))
    }
    setOpinions(
      opinions.sort((a, b) => b.date?.diff(a.date) ?? 0).slice(0, limit)
    )
    setIsOpinionsLoading(false)
  }, [lang, tagId, limit])

  return {
    landingTags,
    opinions,
    isOpinionsLoading,
  }
}
