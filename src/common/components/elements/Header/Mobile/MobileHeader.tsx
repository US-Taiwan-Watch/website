'use client'

import ULogo from '@/common/components/atoms/ULogo'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { styled } from '@/common/lib/mui/theme'
import React, { useMemo, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import { HeaderProps } from '@/common/components/elements/Header'
import UIconButton from '@/common/components/atoms/UIconButton'
import {
  SearchIcon,
  ProfileIcon,
  MenuIcon,
  CloseIcon,
} from '@/common/styles/assets/Icons'
import MobileNavMenu from '@/common/components/elements/Header/Mobile/MobileNavMenu'
import MobileSearchMenu from '@/modules/Search/components/Mobile/MobileSearchMenu'
import useHeaderAccount from '@/common/components/elements/Header/useHeaderAccount'
import useURouterClient from '@/common/lib/router/useURouterClient'
import { RouteName } from '@/common/lib/router/routes'

const StyledHeaderContainer = styled(Container)(({ theme }) => ({
  position: 'sticky',
  top: theme.spacing(2),
  zIndex: theme.constants.zIndex.header,
  margin: `${theme.spacing(2)} auto`,
}))

const StyledHeader = styled('header')(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  height: `${theme.constants.headerHeight.sm}px`,
}))

const StyledHeaderWrapper = styled(Box)(({ theme }) => ({
  position: 'relative',
  zIndex: theme.constants.zIndex.header,
  width: '100%',
  borderRadius: '30px',
  backgroundColor: theme.color.header.background,
  backdropFilter: 'blur(20px)',
  WebkitBackdropFilter: 'blur(20px)', // For Safari support
  padding: `${theme.spacing(1.75)} ${theme.spacing(2.5)}`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  '& .icon-button': {
    border: 'none',
  },
  boxShadow: '0px 4px 20px 0px #0000000D',
}))

const MobileHeader = ({ containerClassName, className }: HeaderProps) => {
  const { resolveRouteUrl } = useURouterClient()
  const router = useRouter()
  const { handleAccountClick } = useHeaderAccount()
  const headerRef = useRef<HTMLHeadElement>(null)

  // ----- 點擊 Menu 按鈕 -----
  const [isNavMenuOpen, setIsNavMenuOpen] = useState(false)
  const handleNavMenuClick = () => {
    setIsNavMenuOpen(true)
  }
  const handleNavMenuClose = () => {
    setIsNavMenuOpen(false)
  }

  // ----- 點擊 Search 按鈕 -----
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const handleSearchClick = () => {
    setIsSearchOpen(true)
  }
  const handleSearchClose = () => {
    setIsSearchOpen(false)
  }

  // ----- 點擊 Profile 按鈕 -----
  const handleProfileClick = () => {
    handleAccountClick()
  }

  // ----- 關閉按鈕 -----
  const isCloseButtonShown = useMemo(() => {
    return isNavMenuOpen || isSearchOpen
  }, [isNavMenuOpen, isSearchOpen])
  const handleCloseButtonClick = () => {
    handleNavMenuClose()
    handleSearchClose()
  }

  return (
    <>
      <StyledHeaderContainer maxWidth="md" className={containerClassName}>
        <StyledHeader ref={headerRef}>
          <StyledHeaderWrapper
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
                router.push(resolveRouteUrl({ name: RouteName.Home }))
              }}
            >
              <ULogo size="xs" />
              <Typography fontWeight={700}>USTW</Typography>
            </Box>
            {/** 右側 */}
            <Box display="flex" alignItems="center" gap={1}>
              <UIconButton
                className="nav-item icon-button nav-item__profile"
                variant="outlined"
                color="default"
                onClick={handleProfileClick}
                size="small"
              >
                <ProfileIcon width={14} />
              </UIconButton>
              <UIconButton
                className="nav-item icon-button nav-item__search"
                variant="outlined"
                color="default"
                onClick={handleSearchClick}
                size="small"
              >
                <SearchIcon />
              </UIconButton>
              {isCloseButtonShown ? (
                <UIconButton
                  className="nav-item icon-button nav-item__close"
                  variant="outlined"
                  color="default"
                  onClick={handleCloseButtonClick}
                  size="small"
                >
                  <CloseIcon />
                </UIconButton>
              ) : (
                <UIconButton
                  className="nav-item icon-button nav-item__menu"
                  variant="outlined"
                  color="default"
                  onClick={handleNavMenuClick}
                  size="small"
                >
                  <MenuIcon />
                </UIconButton>
              )}
            </Box>
          </StyledHeaderWrapper>
        </StyledHeader>
      </StyledHeaderContainer>
      {isNavMenuOpen && (
        <MobileNavMenu
          anchorEl={headerRef.current}
          onClose={handleNavMenuClose}
          clickAwayClassNameWhiteList={['nav-item__menu', 'nav-item__close']}
        />
      )}
      {isSearchOpen && (
        <MobileSearchMenu
          anchorEl={headerRef.current}
          onClose={handleSearchClose}
          clickAwayClassNameWhiteList={['nav-item__search', 'nav-item__close']}
        />
      )}
    </>
  )
}

export default MobileHeader
