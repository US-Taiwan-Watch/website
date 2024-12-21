import UContentCard from '@/common/components/atoms/UContentCard'
import UContentCardDialog from '@/common/components/atoms/UContentCardDialog'
import { Sources } from '@/modules/TaiwanRecord/classes/TaiwanRecord'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import Box from '@mui/material/Box'
import { isNull } from 'lodash-es'
import { Fragment, memo, useEffect, useState } from 'react'
import UIconButton from '@/common/components/atoms/UIconButton'
import CloseIcon from '@mui/icons-material/Close'
import { USTWTheme } from '@/common/lib/mui/theme'
import { useTheme } from '@mui/material'
import Stack from '@mui/material/Stack'
import UHStack from '@/common/components/atoms/UHStack'
import Typography from '@mui/material/Typography'
import UHeightLimitedText from '@/common/components/atoms/UHeightLimitedText'
import useModal from '@/common/hooks/useModal'
import Button from '@mui/material/Button'
import Link from 'next/link'
import Divider from '@mui/material/Divider'
import { getLinkPreview } from 'link-preview-js'

type SourceMetadata = {
  /** 連結 */
  link: string
  /** 網站 favicon */
  favicon?: string
  /** 網站名稱 */
  siteName: string
  /** 網站 title */
  title: string
  /** 網站 description */
  description: string
}

const getMetadata = async (link: string): Promise<SourceMetadata | null> => {
  try {
    const linkPreview = (await getLinkPreview(link)) as {
      favicons: string[]
      siteName: string
      title: string
      description: string
    }

    const favicon = linkPreview.favicons[0]

    return {
      link,
      favicon,
      siteName: linkPreview.siteName,
      title: linkPreview.title,
      description: linkPreview.description,
    }
  } catch {
    return null
  }
}

interface SourcesDialogProps {
  sourceMetadatas: SourceMetadata[]
  isModalOpen: boolean
  handleCloseModal: () => void
}

const SourcesDialog = memo(function SourcesDialog(props: SourcesDialogProps) {
  const theme = useTheme<USTWTheme>()
  const { sourceMetadatas, isModalOpen, handleCloseModal } = props

  return (
    <UContentCardDialog
      open={isModalOpen}
      onClose={handleCloseModal}
      maxWidth="md"
      title="Sources"
    >
      <UContentCard
        withHeader
        headerProps={{
          // TODO: i18n
          title: 'Sources',
          action: (
            <UIconButton
              variant="rounded"
              color="inherit"
              size="small"
              onClick={handleCloseModal}
            >
              <CloseIcon sx={{ color: theme.color.neutral[500] }} />
            </UIconButton>
          ),
        }}
        sx={{
          padding: 0,
          border: 'none',
          borderRadius: 0,
        }}
      >
        <Stack
          sx={{
            margin: `${theme.spacing(1)} 0`,
          }}
        >
          {sourceMetadatas.map((m, index) => (
            <Fragment key={m.link}>
              <Link href={m.link} target="_blank" rel="noopener noreferrer">
                <Stack
                  sx={{
                    px: 1.5,
                    py: 1,
                    borderRadius: theme.shape.borderRadius / 2,
                    '&:hover': {
                      backgroundColor: theme.color.grey[100],
                    },
                  }}
                >
                  <UHStack gap={1} alignItems="center">
                    {m.favicon && (
                      <Avatar src={m.favicon} sx={{ width: 16, height: 16 }} />
                    )}
                    <Typography variant="body2">{m.siteName}</Typography>
                  </UHStack>
                  <Typography fontWeight={500}>{m.title}</Typography>
                  <UHeightLimitedText
                    maxLine={2}
                    sx={{
                      color: theme.color.grey[1000],
                    }}
                  >
                    {m.description}
                  </UHeightLimitedText>
                </Stack>
              </Link>
              {index !== sourceMetadatas.length - 1 && (
                <Divider
                  sx={{
                    borderColor: theme.color.neutral[200],
                    my: 1,
                  }}
                />
              )}
            </Fragment>
          ))}
        </Stack>
      </UContentCard>
    </UContentCardDialog>
  )
})

const MAX_FAVICON_AVATAR_COUNT = 4

interface TaiwanRecordSourcesProps {
  sources: Sources
}

const TaiwanRecordSources = ({ sources }: TaiwanRecordSourcesProps) => {
  const theme = useTheme<USTWTheme>()
  const { isModalOpen, handleOpenModal, handleCloseModal } = useModal()
  const [sourceMetadatas, setSourceMetadatas] = useState<SourceMetadata[]>([])

  useEffect(() => {
    const fetchSourceMetadatas = async () => {
      const sourceMetadatas = await Promise.all(sources.links.map(getMetadata))
      setSourceMetadatas(sourceMetadatas.filter((m) => !isNull(m)))
    }
    fetchSourceMetadatas()
  }, [sources])

  if (!sourceMetadatas.length) return null

  return (
    <Box width="max-content">
      <Button
        variant="outlined"
        color="info"
        onClick={handleOpenModal}
        sx={{
          minWidth: 'fit-content',
          py: 1,
          px: 1.5,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 1,
          borderRadius: theme.shape.borderRadius * 5,
        }}
      >
        <Typography variant="body2">Sources</Typography>
        <AvatarGroup
          total={sourceMetadatas.length}
          max={MAX_FAVICON_AVATAR_COUNT}
        >
          {sourceMetadatas
            .filter((m) => m.favicon)
            .map((m, index) => (
              <Avatar
                sx={{
                  width: 16,
                  height: 16,
                }}
                key={index}
                alt={new URL(sources.links[index]).hostname}
                src={m.favicon}
              />
            ))}
        </AvatarGroup>
      </Button>
      <SourcesDialog
        sourceMetadatas={sourceMetadatas}
        isModalOpen={isModalOpen}
        handleCloseModal={handleCloseModal}
      />
    </Box>
  )
}

export default memo(TaiwanRecordSources)
