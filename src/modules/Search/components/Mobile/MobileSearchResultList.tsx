import { Box } from '@mui/material'
import { SearchSuggestion } from '@/modules/Search/business/SearchSuggestion'
import { styled } from '@/common/lib/mui/theme'
import useSearch from '@/modules/Search/hooks/useSearch'
import NoResultPlaceholder from '@/modules/Search/components/NoResultPlaceholder'
import ResultList from '@/modules/Search/components/ResultList'

interface MobileSearchResultProps {
  className?: string
  suggestions: Array<SearchSuggestion>
  onClose?: () => void
  showLoadMore?: boolean
  onClickLoadMore?: () => void
}

const StyledContainer = styled(Box)(() => ({
  width: '100%',
  display: 'flex',
}))

const StyledResultContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
}))

const MobileSearchResultList = ({
  suggestions,
  className,
  onClose,
  showLoadMore,
  onClickLoadMore,
}: MobileSearchResultProps) => {
  const { handleNavigateSuggestionObject } = useSearch()

  return (
    <StyledContainer className={className}>
      <StyledResultContainer>
        {suggestions.length > 0 ? (
          <ResultList
            sx={{
              maxHeight: '300px',
            }}
            suggestions={suggestions}
            onClick={(suggestion) => {
              handleNavigateSuggestionObject(suggestion)
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
  )
}

export default MobileSearchResultList
