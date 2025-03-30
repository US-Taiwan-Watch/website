'use client'

import UButton from '@/common/components/atoms/UButton'
import { styled } from '@/common/lib/mui/theme'
import { SearchIcon } from '@/common/styles/assets/Icons'
import { Box, Icon, Input } from '@mui/material'
import useSearch from '@/modules/Search/hooks/useSearch'
import DesktopSearchResultList from '@/modules/Search/components/Desktop/DesktopSearchResultList'
import { useRef } from 'react'
import useTranslationClient from '@/common/lib/i18n/hooks/useTranslationClient'

interface DesktopSearchBarProps {
  className?: string
  /** 讓 SearchResultList 渲染在特定元件底下 */
  resultParentEl: HTMLElement | null
  /**
   * 點擊其他區域不會觸發 onClickAway
   * 例如：點擊 SearchBar 不會觸發 onClickAway
   */
  clickAwayClassNameWhiteList?: string[]
  onClose?: () => void
}

const StyledIcon = styled(Icon)(({ theme }) => ({
  color: theme.color.grey[600],
  marginRight: theme.spacing(1),
}))

const StyledContainer = styled(Box)(() => ({
  width: '100%',
}))

const StyledInput = styled(Input)(({ theme }) => ({
  backgroundColor: theme.color.searchBar.inputBackground,
  borderRadius: '100px',
  padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
  height: '40px',
}))

const StyledButton = styled(UButton)(({ theme }) => ({
  backgroundColor: theme.color.searchBar.searchButtonBackground,
  '&:hover': {
    backgroundColor: theme.color.searchBar.searchButtonBackground,
  },
}))

const DesktopSearchBar = ({
  resultParentEl,
  clickAwayClassNameWhiteList,
  onClose,
}: DesktopSearchBarProps) => {
  const { t } = useTranslationClient('search')
  const inputRef = useRef<HTMLInputElement>(null)
  const {
    searchQuery,
    handleSearchQueryChange,
    handleSearch,
    searchResults,
    searched,
  } = useSearch()

  return (
    <Box display="flex" flexDirection="column" width="100%">
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
          onChange={handleSearchQueryChange}
          autoFocus
        />
        <StyledButton
          variant="contained"
          rounded
          onClick={handleSearch}
          disabled={!searchQuery}
        >
          {t('submit.btn.title', { ns: 'search' })}
        </StyledButton>
      </StyledContainer>
      {searched && (
        <DesktopSearchResultList
          results={searchResults}
          headerAnchorEl={resultParentEl}
          inputAnchorEl={inputRef.current}
          clickAwayClassNameWhiteList={clickAwayClassNameWhiteList}
          onClose={onClose}
        />
      )}
    </Box>
  )
}

export default DesktopSearchBar
