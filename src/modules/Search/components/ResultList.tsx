import { SearchSuggestion } from '@/modules/Search/business/SearchSuggestion'
import { Box, Typography, Icon } from '@mui/material'
import { styled } from '@/common/lib/mui/theme'
import { SearchIcon } from '@/common/styles/assets/Icons'

const StyledSearchSuggestionTitle = styled(Typography)(({ theme }) => ({
  '& em': {
    backgroundColor: theme.palette.primary.main,
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

type ResultListProps = {
  suggestions: Array<SearchSuggestion>
  onClick?: (suggestion: SearchSuggestion) => void
}

const ResultList = ({ suggestions, onClick }: ResultListProps) => {
  return (
    <>
      {suggestions.map((suggestion) => (
        <Box
          key={suggestion.value}
          onClick={() => onClick?.(suggestion)}
          sx={{
            cursor: 'pointer',
          }}
        >
          <StyledResultItem display="flex" gap={1}>
            <StyledIcon fontSize="small">
              <SearchIcon />
            </StyledIcon>
            <StyledSearchSuggestionTitle
              dangerouslySetInnerHTML={{ __html: suggestion.value }}
            />
          </StyledResultItem>
        </Box>
      ))}
    </>
  )
}

export default ResultList
