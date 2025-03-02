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
import { useCallback, useEffect, useMemo, useState } from 'react'
import {
  PeoplesFilterQuery,
  PeoplesFilterQueryVariables,
} from '@/common/lib/graphql/__generated__/graphql'
import { useLazyQuery } from '@apollo/client'
import { QUERY_PEOPLE_FILTER } from '@/modules/People/graphql/gql'
import { PeopleUtils } from '@/modules/People/business/People'
import { isNull } from 'lodash-es'
import { useRouter, useSearchParams } from 'next/navigation'
import { PeopleFilterOutput } from '@/modules/People/components/PeopleFilter/schema'
import { PeoplesFilterUtils } from '@/modules/People/business/PeoplesFilter'
import { ROUTES } from '@/routes'

interface PeopleListSectionProps {
  lang: Language
}

const PeopleListSection = ({ lang }: PeopleListSectionProps) => {
  const theme = useTheme<USTWTheme>()
  const router = useRouter()

  const params = useSearchParams()

  const filterInitValues = useMemo<PeopleFilterOutput>(() => {
    return PeoplesFilterUtils.transformQueryVariablesToFilter({
      category: params.get('category'),
      congress: params.get('congress'),
      party: params.get('party'),
      state: params.get('state'),
      tag: params.get('tag'),
      stateRegion: params.get('stateRegion'),
      district: params.get('district'),
      companyType: params.get('companyType'),
      officialArea: params.get('officialArea'),
    })
  }, [params])
  const { totalPages, setTotalPages, page, handlePageChange } = usePagination()

  const paginationVariables = useMemo<
    Pick<PeoplesFilterQueryVariables, 'limit' | 'page'>
  >(() => {
    return {
      limit: 10,
      page,
    }
  }, [page])
  const [filterVariables, setFilterVariables] = useState<
    Omit<PeoplesFilterQueryVariables, 'limit' | 'page'>
  >({})

  const [getPeoples, { data }] = useLazyQuery<
    PeoplesFilterQuery,
    PeoplesFilterQueryVariables
  >(QUERY_PEOPLE_FILTER)

  useEffect(() => {
    if (data?.PeoplesFilter?.totalPages) {
      setTotalPages(data.PeoplesFilter.totalPages)
    }
  }, [data?.PeoplesFilter?.totalPages, setTotalPages])

  const peoples = useMemo(() => {
    return (
      data?.PeoplesFilter?.docs
        ?.filter((people) => !isNull(people))
        .map((people) => PeopleUtils.parse(lang, people)) ?? []
    )
  }, [data?.PeoplesFilter?.docs, lang])

  const onFilterSubmit = useCallback(
    (filter: PeopleFilterOutput) => {
      setFilterVariables(
        PeoplesFilterUtils.transformFilterToQueryVariables(filter)
      )
      const urlQuery = new URLSearchParams(
        PeoplesFilterUtils.transformFilterToUrlQueryString(filter)
      )

      router.replace(`${ROUTES.PEOPLE}?${urlQuery.toString()}`)
    },
    [router]
  )

  useEffect(() => {
    if (Object.keys(filterInitValues).length > 0) {
      onFilterSubmit(filterInitValues)
    }
  }, [filterInitValues, onFilterSubmit])

  useEffect(() => {
    getPeoples({
      variables: {
        ...paginationVariables,
        ...filterVariables,
      },
    })
  }, [paginationVariables, filterVariables, getPeoples])

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
          onSubmit={onFilterSubmit}
          initialValues={filterInitValues}
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
