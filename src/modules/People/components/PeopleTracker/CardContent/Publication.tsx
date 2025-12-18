import { DocumentIcon } from '@/common/styles/assets/Icons'
import { Stack, Typography, useTheme } from '@mui/material'
import { USTWTheme } from '@/common/lib/mui/theme'
import UContentCard from '@/common/components/atoms/UContentCard'
import UHeightLimitedText from '@/common/components/atoms/UHeightLimitedText'
import { People } from '@/modules/People/business/People'
import useTranslationClient from '@/common/lib/i18n/hooks/useTranslationClient'

/**
 * 出版品行
 * @param publication 出版品
 * @returns 出版品行
 */
const PublicationRow = function PublicationRow({
  publication,
  simplified = false,
}: {
  publication: People['publications'][number]
  simplified?: boolean
}) {
  const theme = useTheme<USTWTheme>()

  return (
    <Stack
      className="publication-row"
      sx={{
        padding: theme.spacing(2, 1),
        '&:not(:last-child)': {
          borderBottom: `1px solid ${theme.color.grey[1900]}`,
        },
      }}
    >
      <Typography variant="bodyM" fontWeight={700}>
        {publication.title}
      </Typography>
      {simplified ? (
        <UHeightLimitedText variant="bodyS" fontWeight={500} maxLine={3}>
          {publication.abstract}
        </UHeightLimitedText>
      ) : (
        <Typography variant="bodyS" fontWeight={500}>
          {publication.abstract}
        </Typography>
      )}
    </Stack>
  )
}

interface PublicationProps {
  /**
   * 出版品
   */
  publications: People['publications']
}

/**
 * 出版品元件
 * @param publications 出版品
 * @returns 出版品元件
 */
const Publication = function Publication({ publications }: PublicationProps) {
  const { t } = useTranslationClient(['people'])

  return (
    <UContentCard
      withHeader
      headerProps={{
        headerIconAction: 'modal',
        title: t('page.card.publication.title', { ns: 'people' }),
        icon: <DocumentIcon />,
        iconColor: 'primary',
      }}
      popupProps={{
        popupContent: publications?.map((publication, index) => (
          <PublicationRow
            key={index}
            publication={publication}
            simplified={false}
          />
        )),
      }}
      overflowHidden
      noContentPlaceholder={
        <Typography variant="subtitleXL" fontWeight={400}>
          {t('page.card.publication.placeholder', { ns: 'people' })}
        </Typography>
      }
    >
      {publications?.map((publication, index) => (
        <PublicationRow
          key={index}
          publication={publication}
          simplified={true}
        />
      ))}
    </UContentCard>
  )
}

export default Publication
