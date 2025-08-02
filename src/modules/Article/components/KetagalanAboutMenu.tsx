'use client'

import React, { useMemo, useState } from 'react'
import { Typography, Menu, MenuItem, useTheme } from '@mui/material'
import { USTWTheme } from '@/common/lib/mui/theme'
import { RouteName } from '@/common/lib/router/routes'
import Link from 'next/link'
import useURouterClient from '@/common/lib/router/useURouterClient'
import useTranslationClient from '@/common/lib/i18n/hooks/useTranslationClient'

const KetagalanAboutMenu = () => {
  const { t } = useTranslationClient('header')
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const theme = useTheme<USTWTheme>()
  const open = Boolean(anchorEl)

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const { resolveRouteUrl } = useURouterClient()
  const aboutMenuItems = useMemo(() => {
    return [
      {
        name: t('navItem.about.footprints.title', { ns: 'header' }),
        href: resolveRouteUrl({
          name: RouteName.KetagalanAboutFootprints,
        }),
      },
      {
        name: t('navItem.about.projects.title', { ns: 'header' }),
        href: resolveRouteUrl({
          name: RouteName.KetagalanAboutProjects,
        }),
      },
      {
        name: 'Members',
        href: resolveRouteUrl({
          name: RouteName.KetagalanAboutMembers,
        }),
      },
    ]
  }, [t, resolveRouteUrl])

  return (
    <>
      <Typography
        variant="menu"
        fontWeight={500}
        sx={{
          color: theme.color.article.navText,
          cursor: 'pointer',
          whiteSpace: 'nowrap',
          '&:hover': {
            color: theme.color.article.navActiveText,
          },
        }}
        onClick={handleClick}
      >
        {t('navItem.about.title', { ns: 'header' })}
      </Typography>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'about-menu-button',
        }}
        sx={{
          '& .MuiPaper-root': {
            backgroundColor: theme.color.grey[900],
            borderRadius: 2,
            mt: 1,
          },
        }}
      >
        {aboutMenuItems.map((item) => (
          <MenuItem key={item.name} onClick={handleClose}>
            <Link
              href={item.href}
              style={{ textDecoration: 'none', width: '100%' }}
            >
              <Typography
                variant="menu"
                sx={{
                  color: theme.color.article.navText,
                  '&:hover': {
                    color: theme.color.article.navActiveText,
                  },
                }}
                fontWeight={500}
              >
                {item.name}
              </Typography>
            </Link>
          </MenuItem>
        ))}
      </Menu>
    </>
  )
}

export default KetagalanAboutMenu
