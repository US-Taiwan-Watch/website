'use client'

import { styled } from '@/common/lib/mui/theme'
import { SearchIcon } from '@/common/styles/assets/Icons'
import { Box, Icon, Input } from '@mui/material'
import useSearch from '@/modules/Search/hooks/useSearch'
import { useCallback, useRef } from 'react'
import SearchResultList from '@/modules/Search/components/SearchPageSearchBar/SearchResultList'

const StyledIcon = styled(Icon)(({ theme }) => ({
  color: theme.color.grey[600],
  marginRight: theme.spacing(1),
}))

const StyledContainer = styled(Box)(() => ({
  width: '100%',
}))

const StyledInput = styled(Input)(({ theme }) => ({
  backgroundColor: theme.color.searchPageSearchBar.inputBackground,
  borderRadius: '100px',
  padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
  height: '40px',
  zIndex: 1001,
}))

const SearchPageSearchBar = () => {
  const boxRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const {
    searchQuery,
    handleSearchQueryChange,
    searchSuggestions,
    handleNavigateSearchPage,
  } = useSearch()

  const handleResultListClose = useCallback(() => {
    handleSearchQueryChange('')
  }, [handleSearchQueryChange])

  return (
    <Box
      ref={boxRef}
      className="search-bar"
      display="flex"
      flexDirection="column"
      width="100%"
      position="relative"
    >
      <StyledContainer
        display="flex"
        alignItems="center"
        justifyContent="center"
        gap={2}
      >
        <StyledInput
          ref={inputRef}
          disableUnderline
          fullWidth
          startAdornment={
            <StyledIcon fontSize="small">
              <SearchIcon />
            </StyledIcon>
          }
          onChange={(e) => handleSearchQueryChange(e.target.value)}
          autoFocus
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleNavigateSearchPage(searchQuery)
            }
          }}
        />
      </StyledContainer>
      {searchSuggestions.length > 0 && (
        <>
          <SearchResultList
            suggestions={searchSuggestions}
            anchorEl={boxRef.current}
            inputAnchorEl={inputRef.current}
            onClose={handleResultListClose}
          />
        </>
      )}
    </Box>
  )
}

export default SearchPageSearchBar
