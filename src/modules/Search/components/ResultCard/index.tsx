import UHStack from '@/common/components/atoms/UHStack'
import useTranslationClient from '@/common/lib/i18n/hooks/useTranslationClient'
import { styled } from '@/common/lib/mui/theme'
import {
  SearchResult,
  SearchResultType,
} from '@/modules/Search/business/SearchResult'
import ArticleSection from '@/modules/Search/components/ResultCard/ArticleSection'
import BillSection from '@/modules/Search/components/ResultCard/BillSection'
import PeopleSection from '@/modules/Search/components/ResultCard/PeopleSection'
import { Box, Divider, Skeleton, Typography } from '@mui/material'
import { memo, useMemo } from 'react'

const StyledUHStack = styled(UHStack)(({ theme }) => ({
  '& em': {
    backgroundColor: theme.palette.primary.main,
  },
}))

const Tag = ({ label }: { label: SearchResultType }) => {
  const { t } = useTranslationClient('search')

  return (
    <Box
      sx={{
        px: {
          xs: '6px',
          lg: '9px',
        },
        py: {
          xs: '2px',
          lg: '5px',
        },
        borderRadius: '5px',
        backgroundColor: 'secondary.main',
        minWidth: {
          xs: '80px',
          lg: '120px',
        },
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Typography
        variant="bodyS"
        sx={{
          fontWeight: 600,
          color: 'common.black',
        }}
      >
        {t(`tabs.${label}.title`, { ns: 'search' })}
      </Typography>
    </Box>
  )
}

type ResultCardProps = {
  result: SearchResult
}

const ResultCard = ({ result }: ResultCardProps) => {
  const Section = useMemo(() => {
    switch (result.type) {
      case SearchResultType.Article:
        return <ArticleSection result={result} />
      case SearchResultType.Bill:
        return <BillSection result={result} />
      case SearchResultType.People:
        return <PeopleSection result={result} />
      case SearchResultType.Ketagalan:
        return <ArticleSection result={result} />
      default:
        return null
    }
  }, [result])

  return (
    <StyledUHStack
      sx={{
        p: {
          xs: 1.5,
          lg: 3.75,
        },
        borderRadius: '15px',
        backgroundColor: 'common.white',
        gap: {
          xs: 1.75,
          lg: 4.25,
        },
        alignItems: 'flex-start',
      }}
    >
      <Tag label={result.type} />
      <Divider orientation="vertical" flexItem />
      {Section}
    </StyledUHStack>
  )
}

export default memo(ResultCard)

export const ResultCardSkeleton = () => {
  return (
    <Skeleton
      variant="rounded"
      sx={{
        width: '100%',
        height: '200px',
      }}
    />
  )
}
