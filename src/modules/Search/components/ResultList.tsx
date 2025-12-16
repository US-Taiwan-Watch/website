import { SearchSuggestion } from '@/modules/Search/business/SearchSuggestion'
import { Box, Typography, Icon, SxProps } from '@mui/material'
import { styled } from '@/common/lib/mui/theme'
import { SearchIcon } from '@/common/styles/assets/Icons'
import useTranslationClient from '@/common/lib/i18n/hooks/useTranslationClient'

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
  sx?: SxProps
  suggestions: Array<SearchSuggestion>
  onClick?: (suggestion: SearchSuggestion) => void
  showLoadMore?: boolean
  onClickLoadMore?: () => void
}

const ResultList = ({
  sx,
  suggestions,
  onClick,
  showLoadMore,
  onClickLoadMore,
}: ResultListProps) => {
  const { t } = useTranslationClient('search')
  return (
    <Box
      sx={{
        overflowY: 'auto',
        '& a': {
          textDecoration: 'none',
        },
        ...sx,
      }}
    >
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
      {showLoadMore && (
        <StyledResultItem
          display="flex"
          onClick={onClickLoadMore}
          sx={{
            cursor: 'pointer',
          }}
          alignItems="center"
          justifyContent="center"
        >
          <Typography>
            {t('suggestion.result.loadMore', { ns: 'search' })}
          </Typography>
        </StyledResultItem>
      )}
    </Box>
  )
}

export default ResultList
