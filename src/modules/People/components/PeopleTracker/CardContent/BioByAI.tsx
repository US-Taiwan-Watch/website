import UContentCardWithModal from '@/common/components/atoms/UContentCardWithModal'
import { StarsIcon } from '@/common/styles/assets/Icons'
import Typography from '@mui/material/Typography'
import useTranslationClient from '@/common/lib/i18n/hooks/useTranslationClient'

interface BioByAIProps {
  bioByAI?: string
}

const BioByAI = function ({ bioByAI }: BioByAIProps) {
  const { t } = useTranslationClient(['people'])

  return (
    <UContentCardWithModal
      header={{
        title: t('page.card.bioByAI.title', { ns: 'people' }),
        icon: <StarsIcon />,
        iconColor: 'primary',
        actionType: 'modal',
      }}
      modal={{
        content: <Typography component="p">{bioByAI}</Typography>,
      }}
      overflowHidden
      noContentPlaceholder={
        <Typography variant="subtitleXL" fontWeight={400}>
          {t('page.card.bioByAI.placeholder', { ns: 'people' })}
        </Typography>
      }
    >
      {bioByAI ? (
        <Typography component="p">{bioByAI}</Typography>
      ) : (
        <Typography variant="h5" fontWeight={400}>
          {t('page.card.bioByAI.placeholder', { ns: 'people' })}
        </Typography>
      )}
    </UContentCardWithModal>
  )
}

export default BioByAI
