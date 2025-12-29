import ArticlePost from '@/modules/Article/components/ArticlePost'
import { Language } from '@/common/lib/i18n/types'
import { notFound } from 'next/navigation'
import ServerArticleApi from '@/modules/Article/api/ServerArticleApi'
import { ArticleType } from '@/modules/Article/business/Article'
import { Metadata } from 'next'
import getURouterServer from '@/common/lib/router/getURouterServer'
import { generateCommonMetadata } from '@/common/utils/metadata'
import { RouteName } from '@/common/lib/router/routes'

const RELATED_ARTICLES_COUNT = 3

type ArticlePageProps = {
  params: { lang: Language; id: string }
}

export const generateMetadata = async ({
  params,
}: ArticlePageProps): Promise<Metadata> => {
  const { resolveRouteUrl } = getURouterServer()
  const article = await ServerArticleApi.getArticle(params.lang, {
    id: params.id,
    articleType: ArticleType.Article,
  })
  const articleTitle = article?.title ?? ''
  const articleDescription = article?.description ?? ''

  return {
    ...(await generateCommonMetadata({
      lang: params.lang,
      pathname: resolveRouteUrl({
        name: RouteName.ArticleDetail,
        params: { articleId: params.id },
      }),
      namespace: 'seo_article_detail',
      titleVariables: {
        articleTitle,
      },
      descriptionVariables: {
        articleTitle,
      },
    })),
    description: articleDescription,
  }
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const article = await ServerArticleApi.getArticle(params.lang, {
    id: params.id,
    articleType: ArticleType.Article,
  })

  if (!article) notFound()

  const relatedArticles = await ServerArticleApi.getRelatedArticles(
    params.lang,
    {
      id: params.id,
      articleType: ArticleType.Article,
    }
  )

  return (
    <ArticlePost
      article={article}
      relatedArticles={relatedArticles.slice(0, RELATED_ARTICLES_COUNT)}
    />
  )
}
