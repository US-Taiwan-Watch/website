import type { Metadata } from 'next'
import React from 'react'
import { Language } from '@/common/lib/i18n/types'
import ThemeProvider from '@/common/lib/mui/themeProvider'
import ServerArticleApi from '@/modules/Article/api/ServerArticleApi'
import { ArticleType } from '@/modules/Article/business/Article'
import getURouterServer from '@/common/lib/router/getURouterServer'
import { generateCommonMetadata } from '@/common/utils/metadata'
import { RouteName } from '@/common/lib/router/routes'
import { I18N_SUPPORTED_LANGUAGE } from '@/common/lib/i18n/settings'

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
    articleType: ArticleType.Article,
  })
  if (!article) return {}
  const { resolveRouteUrl } = getURouterServer()
  return {
    ...(await generateCommonMetadata({
      lang: params.lang,
      pathname: resolveRouteUrl({
        name: RouteName.ArticleDetail,
        params: { articleId: params.id },
      }),
      namespace: 'seo_article_detail',
    })),
    title: article.title,
    description: article.description,
  }
}

export const generateStaticParams = async () => {
  const ids = await ServerArticleApi.getArticleIds({
    articleType: ArticleType.Article,
  })
  return I18N_SUPPORTED_LANGUAGE.flatMap((lang) =>
    ids.map((id) => ({
      lang,
      id: id.id,
    }))
  )
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
      lang={params.lang}
      override={{
        palette: {
          background: {
            default: '#F3F3F3',
          },
        },
      }}
    >
      {children}
    </ThemeProvider>
  )
}
