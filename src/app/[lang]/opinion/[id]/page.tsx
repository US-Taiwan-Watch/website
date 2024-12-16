'use client'

import OpinionPost from '@/modules/Opinion/components/OpinionPost'
import { Language } from '@/common/lib/i18n/types'
import { findOpinion } from '@/modules/Opinion/data'
import { Opinion } from '@/modules/Opinion/classes/Opinion'
import { notFound } from 'next/navigation'

type OpinionPageProps = {
  params: { lang: Language; id: string }
}

export default function OpinionPage({ params }: OpinionPageProps) {
  const dto = findOpinion(params.id)
  if (!dto) notFound()
  const opinion = Opinion.fromDTO(params.lang, dto)

  return <OpinionPost opinion={opinion} />
}
