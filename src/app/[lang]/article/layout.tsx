import React from 'react'
import ArticleStoreProvider from '@/modules/Article/providers/ArticleStoreProvider'

export default function ArticleLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <ArticleStoreProvider />
      {children}
    </>
  )
}
