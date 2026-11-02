import { Box, Typography } from '@mui/material'
import { styled } from '@/common/lib/mui/theme'
import useTranslationClient from '@/common/lib/i18n/hooks/useTranslationClient'

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

const NoResultPlaceholder = () => {
  const { t } = useTranslationClient('search')

  return (
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
  )
}

export default NoResultPlaceholder
