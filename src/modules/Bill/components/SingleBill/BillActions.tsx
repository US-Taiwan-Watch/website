'use client'

import UContentCard from '@/common/components/atoms/UContentCard'
import { ActionsIcon } from '@/common/styles/assets/Icons'
import { Stack, Typography } from '@mui/material'
import { Bill, BillUtils } from '@/modules/Bill/business/Bill'
import UHeightLimitedText from '@/common/components/atoms/UHeightLimitedText'
import CardExpandIcon from '@/modules/Bill/components/SingleBill/CardExpandIcon'
import ActionsFilterContent from '@/modules/Bill/components/SingleBill/ActionsFilter/ActionsFilterContent'
import { useState, useMemo, useEffect } from 'react'
import { ActionsType } from '@/modules/Bill/components/SingleBill/ActionsFilter/ActionsFilter'
import { useResponsive } from '@/common/lib/responsive/ResponsiveProvider'
import DrawerFilter from '@/modules/Bill/components/SingleBill/ActionsFilter/DrawerFilter'
import useTranslationClient from '@/common/lib/i18n/hooks/useTranslationClient'
import { DateUtils } from '@/modules/Common/business/Date'

const DATE_FORMAT = 'MM/DD/YYYY'

type Props = {
  bill: Bill
}

export default function BillActions({ bill }: Props) {
  const { isMobile } = useResponsive()
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

  const [latestActionDate, setLatestActionDate] = useState('')
  useEffect(() => {
    const latestAction = BillUtils.getLatestAction(bill)
    setLatestActionDate(DateUtils.formatDc(latestAction.date, DATE_FORMAT))
  }, [bill])

  return (
    <>
      <UContentCard
        withHeader
        headerProps={{
          headerIconAction: 'modal',
          title: t('page.card.actions.title', {
            ns: 'bill',
          }),
          icon: <ActionsIcon />,
          iconColor: 'primary',
          actionIcon: <CardExpandIcon />,
        }}
        popupProps={{
          popupContent: (
            <ActionsFilterContent
              actions={actions}
              selectedActionsType={selectedActionsType}
              onSelectActionsType={setSelectedActionsType}
            />
          ),
          popupDialogMaxWidth: 'lg',
          ...(isMobile && {
            popupSubAction: (
              <DrawerFilter
                selectedActionsType={selectedActionsType}
                onSelectActionsType={setSelectedActionsType}
              />
            ),
          }),
        }}
      >
        <Stack pt={2}>
          <Typography variant="buttonXS" mb={2}>
            {latestActionDate}
          </Typography>
          <UHeightLimitedText maxLine={4} variant="body">
            {BillUtils.getLatestAction(bill)?.description}
          </UHeightLimitedText>
        </Stack>
      </UContentCard>
    </>
  )
}
