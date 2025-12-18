import { Box } from '@mui/material'
import { SearchSuggestion } from '@/modules/Search/business/SearchSuggestion'
import { styled } from '@/common/lib/mui/theme'
import HeaderPopper from '@/common/components/elements/Header/HeaderPopper'
import useSearch from '@/modules/Search/hooks/useSearch'
import NoResultPlaceholder from '@/modules/Search/components/NoResultPlaceholder'
import ResultList from '@/modules/Search/components/ResultList'

interface DesktopSearchResultProps {
  className?: string
  suggestions: Array<SearchSuggestion>
  headerAnchorEl: HTMLElement | null
  inputAnchorEl: HTMLElement | null
  clickAwayClassNameWhiteList?: string[]
  onClose?: () => void
  onLoadMore?: () => void
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
}))

const DesktopSearchResultList = ({
  suggestions,
  className,
  headerAnchorEl,
  inputAnchorEl,
  clickAwayClassNameWhiteList,
  onClose,
  onLoadMore,
}: DesktopSearchResultProps) => {
  const { handleNavigateSuggestionObject } = useSearch()

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
            <ResultList
              sx={{
                maxHeight: '300px',
              }}
              suggestions={suggestions}
              onClick={(suggestion) => {
                handleNavigateSuggestionObject(suggestion)
                onClose?.()
              }}
              onLoadMore={onLoadMore}
            />
          ) : (
            <NoResultPlaceholder />
          )}
        </StyledResultContainer>
      </StyledContainer>
    </HeaderPopper>
  )
}

export default DesktopSearchResultList
