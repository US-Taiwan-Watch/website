import type { Metadata } from 'next'
import React from 'react'
import { Language } from '@/common/lib/i18n/types'
import ThemeProvider from '@/common/lib/mui/themeProvider'
import UContainer from '@/common/components/atoms/UContainer'
import ServerArticleApi from '@/modules/Article/api/ServerArticleApi'
import getURouterServer from '@/common/lib/router/getURouterServer'
import { generateCommonMetadata } from '@/common/utils/metadata'
import { RouteName } from '@/common/lib/router/routes'
import { ArticleType } from '@/modules/Article/business/Article'

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
    ArticleType.Ketagalan,
    params.categoryId
  )
  if (!category) return {}
  const { resolveRouteUrl } = getURouterServer()
  return {
    ...(await generateCommonMetadata({
      lang: params.lang,
      pathname: resolveRouteUrl({
        name: RouteName.KetagalanMediaCategory,
        params: { categoryId: params.categoryId },
      }),
      namespace: 'seo_ketagalan_media_category',
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
      <UContainer>{children}</UContainer>
    </ThemeProvider>
  )
}
