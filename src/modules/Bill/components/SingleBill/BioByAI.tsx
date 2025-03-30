import UContentCard from '@/common/components/atoms/UContentCard'
import { StarsIcon } from '@/common/styles/assets/Icons'
import { Typography } from '@mui/material'
import CardExpandIcon from '@/modules/Bill/components/SingleBill/CardExpandIcon'
import { Bill } from '@/modules/Bill/business/Bill'
import useTranslationClient from '@/common/lib/i18n/hooks/useTranslationClient'

type Props = {
  bill: Bill
}

export default function BioByAI({ bill }: Props) {
  const { t } = useTranslationClient('bill')

  return (
    <UContentCard
      withHeader
      popupProps={{
        popupContent: (
          <Typography variant="body" pt={2}>
            {bill.summary}
          </Typography>
        ),
      }}
      headerProps={{
        headerIconAction: 'modal',
        title: t('page.card.summary.title', {
          ns: 'bill',
        }),
        icon: <StarsIcon />,
        iconColor: 'primary',
        actionIcon: <CardExpandIcon />,
      }}
    >
      <Typography variant="body" pt={2}>
        {bill.summary}
      </Typography>
    </UContentCard>
  )
}
