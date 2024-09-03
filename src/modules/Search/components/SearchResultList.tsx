import { Box, Icon, Popper, Typography } from '@mui/material'
import SearchResult from '../classes/SearchResult'
import { styled } from '@/common/lib/mui/theme'
import Link from 'next/link'
import { SearchIcon } from '@/common/styles/assets/Icons'

interface SearchResultProps {
  className?: string;
  results: Array<SearchResult>;
  headerAnchorEl: HTMLElement | null;
  inputAnchorEl: HTMLElement | null;
}

const StyledPopper = styled(Popper)(({ theme }) => ({
  display: 'flex',
  zIndex: theme.constants.zIndex.headerSearchResult,
  transform: 'none !important', // 避免 popper 被 transform 影響
}))

const StyledContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  backgroundColor: theme.color.searchBar.resultBackground,
  borderRadius: '30px',
  paddingBottom: theme.spacing(2),
  [theme.breakpoints.up('xs')]: {
    paddingTop: `${theme.constants.headerHeight.xs}px`,
  },
  [theme.breakpoints.up('md')]: {
    paddingTop: `${theme.constants.headerHeight.md}px`,
  },
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

const SearchResultList = ({
  results,
  className,
  headerAnchorEl,
  inputAnchorEl,
}: SearchResultProps) => {
  return (
    <StyledPopper anchorEl={headerAnchorEl} open container={headerAnchorEl}>
      <StyledContainer
        className={className}
        width={headerAnchorEl?.getBoundingClientRect().width}
      >
        <StyledResultContainer
          width={inputAnchorEl?.getBoundingClientRect().width}
        >
          {results.length > 0
            ? (
                results.map((result) => (
                  <Link href={result.href} key={result.value}>
                    <StyledResultItem display="flex" gap={1}>
                      <StyledIcon fontSize="small">
                        <SearchIcon />
                      </StyledIcon>
                      <Typography>{result.value}</Typography>
                    </StyledResultItem>
                  </Link>
                ))
              )
            : (
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
    </StyledPopper>
  )
}

export default SearchResultList
