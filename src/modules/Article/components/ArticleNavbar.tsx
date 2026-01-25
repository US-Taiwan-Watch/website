'use client'

import UContainer from '@/common/components/atoms/UContainer'
import UHStack from '@/common/components/atoms/UHStack'
import { USTWTheme } from '@/common/lib/mui/theme'
import { ArticleUtils, ArticleType } from '@/modules/Article/business/Article'
import { ArticleCategory } from '@/modules/Article/business/ArticleCategory'
import { Box, Typography, useTheme } from '@mui/material'
import Link from 'next/link'

interface ArticleNavbarProps {
  categories: ArticleCategory[]
  activeId?: string
}

const ArticleNavbar = ({ categories, activeId }: ArticleNavbarProps) => {
  const theme = useTheme<USTWTheme>()

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
          {categories.map((item) => (
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
