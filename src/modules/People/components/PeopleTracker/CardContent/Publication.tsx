import { DocumentIcon } from '@/common/styles/assets/Icons'
import { Stack, Typography, useTheme } from '@mui/material'
import { USTWTheme } from '@/common/lib/mui/theme'
import UContentCard from '@/common/components/atoms/UContentCard'

type PublicationArg = {
  title: string
  description: string
}

const MOCK_PUBLICATIONS: Array<PublicationArg> = [
  {
    title: "Leo Tolstoy's War and Peace (Translated for Cats)",
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
  },
  {
    title: 'Thus Spoke Zarathustra (For Your Cat) (The Meow Library)',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
  },
  {
    title: "Leo Tolstoy's War and Peace (Translated for Cats)",
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
  },
  {
    title: 'Thus Spoke Zarathustra (For Your Cat) (The Meow Library)',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
  },
  {
    title: "Leo Tolstoy's War and Peace (Translated for Cats)",
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
  },
  {
    title: 'Thus Spoke Zarathustra (For Your Cat) (The Meow Library)',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
  },
  {
    title: "Leo Tolstoy's War and Peace (Translated for Cats)",
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
  },
  {
    title: 'Thus Spoke Zarathustra (For Your Cat) (The Meow Library)',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
  },
]

/**
 * 出版品行
 * @param publication 出版品
 * @returns 出版品行
 */
const PublicationRow = function PublicationRow({
  publication,
  simplified = false,
}: {
  publication: PublicationArg
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
      <Typography
        variant="bodyS"
        fontWeight={500}
        sx={{
          ...(simplified && {
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }),
        }}
      >
        {publication.description}
      </Typography>
    </Stack>
  )
}

// TODO: 確認資料來源
interface PublicationProps {
  /**
   * 出版品
   */
  publications?: Array<PublicationArg>
}

/**
 * 出版品元件
 * @param publications 出版品
 * @param onActionClick 點擊事件
 * @returns 出版品元件
 */
const Publication = function Publication({
  publications = MOCK_PUBLICATIONS,
}: PublicationProps) {
  return (
    <UContentCard
      headerIconAction="modal"
      withHeader
      headerProps={{
        title: 'Publication',
        icon: <DocumentIcon />,
        iconColor: 'primary',
      }}
      modalContent={publications.map((publication, index) => (
        <PublicationRow
          key={index}
          publication={publication}
          simplified={false}
        />
      ))}
      overflowHidden
    >
      {publications.map((publication, index) => (
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
