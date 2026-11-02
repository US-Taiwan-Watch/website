import UContentCardWithModal from '@/common/components/atoms/UContentCardWithModal'
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
    <UContentCardWithModal
      header={{
        title: t('page.card.summary.title', {
          ns: 'bill',
        }),
        icon: <StarsIcon />,
        iconColor: 'primary',
        actionType: 'modal',
        actionIcon: <CardExpandIcon />,
      }}
      modal={{
        content: (
          <Typography variant="body" pt={2}>
            {bill.summary}
          </Typography>
        ),
      }}
    >
      <Typography variant="body" pt={2}>
        {bill.summary}
      </Typography>
    </UContentCardWithModal>
  )
}
