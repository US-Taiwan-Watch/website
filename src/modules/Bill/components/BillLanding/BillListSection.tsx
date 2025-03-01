'use client'

import { useTheme } from '@mui/material/styles'
import { USTWTheme } from '@/common/lib/mui/theme'
import LandingSectionWrapper from '@/common/components/elements/Landing/LandingSectionWrapper'
import { SectionTitleWithLink } from '@/common/components/elements/Landing/SectionTitle'
import BillCardCarousel from '@/modules/Bill/components/BillCardCarousel'
import { Stack } from '@mui/material'
import { ROUTES } from '@/routes'
import { BillSorterEnum } from '@/modules/Bill/components/BillFilter/enums'
import { useParams } from 'next/navigation'
import { Language } from '@/common/lib/i18n/types'
import { CongressUtils } from '@/common/business/Congress'
import { useMemo } from 'react'
import { useQuery } from '@apollo/client'
import {
  BillsQuery,
  BillsQueryVariables,
} from '@/common/lib/graphql/__generated__/graphql'
import { QUERY_BILLS } from '@/modules/Bill/graphql/gql'
import { isNull } from 'lodash-es'
import { BillUtils } from '@/modules/Bill/business/Bill'

/**
 * 最新法案數量
 */
const LATEST_BILLS_COUNT = 5

/**
 * 熱門法案數量
 */
const POPULAR_BILLS_COUNT = 5

const BillListSection = () => {
  const currentCongressNumber = useMemo(
    () => CongressUtils.getCurrentCongressNumber(),
    []
  )
  const theme = useTheme<USTWTheme>()
  const { lang } = useParams<{ lang: Language }>()

  const { data: latestBillsData } = useQuery<BillsQuery, BillsQueryVariables>(
    QUERY_BILLS,
    {
      variables: {
        sort: '-introducedAt.datetime',
        limit: LATEST_BILLS_COUNT,
      },
    }
  )

  // TODO: 目前還沒定義Popularity, 先跟Latest Bill拿一樣的
  const { data: popularBillsData } = useQuery<BillsQuery, BillsQueryVariables>(
    QUERY_BILLS,
    {
      variables: {
        sort: '-introducedAt.datetime',
        limit: POPULAR_BILLS_COUNT,
      },
    }
  )
  const latestBills =
    latestBillsData?.Bills?.docs
      ?.filter((bill) => !isNull(bill))
      .map((bill) => BillUtils.parse(lang, bill)) ?? []
  const popularBills =
    popularBillsData?.Bills?.docs
      ?.filter((bill) => !isNull(bill))
      .map((bill) => BillUtils.parse(lang, bill)) ?? []

  return (
    <LandingSectionWrapper
      backgroundColor={theme.color.neutral[200]}
      contentWrapperSx={{
        paddingTop: theme.spacing(10),
        paddingBottom: theme.spacing(15),
      }}
    >
      <Stack gap={theme.spacing(7.5)}>
        <SectionTitleWithLink
          title="Latest Bills"
          link={{
            pathname: ROUTES.BILL_LIST,
            query: {
              congress: currentCongressNumber,
              sorter: BillSorterEnum.LatestAction,
            },
          }}
        />
        <BillCardCarousel simplified data={latestBills} />
      </Stack>

      <Stack gap={theme.spacing(7.5)}>
        <SectionTitleWithLink
          title="Popular Bills"
          link={{
            pathname: ROUTES.BILL_LIST,
            query: {
              sorter: BillSorterEnum.Popularity,
            },
          }}
        />
        <BillCardCarousel simplified data={popularBills} />
      </Stack>
    </LandingSectionWrapper>
  )
}

export default BillListSection
