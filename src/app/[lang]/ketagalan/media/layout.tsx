import React from 'react'
import ArticleStoreProvider from '@/modules/Article/providers/ArticleStoreProvider'
import { Language } from '@/common/lib/i18n/types'
import { ArticleType } from '@/modules/Article/business/Article'

export default function KetagalanMediaLayout({
  children,
}: {
  params: {
    lang: Language
  }
  children: React.ReactNode
}) {
  return (
    <>
      <ArticleStoreProvider articleType={ArticleType.Ketagalan} />
      {children}
    </>
  )
}
