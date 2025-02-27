'use client'

import UCategoryChip from '@/common/components/atoms/UCategoryChip'
import UHStack from '@/common/components/atoms/UHStack'
import LandingSectionWrapper from '@/common/components/elements/Landing/LandingSectionWrapper'
import {
  ArticlesQuery,
  ArticlesQueryVariables,
} from '@/common/lib/graphql/__generated__/graphql'
import { Language } from '@/common/lib/i18n/types'
import { USTWTheme } from '@/common/lib/mui/theme'
import CommonUtils from '@/modules/Common/Common.utils'
import { OpinionUtils } from '@/modules/Opinion/business/Opinion'
import OpinionPostCards, {
  OpinionPostCardsSkeleton,
} from '@/modules/Opinion/components/OpinionPostCards'
import { QUERY_ARTICLES } from '@/modules/Opinion/graphql/gql'
import useOpinionStore from '@/modules/Opinion/store/useOpinionStore'
import { useQuery } from '@apollo/client'
import { useTheme } from '@mui/material'
import Stack from '@mui/material/Stack'
import { isNull } from 'lodash-es'
import { useParams } from 'next/navigation'
import { useMemo, useState } from 'react'

const OpinionPostSection = () => {
  const { lang } = useParams<{ lang: Language }>()
  const theme = useTheme<USTWTheme>()
  const [activeTagId, setActiveTagId] = useState<string | undefined>()
  const landingTags = useOpinionStore.use.landingTags()

  const queryVariables = useMemo<ArticlesQueryVariables>(
    () => ({
      limit: 10,
      where: {
        ...(activeTagId && {
          tags: {
            equals: activeTagId ?? '',
          },
        }),
      },
    }),
    [activeTagId]
  )

  const { loading, data } = useQuery<ArticlesQuery, ArticlesQueryVariables>(
    QUERY_ARTICLES,
    {
      variables: queryVariables,
    }
  )

  const articles = data?.Articles
  const opinions =
    articles?.docs
      ?.filter((article) => !isNull(article))
      .map((article) => OpinionUtils.parse(lang, article)) ?? []

  return (
    <LandingSectionWrapper
      backgroundColor={theme.color.neutral[100]}
      contentWrapperSx={{
        paddingTop: theme.spacing(10),
        paddingBottom: theme.spacing(15),
      }}
    >
      <Stack spacing={8}>
        {/** Tags */}
        <UHStack gap={2} flexWrap="wrap">
          {landingTags.map((tag) => {
            const isActive = activeTagId === tag.id

            return (
              <UCategoryChip
                key={tag.id}
                label={
                  tag.i18n?.[CommonUtils.parseAPII18nKey(lang)]?.name ?? ''
                }
                active={isActive}
                onClick={() => {
                  if (isActive) {
                    setActiveTagId(undefined)
                  } else {
                    setActiveTagId(tag.id ?? undefined)
                  }
                }}
              />
            )
          })}
        </UHStack>

        {/** Posts */}
        {loading ? (
          <OpinionPostCardsSkeleton count={10} />
        ) : (
          <OpinionPostCards opinions={opinions} />
        )}
      </Stack>
    </LandingSectionWrapper>
  )
}

export default OpinionPostSection
