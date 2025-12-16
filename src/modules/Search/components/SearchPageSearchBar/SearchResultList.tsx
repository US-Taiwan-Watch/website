import { Box } from '@mui/material'
import { SearchSuggestion } from '@/modules/Search/business/SearchSuggestion'
import { styled } from '@/common/lib/mui/theme'
import UPopper from '@/common/components/elements/UPopper'
import useSearch from '@/modules/Search/hooks/useSearch'
import NoResultPlaceholder from '@/modules/Search/components/NoResultPlaceholder'
import ResultList from '@/modules/Search/components/ResultList'

interface SearchResultListProps {
  className?: string
  suggestions: Array<SearchSuggestion>
  anchorEl: HTMLElement | null
  inputAnchorEl: HTMLElement | null
  onClose?: () => void
  showLoadMore?: boolean
  onClickLoadMore?: () => void
}

const StyledPopper = styled(UPopper)(() => ({
  zIndex: 1000,
  marginTop: '-40px !important',
}))

const StyledContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  backgroundColor: theme.color.searchPageSearchBar.resultBackground,
  borderRadius: '20px',
  paddingBottom: theme.spacing(2),
  paddingTop: '40px',
}))

const StyledResultContainer = styled(Box)(({ theme }) => ({
  margin: 'auto',
  padding: `${theme.spacing(2)} ${theme.spacing(2)}
   ${theme.spacing(1)} ${theme.spacing(4)}`,
}))

const SearchResultList = ({
  suggestions,
  showLoadMore,
  onClickLoadMore,
  className,
  anchorEl,
  inputAnchorEl,
  onClose,
}: SearchResultListProps) => {
  const { handleNavigateSearchPage } = useSearch()

  return (
    <StyledPopper
      anchorEl={anchorEl}
      onClose={onClose}
      clickAwayClassNameWhiteList={['search-bar']}
    >
      <StyledContainer className={className}>
        <StyledResultContainer
          width={inputAnchorEl?.getBoundingClientRect().width}
        >
          {suggestions.length > 0 ? (
            <ResultList
              sx={{
                maxHeight: '300px',
              }}
              suggestions={suggestions}
              onClick={(suggestion) => {
                handleNavigateSearchPage(suggestion.value)
                onClose?.()
              }}
              showLoadMore={showLoadMore}
              onClickLoadMore={onClickLoadMore}
            />
          ) : (
            <NoResultPlaceholder />
          )}
        </StyledResultContainer>
      </StyledContainer>
    </StyledPopper>
  )
}

export default SearchResultList
