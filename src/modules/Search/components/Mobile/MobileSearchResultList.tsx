import { Box, Icon, Typography } from '@mui/material'
import {
  SearchSuggestion,
  SearchSuggestionUtils,
} from '@/modules/Search/business/SearchSuggestion'
import { styled } from '@/common/lib/mui/theme'
import Link from 'next/link'
import { SearchIcon } from '@/common/styles/assets/Icons'

interface MobileSearchResultProps {
  className?: string
  suggestions: Array<SearchSuggestion>
}

const StyledContainer = styled(Box)(() => ({
  width: '100%',
  display: 'flex',
}))

const StyledResultContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
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
    color: theme.color.searchBar.mobileResultItemText,
    fontWeight: 600,
  },
}))

const StyledIcon = styled(Icon)(({ theme }) => ({
  color: theme.color.grey[4000],
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

const MobileSearchResultList = ({
  suggestions,
  className,
}: MobileSearchResultProps) => {
  return (
    <StyledContainer className={className}>
      <StyledResultContainer>
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
  )
}

export default MobileSearchResultList
