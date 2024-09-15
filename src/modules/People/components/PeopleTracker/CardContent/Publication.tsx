import UCardHeader from '@/common/components/atoms/UCardHeader'
import { DocumentIcon } from '@/common/styles/assets/Icons'
import {
  Box,
  Card,
  CardContent,
  Dialog,
  Stack,
  Typography,
  useTheme,
} from '@mui/material'
import UIconButton from '@/common/components/atoms/UIconButton'
import { USTWTheme } from '@/common/lib/mui/theme'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close'

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
  /**
   * 是否是彈窗
   */
  isModal?: boolean
  /**
   * 點擊事件
   */
  onActionClick?: () => void
}

/**
 * 出版品元件
 * @param publications 出版品
 * @param onActionClick 點擊事件
 * @returns 出版品元件
 */
const Publication = function Publication({
  publications = MOCK_PUBLICATIONS,
  isModal,
  onActionClick,
}: PublicationProps) {
  const theme = useTheme<USTWTheme>()
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleActionClick = () => {
    if (!isModal) {
      setIsModalOpen(true)
    } else {
      onActionClick?.()
    }
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  return (
    <>
      <UCardHeader
        title="Publication"
        icon={<DocumentIcon />}
        iconColor="primary"
        action={
          <UIconButton
            variant="rounded"
            color="inherit"
            size="small"
            onClick={handleActionClick}
          >
            {isModal ? (
              <CloseIcon sx={{ color: theme.color.neutral[500] }} />
            ) : (
              <ArrowForwardIcon sx={{ color: theme.color.neutral[500] }} />
            )}
          </UIconButton>
        }
      />
      <CardContent sx={{ padding: 0 }}>
        {publications.map((publication, index) => (
          <PublicationRow
            key={index}
            publication={publication}
            simplified={!isModal}
          />
        ))}
      </CardContent>
      {isModalOpen && (
        <Dialog
          open={isModalOpen}
          onClose={handleCloseModal}
          PaperProps={{
            sx: {
              width: '100%',
              borderRadius: theme.shape.borderRadius,
            },
          }}
        >
          <Box
            sx={{
              bgcolor: 'background.paper',
            }}
          >
            <Card
              sx={{
                padding: 2,
                '& .MuiCardContent-root:last-child': {
                  padding: 0,
                },
              }}
            >
              <Publication
                isModal
                onActionClick={handleCloseModal}
                publications={publications}
              />
            </Card>
          </Box>
        </Dialog>
      )}
    </>
  )
}

export default Publication
