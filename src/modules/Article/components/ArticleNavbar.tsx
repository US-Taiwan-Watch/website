'use client'

import UHStack from '@/common/components/atoms/UHStack'
import { USTWTheme } from '@/common/lib/mui/theme'
import { ArticleUtils, ArticleType } from '@/modules/Article/business/Article'
import useArticleStore from '@/modules/Article/store/useArticleStore'
import { Box, Typography, useTheme } from '@mui/material'
import Link from 'next/link'

interface ArticleNavbarProps {
  articleType: ArticleType
  activeId?: string
}

const ArticleNavbar = ({ articleType, activeId }: ArticleNavbarProps) => {
  const theme = useTheme<USTWTheme>()

  const highlightedCategories = useArticleStore.use.highlightedCategories()

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
      <UHStack
        spacing={6}
        sx={{
          color: theme.color.article.navText,
        }}
      >
        {highlightedCategories.map((item) => (
          <Link
            href={ArticleUtils.getCategoryLink(articleType, item)}
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
    </Box>
  )
}

export default ArticleNavbar
