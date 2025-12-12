import { Box, Icon, Typography } from '@mui/material'
import { SearchSuggestion } from '@/modules/Search/business/SearchSuggestion'
import { styled } from '@/common/lib/mui/theme'
import { SearchIcon } from '@/common/styles/assets/Icons'
import HeaderPopper from '@/common/components/elements/Header/HeaderPopper'
import useTranslationClient from '@/common/lib/i18n/hooks/useTranslationClient'
import useSearch from '@/modules/Search/hooks/useSearch'

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
  const { handleNavigateSuggestionObject } = useSearch()
  const { t } = useTranslationClient('search')

  return (
    <HeaderPopper
      anchorEl={headerAnchorEl}
      clickAwayClassNameWhiteList={clickAwayClassNameWhiteList}
      onClose={onClose}
    >
      <StyledContainer className={className}>
        <StyledResultContainer
          width={inputAnchorEl?.getBoundingClientRect().width}
        >
          {suggestions.length > 0 ? (
            suggestions.map((suggestion) => (
              <Box
                key={suggestion.value}
                onClick={() => {
                  handleNavigateSuggestionObject(suggestion)
                  onClose?.()
                }}
                sx={{
                  cursor: 'pointer',
                }}
              >
                <StyledResultItem display="flex" gap={1}>
                  <StyledIcon fontSize="small">
                    <SearchIcon />
                  </StyledIcon>
                  <Typography>{suggestion.value}</Typography>
                </StyledResultItem>
              </Box>
            ))
          ) : (
            <StyledNoResultContainer
              display="flex"
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
            >
              <Typography className="no-result-title">
                {t('suggestion.noResult.title', { ns: 'search' })}
              </Typography>
              <Typography className="no-result-subtitle">
                {t('suggestion.noResult.subtitle', { ns: 'search' })}
              </Typography>
            </StyledNoResultContainer>
          )}
        </StyledResultContainer>
      </StyledContainer>
    </HeaderPopper>
  )
}

export default DesktopSearchResultList
