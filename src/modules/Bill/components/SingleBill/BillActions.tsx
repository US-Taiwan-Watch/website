'use client'

import UContentCardWithModal from '@/common/components/atoms/UContentCardWithModal'
import { ActionsIcon } from '@/common/styles/assets/Icons'
import { Stack, Typography } from '@mui/material'
import { Bill, BillUtils } from '@/modules/Bill/business/Bill'
import UHeightLimitedText from '@/common/components/atoms/UHeightLimitedText'
import CardExpandIcon from '@/modules/Bill/components/SingleBill/CardExpandIcon'
import ActionsFilterContent from '@/modules/Bill/components/SingleBill/ActionsFilter/ActionsFilterContent'
import { useState, useMemo } from 'react'
import { ActionsType } from '@/modules/Bill/components/SingleBill/ActionsFilter/ActionsFilter'
import DrawerFilter from '@/modules/Bill/components/SingleBill/ActionsFilter/DrawerFilter'
import useTranslationClient from '@/common/lib/i18n/hooks/useTranslationClient'
import { DateUtils } from '@/modules/Common/business/Date'

const DATE_FORMAT = 'MM/DD/YYYY'

type Props = {
  bill: Bill
}

export default function BillActions({ bill }: Props) {
  const { t } = useTranslationClient('bill')
  const [selectedActionsType, setSelectedActionsType] = useState<ActionsType>(
    ActionsType.ACTIONS_OVERVIEW
  )

  const actions = useMemo(
    () =>
      selectedActionsType === ActionsType.ALL_ACTIONS
        ? bill.actionsAll
        : bill.actionsOverview,
    [bill, selectedActionsType]
  )

  const latestAction = useMemo(() => BillUtils.getLatestAction(bill), [bill])
  const latestActionDate = useMemo(() => {
    if (!latestAction?.date) return ''
    return DateUtils.formatDc(latestAction.date, DATE_FORMAT)
  }, [latestAction])

  return (
    <UContentCardWithModal
      header={{
        title: t('page.card.actions.title', {
          ns: 'bill',
        }),
        icon: <ActionsIcon />,
        iconColor: 'primary',
        actionType: 'modal',
        actionIcon: <CardExpandIcon />,
      }}
      modal={{
        content: (
          <ActionsFilterContent
            actions={actions}
            selectedActionsType={selectedActionsType}
            onSelectActionsType={setSelectedActionsType}
          />
        ),
        maxWidth: 'lg',
        drawerSubAction: (
          <DrawerFilter
            selectedActionsType={selectedActionsType}
            onSelectActionsType={setSelectedActionsType}
          />
        ),
      }}
    >
      <Stack pt={2}>
        <Typography variant="buttonXS" mb={2}>
          {latestActionDate}
        </Typography>
        <UHeightLimitedText maxLine={4} variant="body">
          {latestAction?.description ?? ''}
        </UHeightLimitedText>
      </Stack>
    </UContentCardWithModal>
  )
}
