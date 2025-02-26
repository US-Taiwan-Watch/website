import UFullWidthBackgroundBox from '@/common/components/atoms/UFullWidthBackgroundBox'
import Carousel from '@/common/components/elements/Carousel'
import IndexOpinionCard from '@/common/components/elements/IndexOpinionCard'
import {
  ArticlesQuery,
  ArticlesQueryVariables,
} from '@/common/lib/graphql/__generated__/graphql'
import { query } from '@/common/lib/graphql/ServerApolloClient'
import { Language } from '@/common/lib/i18n/types'
import { OpinionUtils } from '@/modules/Opinion/business/Opinion'
import { QUERY_ARTICLES } from '@/modules/Opinion/graphql/gql'
import { Container } from '@mui/material'
import { isNull } from 'lodash-es'

interface IndexOpinionCarouselProps {
  lang: Language
}

export default async function IndexOpinionCarousel({
  lang,
}: IndexOpinionCarouselProps) {
  const { data } = await query<ArticlesQuery, ArticlesQueryVariables>({
    query: QUERY_ARTICLES,
    variables: {
      limit: 3,
      where: {
        isFeatured: {
          equals: true,
        },
      },
    },
  })

  const opinions = data?.Articles?.docs
    ?.filter((article) => !isNull(article))
    .map((article) => OpinionUtils.parse(lang, article))

  if (!opinions) return null

  return (
    <UFullWidthBackgroundBox>
      <Container maxWidth="xl">
        <Carousel>
          {opinions.map((opinion) => (
            <IndexOpinionCard
              containerSx={{
                mx: 1,
              }}
              opinion={opinion}
              key={opinion.id}
            />
          ))}
        </Carousel>
      </Container>
    </UFullWidthBackgroundBox>
  )
}
