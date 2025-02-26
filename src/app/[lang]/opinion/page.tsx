import UFullWidthBackgroundBox from '@/common/components/atoms/UFullWidthBackgroundBox'
import {
  ArticlesQuery,
  ArticlesQueryVariables,
} from '@/common/lib/graphql/__generated__/graphql'
import { query } from '@/common/lib/graphql/ServerApolloClient'
import { Language } from '@/common/lib/i18n/types'
import { OpinionUtils } from '@/modules/Opinion/business/Opinion'
import OpinionLandingBannerCards from '@/modules/Opinion/components/OpinionLanding/OpinionLandingBannerCards'
import OpinionPostSection from '@/modules/Opinion/components/OpinionLanding/OpinionPostSection'
import OpinionNavbar from '@/modules/Opinion/components/OpinionNavbar'
import { QUERY_ARTICLES } from '@/modules/Opinion/graphql/gql'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import { isNull } from 'lodash-es'

const OPINION_LANDING_BANNER_CARDS_LIMIT = 4

interface OpinionPageProps {
  params: {
    lang: Language
  }
}

export default async function Opinion({ params }: OpinionPageProps) {
  const { data } = await query<ArticlesQuery, ArticlesQueryVariables>({
    query: QUERY_ARTICLES,
    variables: {
      limit: OPINION_LANDING_BANNER_CARDS_LIMIT,
      where: {
        isFeatured: {
          equals: true,
        },
      },
    },
  })

  const landingBannerOpinions =
    data?.Articles?.docs
      ?.filter((article) => !isNull(article))
      .map((article) => OpinionUtils.parse(params.lang, article)) ?? []

  return (
    <Container maxWidth="lg">
      <Stack>
        <UFullWidthBackgroundBox>
          <OpinionNavbar />
        </UFullWidthBackgroundBox>
        {landingBannerOpinions.length > 0 && (
          <OpinionLandingBannerCards opinions={landingBannerOpinions} />
        )}
        <OpinionPostSection />
      </Stack>
    </Container>
  )
}
