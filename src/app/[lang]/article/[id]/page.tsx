import ArticlePost from '@/modules/Article/components/ArticlePost'
import { Language } from '@/common/lib/i18n/types'
import { notFound } from 'next/navigation'
import ServerArticleApi from '@/modules/Article/api/ServerArticleApi'
import { ArticleType } from '@/modules/Article/business/Article'

const RELATED_ARTICLES_COUNT = 3

type ArticlePageProps = {
  params: { lang: Language; id: string }
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const [article, relatedArticles] = await Promise.all([
    ServerArticleApi.getArticle(params.lang, {
      id: params.id,
      articleType: ArticleType.Article,
    }),
    ServerArticleApi.getRelatedArticles(params.lang, {
      id: params.id,
      articleType: ArticleType.Article,
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
