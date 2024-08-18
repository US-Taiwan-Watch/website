'use client'

import clsx from 'clsx'
import { styled } from '@mui/material/styles'
import ULogo from '@/common/components/atoms/ULogo'
import { Box, Menu, MenuItem, Typography } from '@mui/material'
import Link from 'next/link'
import UButton from '@/common/components/atoms/UButton'
import UIconButton from '@/common/components/atoms/UIconButton'
import { USTWTheme } from '@/common/lib/mui/theme'

import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined'
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import React, { useRef, useState } from 'react'
import useNavItems, { HeaderNavItem } from './useNavItems'

const HEADER_HEIGHT = '70px'

interface HeaderProps {
  className?: string;
  onProfileClick?: () => void;
  onSearchClick?: () => void;
}

const StyledHeader = styled('header')(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  height: HEADER_HEIGHT,
  margin: `${theme.spacing(4.5)} auto`,
  '& #nav-item-menu': {
    zIndex: 1000,
  },
}))

const StyledHeaderContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  zIndex: 1300,
  width: '100%',
  borderRadius: '100px',
  backgroundColor: (theme as USTWTheme).color.header.background,
  backdropFilter: 'blur(20px)',
  WebkitBackdropFilter: 'blur(20px)', // For Safari support
  padding: `${theme.spacing(2)} ${theme.spacing(4)}`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  '& .nav-item': {
    fontWeight: 600,
    height: HEADER_HEIGHT,
    color: (theme as USTWTheme).color.header.text,
    '&:hover': {
      backgroundColor: 'transparent',
      color: (theme as USTWTheme).color.header.textHover,
    },
    '& .MuiButton-icon': {
      marginLeft: 0,
    },
    '&.active': {
      color: (theme as USTWTheme).color.header.textActive,
    },
    '& .MuiSvgIcon-root': {
      fontSize: '18px',
    },
  },
  '& .icon-button': {
    border: 'none',
  },
  '& .donation-button': {
    backgroundColor: (theme as USTWTheme).color.header.donationButton,
    color: (theme as USTWTheme).color.header.donationButtonText,
    '&:hover': {
      backgroundColor: (theme as USTWTheme).color.header.donationButtonHover,
      color: (theme as USTWTheme).color.header.donationButtonTextHover,
    },
  },
}))

const StyledNavMenu = styled(Menu)(({ theme }) => ({
  '& .MuiPaper-root': {
    width: '180px',
    paddingTop: HEADER_HEIGHT,
    marginTop: `-${HEADER_HEIGHT}`,
    backgroundColor: (theme as USTWTheme).color.header.menuBackground,
    transform: 'translateX(-90px) !important',
    borderTopLeftRadius: '0px',
    borderTopRightRadius: '0px',
    borderBottomLeftRadius: '30px',
    borderBottomRightRadius: '30px',
    boxShadow: '0px 4px 20px 0px #0000000D',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: '1px',
      backgroundColor: 'transparent',
      boxShadow: 'none',
    },
  },
  '& .MuiList-root': {
    paddingTop: 0,
  },
  '& .MuiMenuItem-root': {
    padding: `${theme.spacing(1.5)} ${theme.spacing(4)}`,
    justifyContent: 'center',
    '&:not(:last-child)': {
      borderBottom: `1px solid ${(theme as USTWTheme).color.grey[400]}`,
    },
    '& a': {
      textDecoration: 'none',
      color: (theme as USTWTheme).color.header.textActive,
    },
  },
}))

const Header = ({ className, onProfileClick, onSearchClick }: HeaderProps) => {
  const { navItems } = useNavItems()
  const [menuOpenNavItem, setMenuOpenNavItem] = useState<HeaderNavItem | null>(
    null
  )
  const [navItemAnchorEl, setNavItemAnchorEl] = useState<null | HTMLElement>(
    null
  )
  const navMenuOpen = Boolean(navItemAnchorEl)

  const handleNavItemClick = (
    event: React.MouseEvent<HTMLElement>,
    item: HeaderNavItem
  ) => {
    setNavItemAnchorEl(event.currentTarget)
    setMenuOpenNavItem(item)
  }
  const handleNavMenuClose = () => {
    setNavItemAnchorEl(null)
    setMenuOpenNavItem(null)
  }

  const headerRef = useRef<HTMLHeadElement>(null)

  return (
    <StyledHeader ref={headerRef}>
      <StyledHeaderContainer
        className={className}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        gap={2}
        zIndex={10}
      >
        {/** 左側 */}
        <Box display="flex" alignItems="center" gap={1}>
          <ULogo size="small" />
          <Typography fontWeight={700}>USTW</Typography>
        </Box>
        {/** 中間 */}
        <Box height="100%" display="flex" alignItems="center" gap={1}>
          {navItems.map((item) =>
            item.type === 'link'
              ? (
                <Link href={item.href} key={item.id}>
                  <UButton
                  className={clsx('nav-item', {
                    active: item.id === menuOpenNavItem?.id,
                  })}
                  variant="text"
                  key={item.id}
                >
                    {item.title}
                  </UButton>
                </Link>
                )
              : (
                <UButton
                className={clsx('nav-item nav-button', {
                  active: item.id === menuOpenNavItem?.id,
                })}
                variant="text"
                key={item.id}
                endIcon={<KeyboardArrowDownOutlinedIcon />}
                onClick={(event) => handleNavItemClick(event, item)}
              >
                  {item.title}
                </UButton>
                )
          )}
          {navMenuOpen &&
            menuOpenNavItem &&
            menuOpenNavItem.type === 'list' && (
              <StyledNavMenu
                className="nav-menu"
                id="nav-item-menu"
                anchorEl={navItemAnchorEl}
                open={navMenuOpen}
                onClose={handleNavMenuClose}
                MenuListProps={{
                  'aria-labelledby': 'nav-button',
                }}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'center',
                }}
                container={headerRef.current}
              >
                {menuOpenNavItem?.list.map((subItem) => (
                  <MenuItem onClick={handleNavMenuClose} key={subItem.id}>
                    {subItem.type === 'link'
                      ? (
                        <Link href={subItem.href}>
                          <Typography fontWeight={700}>
                            {subItem.title}
                          </Typography>
                        </Link>
                        )
                      : (
                        <Typography fontWeight={700}>{subItem.title}</Typography>
                        )}
                  </MenuItem>
                ))}
              </StyledNavMenu>
          )}
        </Box>
        {/** 右側 */}
        <Box display="flex" alignItems="center" gap={1}>
          <UIconButton
            className="nav-item icon-button"
            variant="outlined"
            color="default"
            onClick={onProfileClick}
          >
            <AccountBoxOutlinedIcon />
          </UIconButton>
          <UIconButton
            className="nav-item icon-button"
            variant="outlined"
            color="default"
            onClick={onSearchClick}
          >
            <SearchOutlinedIcon />
          </UIconButton>
          <Link href="/#">
            <UButton className="donation-button" variant="contained" rounded>
              Donation
            </UButton>
          </Link>
        </Box>
      </StyledHeaderContainer>
    </StyledHeader>
  )
}

export default Header
