import type { Metadata } from 'next'
import React from 'react'
import { Language } from '@/common/lib/i18n/types'
import ThemeProvider from '@/common/lib/mui/themeProvider'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter'
import CssBaseline from '@mui/material/CssBaseline'
import { query } from '@/common/lib/graphql/ServerApolloClient'
import { QUERY_ARTICLE_METADATA } from '@/modules/Article/graphql/gql'
import {
  ArticleMetadataQuery,
  ArticleMetadataQueryVariables,
} from '@/common/lib/graphql/__generated__/graphql'
import { ArticleUtils } from '@/modules/Article/business/Article'

interface ArticlePostLayoutProps {
  params: {
    lang: Language
    id: string
  }
}

export async function generateMetadata({
  params,
}: ArticlePostLayoutProps): Promise<Metadata> {
  const { data } = await query<
    ArticleMetadataQuery,
    ArticleMetadataQueryVariables
  >({
    query: QUERY_ARTICLE_METADATA,
    variables: { id: params.id },
  })
  if (!data?.Article) return {}
  const Article = ArticleUtils.parse(params.lang, data.Article)
  return {
    title: Article.title,
    description: Article.description,
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
    <AppRouterCacheProvider>
      <ThemeProvider
        lang={params.lang}
        override={{
          palette: {
            background: {
              /**
               * 無法吃 theme 的 colors，因為 theme 是 client side，
               * 也不需要為的這個顏色去把 colors 把 client side 獨立出來，
               * 所以直接在這邊設定
               */
              default: '#F3F3F3',
            },
          },
        }}
      >
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        {children}
      </ThemeProvider>
    </AppRouterCacheProvider>
  )
}
