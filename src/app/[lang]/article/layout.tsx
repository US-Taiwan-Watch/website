import React from 'react'
import ArticleStoreProvider from '@/modules/Article/providers/ArticleStoreProvider'
import { ArticleType } from '@/modules/Article/business/Article'

export default function ArticleLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <ArticleStoreProvider articleType={ArticleType.Article} />
      {children}
    </>
  )
}
