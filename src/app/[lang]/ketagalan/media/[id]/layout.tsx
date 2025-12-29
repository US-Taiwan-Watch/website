import type { Metadata } from 'next'
import React from 'react'
import { Language } from '@/common/lib/i18n/types'
import ThemeProvider from '@/common/lib/mui/themeProvider'
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
  const article = await ServerArticleApi.getArticle(params.lang, {
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
            default: '#312F27',
          },
        },
      }}
    >
      {children}
    </ThemeProvider>
  )
}
