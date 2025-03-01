'use client'

import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid2'
import Stack from '@mui/material/Stack'
import { useTheme } from '@mui/material/styles'
import { USTWTheme } from '@/common/lib/mui/theme'
import LandingSectionWrapper from '@/common/components/elements/Landing/LandingSectionWrapper'
import PeopleCard from '@/modules/People/components/PeopleCard'
import UPagination, {
  usePagination,
} from '@/common/components/atoms/UPagination'
import PeopleFilter from '@/modules/People/components/PeopleFilter'
import { Language } from '@/common/lib/i18n/types'
import { useEffect, useMemo } from 'react'
import {
  PeoplesQuery,
  PeoplesQueryVariables,
} from '@/common/lib/graphql/__generated__/graphql'
import { useQuery } from '@apollo/client'
import { QUERY_PEOPLES } from '@/modules/People/graphql/gql'
import { PeopleUtils } from '@/modules/People/business/People'
import { isNull } from 'lodash-es'

interface PeopleListSectionProps {
  lang: Language
}

const PeopleListSection = ({ lang }: PeopleListSectionProps) => {
  const theme = useTheme<USTWTheme>()
  const { totalPages, setTotalPages, page, handlePageChange } = usePagination()

  const queryVariables: PeoplesQueryVariables = useMemo(
    () => ({
      limit: 10,
      page,
      sort: '-viewCount',
    }),
    [page]
  )

  const { data, refetch } = useQuery<PeoplesQuery, PeoplesQueryVariables>(
    QUERY_PEOPLES,
    {
      variables: queryVariables,
    }
  )

  useEffect(() => {
    setTotalPages(data?.Peoples?.totalPages ?? 1)
  }, [data?.Peoples?.totalPages, setTotalPages])

  useEffect(() => {
    refetch(queryVariables)
  }, [queryVariables, refetch])

  const peoples =
    data?.Peoples?.docs
      ?.filter((people) => !isNull(people))
      .map((people) => PeopleUtils.parse(lang, people)) ?? []

  // TODO: loading skeleton

  return (
    <LandingSectionWrapper
      backgroundColor={theme.color.neutral[200]}
      contentWrapperSx={{
        paddingTop: theme.spacing(10),
        paddingBottom: theme.spacing(15),
      }}
    >
      <Stack spacing={6} alignItems="center" justifyContent="center">
        {/** People Filter */}
        <PeopleFilter
          onSubmit={(filter) => {
            /** 這邊呼叫 API */
            console.log(`call API with \n`, JSON.stringify(filter, null, 2))
          }}
        />
        <Box>
          <Grid container spacing={2}>
            {peoples.map((people) => (
              <Grid key={people.id} size={6}>
                <PeopleCard people={people} simplified />
              </Grid>
            ))}
          </Grid>
        </Box>
        {totalPages > 1 && (
          <UPagination
            count={totalPages}
            page={page}
            onChange={(_, page) => {
              handlePageChange(page)
            }}
          />
        )}
      </Stack>
    </LandingSectionWrapper>
  )
}

export default PeopleListSection
