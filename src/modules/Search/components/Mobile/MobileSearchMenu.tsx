'use client'

import HeaderPopper from '@/common/components/elements/Header/HeaderPopper'
import { styled } from '@/common/lib/mui/theme'
import Stack from '@mui/material/Stack'
import Input from '@mui/material/Input'
import Box from '@mui/material/Box'
import Icon from '@mui/material/Icon'
import { memo, useCallback } from 'react'
import { SearchIcon } from '@/common/styles/assets/Icons'
import useSearch from '@/modules/Search/hooks/useSearch'
import MobileSearchResultList from '@/modules/Search/components/Mobile/MobileSearchResultList'
import { debounce } from 'lodash-es'
import type React from 'react'

interface MobileSearchMenuProps {
  anchorEl: HTMLElement | null
  clickAwayClassNameWhiteList?: string[]
  onClose: () => void
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
  const { handleSearchQueryChange, handleSearch, searchResults, searched } =
    useSearch()

  const handleInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      handleSearchQueryChange(event)
      debounce(() => {
        handleSearch()
      }, 1000)()
    },
    [handleSearchQueryChange, handleSearch]
  )

  return (
    <HeaderPopper
      headerAnchorEl={anchorEl}
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
            onChange={handleInputChange}
            autoFocus
            sx={{
              marginTop: 1.5,
            }}
          />

          {searched && <MobileSearchResultList results={searchResults} />}
        </Stack>
      </StyledContainer>
    </HeaderPopper>
  )
}
export default memo(MobileSearchMenu)
