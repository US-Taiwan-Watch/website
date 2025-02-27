import ArticlePost from '@/modules/Article/components/ArticlePost'
import { Language } from '@/common/lib/i18n/types'
import { ArticleUtils } from '@/modules/Article/business/Article'
import { notFound } from 'next/navigation'
import { QUERY_ARTICLE, QUERY_ARTICLES } from '@/modules/Article/graphql/gql'
import {
  ArticleQueryVariables,
  ArticleQuery,
  ArticlesQuery,
  ArticlesQueryVariables,
} from '@/common/lib/graphql/__generated__/graphql'
import { query } from '@/common/lib/graphql/ServerApolloClient'
import { isNull } from 'lodash-es'

type ArticlePageProps = {
  params: { lang: Language; id: string }
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { data } = await query<ArticleQuery, ArticleQueryVariables>({
    query: QUERY_ARTICLE,
    variables: { id: params.id },
  })

  if (!data?.Article) notFound()

  const article = ArticleUtils.parse(params.lang, data.Article)

  const { data: relatedData } = await query<
    ArticlesQuery,
    ArticlesQueryVariables
  >({
    query: QUERY_ARTICLES,
    variables: {
      limit: 3,
      where: {
        id: {
          not_equals: params.id,
        },
      },
      sort: '-releaseTime',
    },
  })

  const relatedArticles =
    relatedData?.Articles?.docs
      ?.filter((article) => !isNull(article))
      .map((article) => ArticleUtils.parse(params.lang, article)) ?? []

  return <ArticlePost article={article} relatedArticles={relatedArticles} />
}
