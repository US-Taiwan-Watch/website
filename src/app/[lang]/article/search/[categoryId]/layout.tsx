import type { Metadata } from 'next'
import React from 'react'
import { Language } from '@/common/lib/i18n/types'
import ThemeProvider from '@/common/lib/mui/themeProvider'
import UContainer from '@/common/components/atoms/UContainer'
import ServerArticleApi from '@/modules/Article/api/ServerArticleApi'
import { ArticleType } from '@/modules/Article/business/Article'
import getURouterServer from '@/common/lib/router/getURouterServer'
import { RouteName } from '@/common/lib/router/routes'
import { generateCommonMetadata } from '@/common/utils/metadata'

interface ArticleSearchCategoryLayoutProps {
  children: React.ReactNode
  params: {
    lang: Language
    categoryId: string
  }
}

export async function generateMetadata({
  params,
}: ArticleSearchCategoryLayoutProps): Promise<Metadata> {
  const category = await ServerArticleApi.getCategory(
    params.lang,
    ArticleType.Article,
    params.categoryId
  )
  if (!category) return {}
  const { resolveRouteUrl } = getURouterServer()
  return {
    ...(await generateCommonMetadata({
      lang: params.lang,
      pathname: resolveRouteUrl({
        name: RouteName.ArticleCategory,
        params: { categoryId: params.categoryId },
      }),
      namespace: 'seo_article_category',
      titleVariables: {
        categoryTitle: category.label ?? '',
      },
      descriptionVariables: {
        categoryTitle: category.label ?? '',
      },
    })),
  }
}

export default function ArticleSearchCategoryLayout({
  children,
  params,
}: Readonly<ArticleSearchCategoryLayoutProps>) {
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
      <UContainer>{children}</UContainer>
    </ThemeProvider>
  )
}
