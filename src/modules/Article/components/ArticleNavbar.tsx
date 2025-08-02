'use client'

import UContainer from '@/common/components/atoms/UContainer'
import UHStack from '@/common/components/atoms/UHStack'
import { USTWTheme } from '@/common/lib/mui/theme'
import { ArticleUtils, ArticleType } from '@/modules/Article/business/Article'
import useArticleStore from '@/modules/Article/store/useArticleStore'
import { Box, Typography, useTheme } from '@mui/material'
import Link from 'next/link'

interface ArticleNavbarProps {
  activeId?: string
}

const ArticleNavbar = ({ activeId }: ArticleNavbarProps) => {
  const theme = useTheme<USTWTheme>()

  const articleHighlightedCategories =
    useArticleStore.use.articleHighlightedCategories()

  return (
    <Box
      display="flex"
      alignItems="center"
      padding={2}
      sx={{
        borderBottom: `1.5px solid ${theme.color.article.navDivider}`,
        overflowX: 'auto',
        justifyContent: {
          xs: 'flex-start',
          md: 'center',
        },
      }}
    >
      <UContainer>
        <UHStack
          spacing={6}
          sx={{
            color: theme.color.article.navText,
          }}
        >
          {articleHighlightedCategories.map((item) => (
            <Link
              href={ArticleUtils.getCategoryLink(ArticleType.Article, item)}
              key={item.id}
              style={{
                whiteSpace: 'nowrap',
              }}
            >
              <Typography
                variant="menu"
                sx={{
                  color:
                    activeId === item.id
                      ? theme.color.article.navActiveText
                      : 'inherit',
                }}
                fontWeight={500}
              >
                {item.label}
              </Typography>
            </Link>
          ))}
        </UHStack>
      </UContainer>
    </Box>
  )
}

export default ArticleNavbar
