'use client'
import { Article, ArticleUtils } from '@/modules/Article/business/Article'

import UTagList from '@/common/components/atoms/UTagList'
import Link from 'next/link'
import UButton from '@/common/components/atoms/UButton'
import { USTWTheme } from '@/common/lib/mui/theme'
import { useTheme } from '@mui/material'
import { memo } from 'react'

type ArticleCategoriesProps = {
  article: Article
}

const ArticleCategories = ({ article }: ArticleCategoriesProps) => {
  const theme = useTheme<USTWTheme>()

  if (!article.categories) return null

  return (
    <UTagList
      tags={article.categories.map((category) => (
        <Link
          href={ArticleUtils.getCategoryLink(article.type, category)}
          key={category.id}
        >
          <UButton
            variant="outlined"
            size="small"
            sx={{
              padding: theme.spacing(0.5, 1),
              minWidth: 'fit-content',
              lineHeight: 1,
              borderColor: theme.color.article.cardCategoryText,
              color: theme.color.article.cardCategoryText,
            }}
            className="category-tag"
          >
            {category.label}
          </UButton>
        </Link>
      ))}
      containerProps={{
        gap: 1,
      }}
      maxTags={2}
    />
  )
}

export default memo(ArticleCategories)
