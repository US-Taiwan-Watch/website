'use client'

import UContainer from '@/common/components/atoms/UContainer'
import UHStack from '@/common/components/atoms/UHStack'
import UKetagalanLogo from '@/common/components/atoms/UKetagalanLogo'
import { USTWTheme } from '@/common/lib/mui/theme'
import { useResponsive } from '@/common/lib/responsive/ResponsiveProvider'
import { ArticleUtils, ArticleType } from '@/modules/Article/business/Article'
import { Box, Divider, Typography, useTheme } from '@mui/material'
import Link from 'next/link'
import KetagalanAboutMenu from '@/modules/Article/components/KetagalanAboutMenu'
import { ArticleCategory } from '@/modules/Article/business/ArticleCategory'

const KetagalanNavLinks = ({
  categories,
  activeId,
}: {
  categories: ArticleCategory[]
  activeId?: string
}) => {
  const theme = useTheme<USTWTheme>()

  return (
    <UHStack
      spacing={{
        xs: 2,
        md: 6,
      }}
      sx={{
        color: theme.color.article.navText,
      }}
    >
      {categories.map((item) => (
        <Link
          href={ArticleUtils.getCategoryLink(ArticleType.Ketagalan, item)}
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
              '&:hover': {
                color: theme.color.article.navActiveText,
              },
            }}
            fontWeight={500}
          >
            {item.label}
          </Typography>
        </Link>
      ))}
      <KetagalanAboutMenu />
    </UHStack>
  )
}

interface KetagalanArticleNavbarProps {
  categories: ArticleCategory[]
  activeId?: string
}

const KetagalanArticleNavbar = ({
  categories,
  activeId,
}: KetagalanArticleNavbarProps) => {
  const { isMobile } = useResponsive()
  const theme = useTheme<USTWTheme>()

  if (isMobile) {
    return (
      <Box
        display="flex"
        alignItems="center"
        p={2}
        sx={{
          borderBottom: `1.5px solid ${theme.color.article.navDivider}`,
          overflowX: 'auto',
        }}
      >
        <UKetagalanLogo sx={{ width: 200, height: 'auto' }} />
        <Divider orientation="vertical" flexItem sx={{ mx: 2 }} />
        <KetagalanNavLinks categories={categories} activeId={activeId} />
      </Box>
    )
  }

  return (
    <Box
      sx={{
        borderBottom: `1.5px solid ${theme.color.article.navDivider}`,
      }}
    >
      <UContainer>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          py={2}
        >
          <KetagalanNavLinks categories={categories} activeId={activeId} />
          <UKetagalanLogo sx={{ width: 200, height: 'auto' }} />
        </Box>
      </UContainer>
    </Box>
  )
}

export default KetagalanArticleNavbar
