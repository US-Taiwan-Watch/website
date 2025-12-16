'use client'

import HeaderPopper from '@/common/components/elements/Header/HeaderPopper'
import { styled } from '@/common/lib/mui/theme'
import Stack from '@mui/material/Stack'
import Input from '@mui/material/Input'
import Box from '@mui/material/Box'
import Icon from '@mui/material/Icon'
import { memo, useRef } from 'react'
import { SearchIcon } from '@/common/styles/assets/Icons'
import useSearch from '@/modules/Search/hooks/useSearch'
import MobileSearchResultList from '@/modules/Search/components/Mobile/MobileSearchResultList'
import type React from 'react'

interface MobileSearchMenuProps {
  anchorEl: HTMLElement | null
  clickAwayClassNameWhiteList?: string[]
  onClose?: () => void
}

const StyledContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  backgroundColor: theme.color.header.mobileNavMenuBackground,
  borderRadius: '30px',
  paddingTop: `${theme.constants.headerHeight.sm}px`,
  paddingBottom: theme.spacing(2.75),
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
}))

const StyledInput = styled(Input)(({ theme }) => ({
  backgroundColor: theme.color.searchBar.inputBackground,
  borderRadius: '100px',
  padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
  height: '40px',
}))

const StyledIcon = styled(Icon)(({ theme }) => ({
  color: theme.color.grey[600],
  marginRight: theme.spacing(1),
}))

const MobileSearchMenu = ({
  anchorEl,
  clickAwayClassNameWhiteList,
  onClose,
}: MobileSearchMenuProps) => {
  const isComposingRef = useRef(false)
  const {
    searchQuery,
    handleSearchQueryChange,
    searchSuggestions,
    handleNavigateSearchPage,
    showLoadMore,
  } = useSearch()

  return (
    <HeaderPopper
      anchorEl={anchorEl}
      clickAwayClassNameWhiteList={clickAwayClassNameWhiteList}
      onClose={onClose}
    >
      <StyledContainer>
        <Stack width="100%">
          <StyledInput
            disableUnderline
            fullWidth
            startAdornment={
              <StyledIcon fontSize="small">
                <SearchIcon />
              </StyledIcon>
            }
            onChange={(e) => handleSearchQueryChange(e.target.value.trim())}
            onCompositionStart={() => {
              isComposingRef.current = true
            }}
            onCompositionEnd={() => {
              isComposingRef.current = false
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !isComposingRef.current) {
                handleNavigateSearchPage(searchQuery)
                onClose?.()
              }
            }}
            autoFocus
            sx={{
              marginTop: 1.5,
            }}
          />

          {searchSuggestions.length > 0 && (
            <MobileSearchResultList
              suggestions={searchSuggestions}
              onClose={onClose}
              showLoadMore={showLoadMore}
              onClickLoadMore={() => {
                handleNavigateSearchPage(searchQuery)
              }}
            />
          )}
        </Stack>
      </StyledContainer>
    </HeaderPopper>
  )
}
export default memo(MobileSearchMenu)
