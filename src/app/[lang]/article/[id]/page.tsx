import ArticlePost from '@/modules/Article/components/ArticlePost'
import { Language } from '@/common/lib/i18n/types'
import { notFound } from 'next/navigation'
import ArticleApi from '@/modules/Article/api/ArticleApi'

type ArticlePageProps = {
  params: { lang: Language; id: string }
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const article = await ArticleApi.getArticle({ id: params.id })

  if (!article) notFound()

  const relatedArticles = await ArticleApi.getRelatedArticles({
    id: params.id,
  })

  return <ArticlePost article={article} relatedArticles={relatedArticles} />
}
