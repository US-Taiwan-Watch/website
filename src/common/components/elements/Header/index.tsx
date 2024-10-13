'use client'

import clsx from 'clsx'
import ULogo from '@/common/components/atoms/ULogo'
import { Box, Menu, MenuItem, Typography } from '@mui/material'
import Link from 'next/link'
import UButton from '@/common/components/atoms/UButton'
import UIconButton from '@/common/components/atoms/UIconButton'
import { styled } from '@/common/lib/mui/theme'
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined'
import React, { useRef, useState } from 'react'
import useNavItems, { HeaderNavItem } from './useNavItems'
import SearchBar from '@/modules/Search/components/SearchBar'
import { ProfileIcon, SearchIcon } from '@/common/styles/assets/Icons'
import { ROUTES } from '@/routes'
import { useRouter } from 'next/navigation'
import useFreezeScreen from '@/common/hooks/useFreezeScreen'

interface HeaderProps {
  className?: string
  onProfileClick?: () => void
  onSearchClick?: () => void
}

const StyledHeader = styled('header')(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  [theme.breakpoints.up('xs')]: {
    height: `${theme.constants.headerHeight.xs}px`,
  },
  [theme.breakpoints.up('md')]: {
    height: `${theme.constants.headerHeight.md}px`,
  },
  margin: `${theme.spacing(4.5)} auto`,
  '& #nav-item-menu': {
    zIndex: theme.constants.zIndex.headerNavItem,
  },
}))

const StyledHeaderContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  zIndex: theme.constants.zIndex.header,
  width: '100%',
  borderRadius: '30px',
  backgroundColor: theme.color.header.background,
  backdropFilter: 'blur(20px)',
  WebkitBackdropFilter: 'blur(20px)', // For Safari support
  padding: `${theme.spacing(2)} ${theme.spacing(4)}`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  '& .nav-item': {
    fontWeight: 600,
    [theme.breakpoints.up('xs')]: {
      height: `${theme.constants.headerHeight.xs}px`,
    },
    [theme.breakpoints.up('md')]: {
      height: `${theme.constants.headerHeight.md}px`,
    },
    color: theme.color.header.text,
    '&:hover': {
      backgroundColor: 'transparent',
      color: theme.color.header.textHover,
    },
    '& .MuiButton-icon': {
      marginLeft: 0,
    },
    '&.active': {
      color: theme.color.header.textActive,
    },
    '& .MuiSvgIcon-root': {
      fontSize: '18px',
    },
  },
  '& .icon-button': {
    border: 'none',
  },
  '& .donation-button': {
    backgroundColor: theme.color.header.donationButton,
    color: theme.color.header.donationButtonText,
    '&:hover': {
      backgroundColor: theme.color.header.donationButtonHover,
      color: theme.color.header.donationButtonTextHover,
    },
  },
  boxShadow: '0px 4px 20px 0px #0000000D',
}))

const StyledNavMenu = styled(Menu)(({ theme }) => ({
  '& .MuiPaper-root': {
    width: '180px',
    [theme.breakpoints.up('xs')]: {
      paddingTop: `${theme.constants.headerHeight.xs}px`,
      marginTop: `-${theme.constants.headerHeight.xs}px`,
    },
    [theme.breakpoints.up('md')]: {
      paddingTop: `${theme.constants.headerHeight.md}px`,
      marginTop: `-${theme.constants.headerHeight.md}px`,
    },
    backgroundColor: theme.color.header.menuBackground,
    transform: 'translateX(-90px) !important',
    borderRadius: '30px',
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
      borderBottom: `1px solid ${theme.color.grey[400]}`,
    },
    '& a': {
      textDecoration: 'none',
      color: theme.color.header.textActive,
    },
  },
}))

const Header = ({ className, onProfileClick, onSearchClick }: HeaderProps) => {
  const { freezeScreen, unfreezeScreen } = useFreezeScreen()
  const router = useRouter()
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

    freezeScreen()
  }
  const handleNavMenuClose = () => {
    setNavItemAnchorEl(null)
    setMenuOpenNavItem(null)

    unfreezeScreen()
  }

  const headerRef = useRef<HTMLHeadElement>(null)

  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const handleSearchClick = () => {
    handleNavMenuClose()
    setIsSearchOpen(true)
    onSearchClick?.()
  }
  const handleSearchClose = () => {
    setIsSearchOpen(false)
  }

  return (
    <StyledHeader ref={headerRef}>
      <StyledHeaderContainer
        className={className}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        gap={2}
      >
        {/** 左側 */}
        <Box
          display="flex"
          alignItems="center"
          gap={1}
          sx={{ cursor: 'pointer' }}
          onClick={() => {
            router.push(ROUTES.HOME)
          }}
        >
          <ULogo size="small" />
          <Typography fontWeight={700}>USTW</Typography>
        </Box>
        {isSearchOpen ? (
          <SearchBar
            resultParentEl={headerRef.current}
            onClickAway={handleSearchClose}
          />
        ) : (
          <>
            {/** 中間 */}
            <Box height="100%" display="flex" alignItems="center" gap={1}>
              {navItems.map((item) =>
                item.type === 'link' ? (
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
                ) : (
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
                    /**
                     * 避免 menu 被 header 遮擋，做出 header 與 menu 重疊的效果
                     * 但同時會導致 menu 的 overlay 不為 body 的 第一層 children
                     * 因此需要將 body 固定
                     */
                    container={headerRef.current}
                  >
                    {menuOpenNavItem?.list.map((subItem) => (
                      <MenuItem onClick={handleNavMenuClose} key={subItem.id}>
                        {subItem.type === 'link' ? (
                          <Link href={subItem.href}>
                            <Typography fontWeight={700}>
                              {subItem.title}
                            </Typography>
                          </Link>
                        ) : (
                          <Typography fontWeight={700}>
                            {subItem.title}
                          </Typography>
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
                size="small"
              >
                <ProfileIcon width={14} />
              </UIconButton>
              <UIconButton
                className="nav-item icon-button"
                variant="outlined"
                color="default"
                onClick={handleSearchClick}
                size="small"
              >
                <SearchIcon />
              </UIconButton>
              <Link href={ROUTES.HOME}>
                <UButton
                  className="donation-button"
                  variant="contained"
                  rounded
                >
                  Donation
                </UButton>
              </Link>
            </Box>
          </>
        )}
      </StyledHeaderContainer>
    </StyledHeader>
  )
}

export default Header
