import PeopleCategory from '@/modules/People/components/PeopleCategory'
import {
  SearchResult,
  SearchResultType,
} from '@/modules/Search/business/SearchResult'
import { Stack, Typography } from '@mui/material'
import { memo } from 'react'

type PeopleSectionProps = {
  result: Extract<SearchResult, { type: SearchResultType.People }>
}

const PeopleSection = ({ result }: PeopleSectionProps) => {
  return (
    <Stack
      gap={{
        xs: 0.75,
        lg: 1.5,
      }}
    >
      <PeopleCategory people={result.value} />
      <Typography
        sx={{
          fontSize: {
            xs: '0.875rem',
            lg: '1.5rem',
          },
          fontWeight: 600,
          color: 'grey.3100',
        }}
      >
        <span
          dangerouslySetInnerHTML={{
            __html: result.highlights.name,
          }}
        />
      </Typography>
      <Typography
        sx={{
          fontSize: {
            xs: '0.75rem',
            lg: '1rem',
          },
          fontWeight: 500,
          color: 'grey.3800',
        }}
      >
        <span
          dangerouslySetInnerHTML={{
            __html: result.highlights.bioByAI,
          }}
        />
      </Typography>
    </Stack>
  )
}

export default memo(PeopleSection)
