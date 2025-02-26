import OpinionPost from '@/modules/Opinion/components/OpinionPost'
import { Language } from '@/common/lib/i18n/types'
import { OpinionUtils } from '@/modules/Opinion/business/Opinion'
import { notFound } from 'next/navigation'
import { QUERY_ARTICLE, QUERY_ARTICLES } from '@/modules/Opinion/graphql/gql'
import {
  ArticleQueryVariables,
  ArticleQuery,
  ArticlesQuery,
  ArticlesQueryVariables,
} from '@/common/lib/graphql/__generated__/graphql'
import { query } from '@/common/lib/graphql/ServerApolloClient'
import { isNull } from 'lodash-es'

type OpinionPageProps = {
  params: { lang: Language; id: string }
}

export default async function OpinionPage({ params }: OpinionPageProps) {
  const { data } = await query<ArticleQuery, ArticleQueryVariables>({
    query: QUERY_ARTICLE,
    variables: { id: params.id },
  })

  if (!data?.Article) notFound()

  const opinion = OpinionUtils.parse(params.lang, data.Article)

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
      sort: 'createdAt:desc', // TODO: 確認呼叫方式
    },
  })

  const relatedOpinions =
    relatedData?.Articles?.docs
      ?.filter((article) => !isNull(article))
      .map((article) => OpinionUtils.parse(params.lang, article)) ?? []

  return <OpinionPost opinion={opinion} relatedOpinions={relatedOpinions} />
}
