'use client'

import UButton from '@/common/components/atoms/UButton'
import LandingSectionWrapper from '@/common/components/elements/Landing/LandingSectionWrapper'
import SectionTitle from '@/common/components/elements/Landing/SectionTitle'
import { USTWTheme } from '@/common/lib/mui/theme'
import TaiwanRecordList from '@/modules/TaiwanRecord/components/TaiwanRecordList'
import AddIcon from '@mui/icons-material/Add'
import { useTheme } from '@mui/material'
import Stack from '@mui/material/Stack'
import { People } from '@/modules/People/business/People'
import useTranslationClient from '@/common/lib/i18n/hooks/useTranslationClient'
import TaiwanRecordDialog from '@/modules/TaiwanRecord/components/TaiwanRecordDialog'
import { useState, useMemo, useCallback } from 'react'
import { useQuery } from '@apollo/client'
import { QUERY_PEOPLE_PUBLISHED_TAIWAN_RECORDS } from '@/modules/TaiwanRecord/graphql/gql'
import type {
  QueryPeoplePublishedTaiwanRecordsQuery,
  QueryPeoplePublishedTaiwanRecordsQueryVariables,
} from '@/common/lib/graphql/__generated__/graphql'
import { TaiwanRecordUtils } from '@/modules/TaiwanRecord/business/TaiwanRecord'
import useURouterClient from '@/common/lib/router/useURouterClient'
import { useUAuth } from '@/modules/Auth/providers/UAuthProvider'
import { useAccount } from '@/modules/Account/providers/AccountProvider'
import { RouteName } from '@/common/lib/router/routes'

interface TaiwanRecordSectionProps {
  people: People
}

export default function TaiwanRecordSection({
  people,
}: TaiwanRecordSectionProps) {
  const theme = useTheme<USTWTheme>()
  const { t } = useTranslationClient(['people'])
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false)

  const { data } = useQuery<
    QueryPeoplePublishedTaiwanRecordsQuery,
    QueryPeoplePublishedTaiwanRecordsQueryVariables
  >(QUERY_PEOPLE_PUBLISHED_TAIWAN_RECORDS, {
    variables: {
      peopleId: people.id,
    },
    skip: !people.id,
  })

  const records = useMemo(() => {
    const docs = data?.TaiwanRecords?.docs ?? []
    return docs
      .filter((doc) => doc !== null)
      .map((doc) => TaiwanRecordUtils.parse(doc))
  }, [data])

  const { resolveRouteUrl } = useURouterClient()
  const { login } = useUAuth()
  const { isAccountLoading, account } = useAccount()
  const handleSubmitTaiwanRecordClick = useCallback(() => {
    if (isAccountLoading) return

    if (!account) {
      login({
        returnTo: people.id
          ? resolveRouteUrl({
              name: RouteName.PeopleDetail,
              params: { peopleId: people.id },
            })
          : resolveRouteUrl({ name: RouteName.Home }),
      })
      return
    }

    setIsCreateDialogOpen(true)
  }, [isAccountLoading, account, login, resolveRouteUrl, people.id])

  return (
    <LandingSectionWrapper backgroundColor={theme.color.neutral[200]}>
      <Stack gap={theme.spacing(7.5)}>
        <SectionTitle
          title={t('page.section.taiwanRecord.title', { ns: 'people' })}
          renderEndComponent={() => (
            <UButton
              variant="contained"
              color="primary"
              rounded
              size="medium"
              startIcon={<AddIcon />}
              onClick={handleSubmitTaiwanRecordClick}
            >
              {t('page.section.taiwanRecord.submit.btn', { ns: 'people' })}
            </UButton>
          )}
        />
        <TaiwanRecordList records={records} />
      </Stack>
      {people.id && (
        <TaiwanRecordDialog
          mode="create"
          open={isCreateDialogOpen}
          onClose={() => setIsCreateDialogOpen(false)}
          peopleId={people.id}
        />
      )}
    </LandingSectionWrapper>
  )
}
