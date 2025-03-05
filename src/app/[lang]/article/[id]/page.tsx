import ArticlePost from '@/modules/Article/components/ArticlePost'
import { Language } from '@/common/lib/i18n/types'
import { notFound } from 'next/navigation'
import ServerArticleApi from '@/modules/Article/api/ServerArticleApi'

type ArticlePageProps = {
  params: { lang: Language; id: string }
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const article = await ServerArticleApi.getArticle({ id: params.id })

  if (!article) notFound()

  const relatedArticles = await ServerArticleApi.getRelatedArticles({
    id: params.id,
  })

  return <ArticlePost article={article} relatedArticles={relatedArticles} />
}
