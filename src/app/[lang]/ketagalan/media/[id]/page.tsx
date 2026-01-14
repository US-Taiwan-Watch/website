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

export const generateStaticParams = async ({ params }: ArticlePageProps) => {
  const articles = await ServerArticleApi.getArticleIds({
    articleType: ArticleType.Ketagalan,
  })
  return articles.map((article) => ({ id: article.id, lang: params.lang }))
}

export const generateMetadata = async ({
  params,
}: ArticlePageProps): Promise<Metadata> => {
  const { resolveRouteUrl } = getURouterServer()
  const article = await ServerArticleApi.getArticle(params.lang, {
    id: params.id,
    articleType: ArticleType.Ketagalan,
  })
  const articleTitle = article?.title ?? ''
  const articleDescription = article?.description

  return {
    ...(await generateCommonMetadata({
      lang: params.lang,
      pathname: resolveRouteUrl({
        name: RouteName.KetagalanMediaDetail,
        params: { articleId: params.id },
      }),
      namespace: 'seo_ketagalan_media_detail',
      titleVariables: {
        articleTitle,
      },
      descriptionVariables: {
        articleTitle,
      },
    })),
    ...(articleDescription && { description: articleDescription }),
  }
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const [article, relatedArticles] = await Promise.all([
    ServerArticleApi.getArticle(params.lang, {
      id: params.id,
      articleType: ArticleType.Ketagalan,
    }),
    ServerArticleApi.getRelatedArticles(params.lang, {
      id: params.id,
      articleType: ArticleType.Ketagalan,
    }),
  ])

  if (!article) notFound()

  return (
    <ArticlePost
      article={article}
      relatedArticles={relatedArticles.slice(0, RELATED_ARTICLES_COUNT)}
    />
  )
}
