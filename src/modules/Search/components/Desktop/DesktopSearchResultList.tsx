import { Box, Icon, Typography } from '@mui/material'
import {
  SearchSuggestion,
  SearchSuggestionUtils,
} from '@/modules/Search/business/SearchSuggestion'
import { styled } from '@/common/lib/mui/theme'
import Link from 'next/link'
import { SearchIcon } from '@/common/styles/assets/Icons'
import HeaderPopper from '@/common/components/elements/Header/HeaderPopper'

interface DesktopSearchResultProps {
  className?: string
  suggestions: Array<SearchSuggestion>
  headerAnchorEl: HTMLElement | null
  inputAnchorEl: HTMLElement | null
  clickAwayClassNameWhiteList?: string[]
  onClose?: () => void
}

const StyledContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  backgroundColor: theme.color.searchBar.resultBackground,
  borderRadius: '30px',
  paddingBottom: theme.spacing(2),
  paddingTop: `${theme.constants.headerHeight.md}px`,
}))

const StyledResultContainer = styled(Box)(({ theme }) => ({
  margin: 'auto',
  padding: `${theme.spacing(2)} ${theme.spacing(2)}
   ${theme.spacing(1)} ${theme.spacing(4)}`,
  maxHeight: '300px',
  overflowY: 'auto',
  '& a': {
    textDecoration: 'none',
  },
}))

const StyledResultItem = styled(Box)(({ theme }) => ({
  padding: theme.spacing(1),
  borderBottom: `1px solid ${theme.color.grey[400]}`,
  '& .MuiTypography-root': {
    textDecoration: 'none',
    color: theme.color.searchBar.resultItemText,
  },
}))

const StyledIcon = styled(Icon)(({ theme }) => ({
  color: theme.color.grey[600],
}))

const StyledNoResultContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8),
  '& .no-result-title': {
    fontWeight: 600,
    fontSize: '1.75rem',
  },
  '& .no-result-subtitle': {
    color: theme.color.searchBar.noResultSubtitle,
    fontSize: '1rem',
  },
}))

const DesktopSearchResultList = ({
  suggestions,
  className,
  headerAnchorEl,
  inputAnchorEl,
  clickAwayClassNameWhiteList,
  onClose,
}: DesktopSearchResultProps) => {
  return (
    <HeaderPopper
      headerAnchorEl={headerAnchorEl}
      clickAwayClassNameWhiteList={clickAwayClassNameWhiteList}
      onClose={onClose}
    >
      <StyledContainer className={className}>
        <StyledResultContainer
          width={inputAnchorEl?.getBoundingClientRect().width}
        >
          {suggestions.length > 0 ? (
            suggestions.map((suggestion) => (
              <Link
                href={SearchSuggestionUtils.getHref(suggestion.value)}
                key={suggestion.value}
              >
                <StyledResultItem display="flex" gap={1}>
                  <StyledIcon fontSize="small">
                    <SearchIcon />
                  </StyledIcon>
                  <Typography>{suggestion.value}</Typography>
                </StyledResultItem>
              </Link>
            ))
          ) : (
            <StyledNoResultContainer
              display="flex"
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
            >
              <Typography className="no-result-title">
                No results found
              </Typography>
              <Typography className="no-result-subtitle">
                Please change the search keywords and search again
              </Typography>
            </StyledNoResultContainer>
          )}
        </StyledResultContainer>
      </StyledContainer>
    </HeaderPopper>
  )
}

export default DesktopSearchResultList
