'use client'

import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid2'
import Stack from '@mui/material/Stack'
import { useTheme } from '@mui/material/styles'
import { USTWTheme } from '@/common/lib/mui/theme'
import LandingSectionWrapper from '@/common/components/elements/Landing/LandingSectionWrapper'
import PeopleCard, {
  PeopleCardSkeleton,
} from '@/modules/People/components/PeopleCard'
import UPagination, {
  usePagination,
} from '@/common/components/atoms/UPagination'
import PeopleFilter from '@/modules/People/components/PeopleFilter'
import { Language } from '@/common/lib/i18n/types'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import {
  PeoplesFilterQuery,
  PeoplesFilterQueryVariables,
} from '@/common/lib/graphql/__generated__/graphql'
import { useLazyQuery } from '@apollo/client'
import { QUERY_PEOPLE_FILTER } from '@/modules/People/graphql/gql'
import { People, PeopleUtils } from '@/modules/People/business/People'
import { isEqual, isNull, isNumber } from 'lodash-es'
import { useParams, useRouter, useSearchParams } from 'next/navigation'
import {
  defaultCategory,
  PeopleFilterOutput,
} from '@/modules/People/components/PeopleFilter/schema'
import { PeoplesFilterUtils } from '@/modules/People/business/PeoplesFilter'
import { ROUTES } from '@/routes'
import useCategoriesPeople from '@/modules/People/hooks/useCategoriesPeople'
import { PeopleCategoryEnum } from '@/modules/People/components/PeopleFilter/enums'
import { PeopleCategory } from '@/modules/People/business/PeopleCategory'
import { useResponsive } from '@/common/lib/responsive/ResponsiveProvider'
import UHStack from '@/common/components/atoms/UHStack'
import { Typography } from '@mui/material'
import UInfiniteScrollButton from '@/common/components/atoms/UInfiniteScrollButton'
import useTranslationClient from '@/common/lib/i18n/hooks/useTranslationClient'

const PeopleCardsSkeleton = () => {
  return (
    <Grid container spacing={2}>
      {Array.from({ length: 10 }).map((_, index) => (
        <Grid
          key={index}
          size={{
            xs: 12,
            sm: 6,
          }}
        >
          <PeopleCardSkeleton />
        </Grid>
      ))}
    </Grid>
  )
}

const PeopleListSection = () => {
  const { t } = useTranslationClient(['people'])
  const { isMobile } = useResponsive()
  const { lang } = useParams<{ lang: Language }>()
  const theme = useTheme<USTWTheme>()
  const router = useRouter()

  const params = useSearchParams()

  const { categoriesPeople } = useCategoriesPeople(lang)
  const categoriesPeopleMap = useMemo<Record<
    PeopleCategoryEnum,
    PeopleCategory
  > | null>(() => {
    if (!categoriesPeople.length) return null
    return categoriesPeople.reduce(
      (acc, category) => {
        acc[category.type] = category
        return acc
      },
      {} as Record<PeopleCategoryEnum, PeopleCategory>
    )
  }, [categoriesPeople])

  /**
   * 避免 `router.replace` 後，
   * `searchParams` 的值會變動，
   * 導致 `filterInitValues` 的值會變動，
   * 進而導致 `Maxinum update depth exceeded` 的錯誤
   */
  const existedFilterInitValues = useRef<PeopleFilterOutput | null>(null)
  const filterInitValues = useMemo<PeopleFilterOutput>(() => {
    return PeoplesFilterUtils.transformQueryVariablesToFilter({
      category: params.get('category') ?? defaultCategory,
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
  const { totalPages, setTotalPages, page, handlePageChange, resetPage } =
    usePagination()

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

  const [getPeoples, { data, loading }] = useLazyQuery<
    PeoplesFilterQuery,
    PeoplesFilterQueryVariables
  >(QUERY_PEOPLE_FILTER)

  useEffect(() => {
    if (!isNumber(data?.PeoplesFilter?.totalPages)) return
    setTotalPages(data.PeoplesFilter.totalPages)
  }, [data?.PeoplesFilter?.totalPages, setTotalPages])

  // 處理資料
  const isInfiniteScroll = useMemo(() => isMobile, [isMobile])
  const [peoples, setPeoples] = useState<People[]>([])

  useEffect(() => {
    if (!data?.PeoplesFilter?.docs) return

    const newPeoples = data.PeoplesFilter.docs
      .filter((people) => !isNull(people))
      .map((people) => PeopleUtils.parse(lang, people))

    if (isInfiniteScroll) {
      setPeoples((prev) => [
        ...(data?.PeoplesFilter?.page === 1 ? [] : prev),
        ...newPeoples,
      ])
    } else {
      setPeoples(newPeoples)
    }
  }, [
    data?.PeoplesFilter?.docs,
    data?.PeoplesFilter?.page,
    isInfiniteScroll,
    lang,
  ])

  const onFilterSubmit = useCallback(
    (
      filter: PeopleFilterOutput,
      categoriesPeopleMap: Record<PeopleCategoryEnum, PeopleCategory>
    ) => {
      resetPage()

      setFilterVariables(
        PeoplesFilterUtils.transformFilterToQueryVariables(
          filter,
          categoriesPeopleMap
        )
      )
      const urlQuery = new URLSearchParams(
        PeoplesFilterUtils.transformFilterToUrlQueryString(filter)
      )

      router.replace(`${ROUTES.PEOPLE}?${urlQuery.toString()}`, {
        scroll: false,
      })
    },
    [router, resetPage]
  )

  useEffect(() => {
    if (isEqual(existedFilterInitValues.current, filterInitValues)) return
    if (!categoriesPeopleMap) return
    if (Object.keys(filterInitValues).length === 0) return

    onFilterSubmit(filterInitValues, categoriesPeopleMap)
    existedFilterInitValues.current = filterInitValues
  }, [filterInitValues, onFilterSubmit, categoriesPeopleMap])

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
      containerSx={{
        flex: 1,
      }}
      contentWrapperSx={{
        paddingTop: theme.spacing(10),
        paddingBottom: theme.spacing(15),
      }}
    >
      <Stack
        spacing={{
          xs: 3,
          sm: 6,
        }}
        alignItems="center"
        justifyContent="center"
      >
        {/** People Filter */}
        {isMobile ? (
          <UHStack
            width="100%"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="h3" fontWeight={600}>
              {t('landing.section.allPeople.title', { ns: 'people' })}
            </Typography>
            <PeopleFilter
              onSubmit={(filter) => {
                if (!categoriesPeopleMap) return

                onFilterSubmit(filter, categoriesPeopleMap)
              }}
              initialValues={filterInitValues}
            />
          </UHStack>
        ) : (
          <PeopleFilter
            onSubmit={(filter) => {
              if (!categoriesPeopleMap) return

              onFilterSubmit(filter, categoriesPeopleMap)
            }}
            initialValues={filterInitValues}
          />
        )}

        <Box width="100%">
          {loading && !peoples.length ? (
            <PeopleCardsSkeleton />
          ) : (
            <Grid container spacing={2}>
              {peoples.map((people) => (
                <Grid
                  key={people.id}
                  size={{
                    xs: 12,
                    sm: 6,
                  }}
                >
                  <PeopleCard people={people} simplified />
                </Grid>
              ))}
            </Grid>
          )}
        </Box>

        {/** Infinite Scroll (Mobile) */}
        {isInfiniteScroll && (
          <UInfiniteScrollButton
            loading={loading}
            onLoadMore={() => handlePageChange(page + 1)}
            hasMore={page < totalPages}
          />
        )}

        {/** Pagination (Desktop) */}
        {!isInfiniteScroll && !loading && totalPages > 1 && (
          <UPagination
            count={totalPages}
            page={page}
            onChange={(_, page) => {
              setPeoples([])
              handlePageChange(page)
            }}
          />
        )}
      </Stack>
    </LandingSectionWrapper>
  )
}

export default PeopleListSection
