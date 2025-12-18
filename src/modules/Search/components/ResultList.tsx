import { SearchSuggestion } from '@/modules/Search/business/SearchSuggestion'
import { Box, Typography, Icon, SxProps } from '@mui/material'
import { styled } from '@/common/lib/mui/theme'
import { SearchIcon } from '@/common/styles/assets/Icons'
import { useEffect, useRef } from 'react'

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
  onLoadMore?: () => void
}

const ResultList = ({
  sx,
  suggestions,
  onClick,
  onLoadMore,
}: ResultListProps) => {
  const sentinelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!onLoadMore) return

    const sentinel = sentinelRef.current
    if (!sentinel) return

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        if (entry.isIntersecting) {
          onLoadMore()
        }
      },
      {
        root: null,
        rootMargin: '100px',
        threshold: 0.1,
      }
    )

    observer.observe(sentinel)

    return () => {
      observer.disconnect()
    }
  }, [onLoadMore])

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
      <Box ref={sentinelRef} sx={{ height: '1px' }} />
    </Box>
  )
}

export default ResultList
