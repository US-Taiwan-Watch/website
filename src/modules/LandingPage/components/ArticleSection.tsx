'use client'

import { Stack, useTheme } from '@mui/material'
import UHStack from '@/common/components/atoms/UHStack'
import UCategoryChip from '@/common/components/atoms/UCategoryChip'
import LandingSectionWrapper from '@/common/components/elements/Landing/LandingSectionWrapper'
import { SectionTitleWithLink } from '@/common/components/elements/Landing/SectionTitle'
import { OVERLAPPED_SECTION_PADDING_BOTTOM } from '@/modules/LandingPage/constants'
import { useState, useMemo } from 'react'
import ArticlePostCards, {
  ScrollableArticlePostCards,
} from '@/modules/Article/components/ArticlePostCards'
import { ArticleType, Article } from '@/modules/Article/business/Article'
import { useResponsive } from '@/common/lib/responsive/ResponsiveProvider'
import FullWidthScrollableListWrapper from '@/modules/LandingPage/components/FullWidthScrollableListWrapper'
import useTranslationClient from '@/common/lib/i18n/hooks/useTranslationClient'
import UKetagalanLogo from '@/common/components/atoms/UKetagalanLogo'
import { USTWTheme } from '@/common/lib/mui/theme'
import useURouterClient from '@/common/lib/router/useURouterClient'
import { RouteName } from '@/common/lib/router/routes'
import { Tag } from '@/modules/Common/business/Tag'

type ArticleSectionProps = {
  articleType: ArticleType
  defaultArticles: Article[]
  tags: Tag[]
  tagArticleMap: Record<string, Article[]>
}

const ArticleSection = ({
  articleType,
  defaultArticles,
  tags,
  tagArticleMap,
}: ArticleSectionProps) => {
  const { resolveRouteUrl } = useURouterClient()
  const theme = useTheme<USTWTheme>()
  const { t } = useTranslationClient('home')
  const { isMobile } = useResponsive()
  const [activeTagId, setActiveTagId] = useState<string | undefined>()
  const articles = useMemo(() => {
    if (activeTagId) {
      return tagArticleMap[activeTagId] ?? []
    }

    return defaultArticles
  }, [activeTagId, tagArticleMap, defaultArticles])

  return (
    <>
      <LandingSectionWrapper
        contentWrapperSx={{
          paddingBottom: `${OVERLAPPED_SECTION_PADDING_BOTTOM}px`,
        }}
        backgroundColor={
          articleType === ArticleType.Ketagalan
            ? theme.color.grey[1300]
            : undefined
        }
      >
        <SectionTitleWithLink
          title={t('section.articles.title')}
          renderTitle={
            articleType === ArticleType.Ketagalan
              ? () => <UKetagalanLogo />
              : undefined
          }
          link={
            articleType === ArticleType.Ketagalan
              ? resolveRouteUrl({ name: RouteName.KetagalanMedia })
              : resolveRouteUrl({ name: RouteName.Article })
          }
        />
        <Stack gap={5}>
          <UHStack gap={2}>
            {tags.map((tag) => (
              <UCategoryChip
                key={tag.id}
                label={tag.name}
                active={activeTagId === tag.id}
                onClick={() => {
                  if (activeTagId === tag.id) {
                    setActiveTagId(undefined)
                  } else {
                    setActiveTagId(tag.id ?? undefined)
                  }
                }}
              />
            ))}
          </UHStack>

          {/** Posts */}
          {isMobile ? (
            <FullWidthScrollableListWrapper>
              <ScrollableArticlePostCards articles={articles} forceCard />
            </FullWidthScrollableListWrapper>
          ) : (
            <ArticlePostCards articles={articles} forceCard />
          )}
        </Stack>
      </LandingSectionWrapper>
    </>
  )
}

export default ArticleSection
