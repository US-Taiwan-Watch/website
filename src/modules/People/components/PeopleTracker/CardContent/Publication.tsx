import { DocumentIcon } from '@/common/styles/assets/Icons'
import { Stack, Typography, useTheme } from '@mui/material'
import { USTWTheme } from '@/common/lib/mui/theme'
import UContentCardWithModal from '@/common/components/atoms/UContentCardWithModal'
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
        '&:not(:last-child)': {
          borderBottom: `1px solid ${theme.color.grey[1900]}`,
          pb: {
            xs: '15px',
            md: 3,
          },
        },
      }}
    >
      <Typography
        sx={{
          fontSize: {
            xs: '14px',
            md: '18px',
          },
          fontWeight: 700,
        }}
      >
        {publication.title}
      </Typography>
      {simplified ? (
        <UHeightLimitedText
          sx={{
            fontSize: {
              xs: '12px',
              md: '16px',
            },
            fontWeight: 400,
          }}
          maxLine={3}
        >
          {publication.abstract}
        </UHeightLimitedText>
      ) : (
        <Typography
          sx={{
            fontSize: {
              xs: '12px',
              md: '16px',
            },
            fontWeight: 400,
          }}
        >
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
    <UContentCardWithModal
      header={{
        title: t('page.card.publication.title', { ns: 'people' }),
        icon: <DocumentIcon />,
        iconColor: 'primary',
        actionType: 'modal',
      }}
      modal={{
        content: (
          <Stack
            gap={{
              xs: '15px',
              md: 3,
            }}
          >
            {publications?.map((publication, index) => (
              <PublicationRow
                key={index}
                publication={publication}
                simplified={false}
              />
            ))}
          </Stack>
        ),
      }}
      overflowHidden
      noContentPlaceholder={
        <Typography variant="subtitleXL" fontWeight={400}>
          {t('page.card.publication.placeholder', { ns: 'people' })}
        </Typography>
      }
    >
      <Stack
        gap={{
          xs: '15px',
          md: 3,
        }}
      >
        {publications?.map((publication, index) => (
          <PublicationRow
            key={index}
            publication={publication}
            simplified={true}
          />
        ))}
      </Stack>
    </UContentCardWithModal>
  )
}

export default Publication
