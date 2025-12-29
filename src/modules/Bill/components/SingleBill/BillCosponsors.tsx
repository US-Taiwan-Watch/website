'use client'

import UContentCard from '@/common/components/atoms/UContentCard'
import { CosponsorsIcon } from '@/common/styles/assets/Icons'
import CosponsorChart from '@/modules/Bill/components/SingleBill/CosponsorChart'
import CosponsorFilterContent from '@/modules/Bill/components/SingleBill/CosponsorFilter/CosponsorFilterContent'
import { Bill, BillUtils } from '@/modules/Bill/business/Bill'
import CardExpandIcon from '@/modules/Bill/components/SingleBill/CardExpandIcon'
import { BillCosponsor } from '@/modules/Bill/business/BillCosponsor'
import useCosponsorFilter from '@/modules/Bill/components/SingleBill/CosponsorFilter/useCosponsorFilter'
import { createFilterCategories } from '@/modules/Bill/components/SingleBill/CosponsorFilter/utils'
import { useMemo } from 'react'
import DrawerFilter from '@/modules/Bill/components/SingleBill/CosponsorFilter/DrawerFilter'
import { useResponsive } from '@/common/lib/responsive/ResponsiveProvider'
import useTranslationClient from '@/common/lib/i18n/hooks/useTranslationClient'

type Props = {
  bill: Bill
}

export default function BillCosponsors({ bill }: Props) {
  const { isMobile } = useResponsive()
  const { t } = useTranslationClient('bill')
  const { selectedOptionList, handleSelectOption, clearAll } =
    useCosponsorFilter()
  const filterCategories = useMemo(() => createFilterCategories(bill), [bill])

  const cosponsors = useMemo<BillCosponsor[]>(() => {
    return bill.cosponsors.filter(({ people, constituency }) => {
      const partyMatch =
        selectedOptionList.party.length && people?.party
          ? selectedOptionList.party.includes(people.party)
          : true

      const constituencyMatch = selectedOptionList.constituency.length
        ? selectedOptionList.constituency.includes(constituency ?? '')
        : true

      return partyMatch && constituencyMatch
    })
  }, [bill, selectedOptionList])

  return (
    <>
      <UContentCard
        withHeader
        headerProps={{
          headerIconAction: 'modal',
          title: t('page.card.cosponsors.title', {
            ns: 'bill',
          }),
          icon: <CosponsorsIcon />,
          iconColor: 'primary',
          actionIcon: <CardExpandIcon />,
        }}
        contentProps={{
          sx: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          },
        }}
        popupProps={{
          popupContent: (
            <CosponsorFilterContent
              cosponsors={cosponsors}
              selectedOptionList={selectedOptionList}
              handleSelectOption={handleSelectOption}
              clearAll={clearAll}
              filterCategories={filterCategories}
            />
          ),
          popupDialogMaxWidth: 'lg',
          ...(isMobile && {
            popupSubAction: (
              <DrawerFilter
                selectedOptionList={selectedOptionList}
                handleSelectOption={handleSelectOption}
                clearAll={clearAll}
                filterCategories={filterCategories}
              />
            ),
          }),
        }}
      >
        <CosponsorChart data={BillUtils.getCosponsorsParliamentData(bill)} />
      </UContentCard>
    </>
  )
}
