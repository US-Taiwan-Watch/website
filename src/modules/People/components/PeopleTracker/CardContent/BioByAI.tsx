import UContentCard from '@/common/components/atoms/UContentCard'
import { StarsIcon } from '@/common/styles/assets/Icons'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import useTranslationClient from '@/common/lib/i18n/hooks/useTranslationClient'

interface BioByAIProps {
  bioByAI?: string
}

const BioByAI = function ({ bioByAI }: BioByAIProps) {
  const { t } = useTranslationClient(['people'])

  return (
    <UContentCard
      withHeader
      headerProps={{
        headerIconAction: 'modal',
        title: t('page.card.bioByAI.title', { ns: 'people' }),
        icon: <StarsIcon />,
        iconColor: 'primary',
      }}
      overflowHidden
      popupProps={{
        popupContent: <Typography component="p">{bioByAI}</Typography>,
      }}
      noContentPlaceholder={
        <Typography variant="subtitleXL" fontWeight={400}>
          {t('page.card.bioByAI.placeholder', { ns: 'people' })}
        </Typography>
      }
    >
      <Box sx={{ py: 1 }}>
        {bioByAI ? (
          <Typography component="p">{bioByAI}</Typography>
        ) : (
          <Typography variant="h5" fontWeight={400}>
            {t('page.card.bioByAI.placeholder', { ns: 'people' })}
          </Typography>
        )}
      </Box>
    </UContentCard>
  )
}

export default BioByAI
