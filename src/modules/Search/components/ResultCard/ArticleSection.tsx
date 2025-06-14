import {
  SearchResult,
  SearchResultType,
} from '@/modules/Search/business/SearchResult'
import { Stack, Typography } from '@mui/material'
import { memo } from 'react'
import ArticleCategories from '@/modules/Article/components/ArticleCategories'
import UHeightLimitedText from '@/common/components/atoms/UHeightLimitedText'

type ArticleSectionProps = {
  result:
    | Extract<SearchResult, { type: SearchResultType.Article }>
    | Extract<SearchResult, { type: SearchResultType.Ketagalan }>
}

const ArticleSection = ({ result }: ArticleSectionProps) => {
  return (
    <Stack
      gap={{
        xs: 0.75,
        lg: 1.5,
      }}
    >
      <ArticleCategories article={result.value} />
      <Typography
        sx={{
          fontSize: {
            xs: '0.875rem',
            lg: '1.5rem',
          },
          fontWeight: 600,
          color: 'grey.3100',
        }}
      >
        <span
          dangerouslySetInnerHTML={{
            __html: result.highlights.title,
          }}
        />
      </Typography>
      <UHeightLimitedText
        maxLine={4}
        sx={{
          fontSize: {
            xs: '0.75rem',
            lg: '1rem',
          },
          fontWeight: 500,
          color: 'grey.3800',
        }}
      >
        <span
          dangerouslySetInnerHTML={{
            __html: result.highlights.description,
          }}
        />
      </UHeightLimitedText>
    </Stack>
  )
}

export default memo(ArticleSection)
