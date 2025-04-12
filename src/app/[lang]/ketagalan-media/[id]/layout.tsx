import type { Metadata } from 'next'
import React from 'react'
import { Language } from '@/common/lib/i18n/types'
import ThemeProvider from '@/common/lib/mui/themeProvider'
import CssBaseline from '@mui/material/CssBaseline'
import ServerArticleApi from '@/modules/Article/api/ServerArticleApi'
import { ArticleType } from '@/modules/Article/business/Article'

interface ArticlePostLayoutProps {
  params: {
    lang: Language
    id: string
  }
}

export async function generateMetadata({
  params,
}: ArticlePostLayoutProps): Promise<Metadata> {
  const article = await ServerArticleApi.getArticle({
    id: params.id,
    articleType: ArticleType.Ketagalan,
  })
  if (!article) return {}
  return {
    title: article.title,
    description: article.description,
  }
}

export default function ArticlePostLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: {
    lang: Language
  }
}>) {
  return (
    <ThemeProvider
      mode="ketagalan"
      lang={params.lang}
      override={{
        palette: {
          background: {
            /**
             * 無法吃 theme 的 colors，因為 theme 是 client side，
             * 也不需要為的這個顏色去把 colors 把 client side 獨立出來，
             * 所以直接在這邊設定
             */
            default: '#312F27 !important',
          },
        },
      }}
    >
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}
