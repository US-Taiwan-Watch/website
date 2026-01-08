'use client'

import UContentCardWithModal from '@/common/components/atoms/UContentCardWithModal'
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
import useTranslationClient from '@/common/lib/i18n/hooks/useTranslationClient'

type Props = {
  bill: Bill
}

export default function BillCosponsors({ bill }: Props) {
  const { t } = useTranslationClient('bill')
  const { selectedOptionList, handleSelectOption, clearAll } =
    useCosponsorFilter()
  const filterCategories = useMemo(() => createFilterCategories(bill), [bill])

  const cosponsors = useMemo<BillCosponsor[]>(() => {
    return bill.cosponsors.filter(({ constituency, party }) => {
      const partyMatch =
        selectedOptionList.party.length && party
          ? selectedOptionList.party.includes(party)
          : true

      const constituencyMatch = selectedOptionList.constituency.length
        ? selectedOptionList.constituency.includes(constituency ?? '')
        : true

      return partyMatch && constituencyMatch
    })
  }, [bill, selectedOptionList])

  const data = useMemo(() => {
    return BillUtils.getCosponsorsParliamentData(bill)
  }, [bill])

  const isDataEmpty = Object.values(data).every((value) => value.count === 0)

  return (
    <UContentCardWithModal
      header={{
        title: t('page.card.cosponsors.title', {
          ns: 'bill',
        }),
        ...(!isDataEmpty && {
          icon: <CosponsorsIcon />,
          iconColor: 'primary',
          actionType: 'modal',
          actionIcon: <CardExpandIcon />,
        }),
      }}
      modal={{
        content: (
          <CosponsorFilterContent
            cosponsors={cosponsors}
            selectedOptionList={selectedOptionList}
            handleSelectOption={handleSelectOption}
            clearAll={clearAll}
            filterCategories={filterCategories}
          />
        ),
        maxWidth: 'lg',
        drawerSubAction: (
          <DrawerFilter
            selectedOptionList={selectedOptionList}
            handleSelectOption={handleSelectOption}
            clearAll={clearAll}
            filterCategories={filterCategories}
          />
        ),
      }}
      sx={{
        '& .MuiCardContent-root': {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        },
      }}
    >
      <CosponsorChart data={data} />
    </UContentCardWithModal>
  )
}
