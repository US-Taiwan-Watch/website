import UContentCard from '@/common/components/atoms/UContentCard'
import UContentCardHeader from '@/common/components/atoms/UContentCardHeader'
import UContentCardContent from '@/common/components/atoms/UContentCardContent'
import UContentCardDialog from '@/common/components/atoms/UContentCardDialog'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import Box from '@mui/material/Box'
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
import { LinkIcon } from '@/common/styles/assets/Icons'
import useTranslationClient from '@/common/lib/i18n/hooks/useTranslationClient'
import { TaiwanRecord } from '@/modules/TaiwanRecord/business/TaiwanRecord'

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

const getMetadata = async (link: string): Promise<SourceMetadata> => {
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
    return {
      link,
      siteName: new URL(link).hostname,
      title: '',
      description: '',
    }
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
  const { t } = useTranslationClient(['taiwan_record'])

  return (
    <UContentCardDialog
      open={isModalOpen}
      onClose={handleCloseModal}
      maxWidth="md"
      title={t('card.sources.title', { ns: 'taiwan_record' })}
    >
      <UContentCard
        sx={{
          padding: 0,
          border: 'none',
          borderRadius: 0,
        }}
      >
        <UContentCardHeader
          variant="dialog"
          title={t('card.sources.title', { ns: 'taiwan_record' })}
          action={
            <UIconButton
              variant="rounded"
              color="inherit"
              size="small"
              onClick={handleCloseModal}
            >
              <CloseIcon sx={{ color: theme.color.neutral[500] }} />
            </UIconButton>
          }
        />
        <UContentCardContent variant="dialog">
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
                      <Avatar src={m.favicon} sx={{ width: 16, height: 16 }}>
                        <LinkIcon sx={{ width: 12, height: 12 }} />
                      </Avatar>
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
        </UContentCardContent>
      </UContentCard>
    </UContentCardDialog>
  )
})

const MAX_FAVICON_AVATAR_COUNT = 4

interface TaiwanRecordSourcesProps {
  sources: TaiwanRecord['sources']
}

const TaiwanRecordSources = ({ sources }: TaiwanRecordSourcesProps) => {
  const theme = useTheme<USTWTheme>()
  const { t } = useTranslationClient(['taiwan_record'])
  const { isModalOpen, handleOpenModal, handleCloseModal } = useModal()
  const [sourceMetadatas, setSourceMetadatas] = useState<SourceMetadata[]>([])

  useEffect(() => {
    const fetchSourceMetadatas = async () => {
      const sourceMetadatas = await Promise.all(
        sources.map((s) => getMetadata(s.url))
      )
      setSourceMetadatas(sourceMetadatas)
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
          py: {
            xs: 0.5,
            sm: 1,
          },
          px: {
            xs: 1,
            sm: 1.5,
          },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 1,
          borderRadius: theme.shape.borderRadius * 5,
        }}
      >
        <Typography variant="buttonXXS">
          {t('card.sources.btn', { ns: 'taiwan_record' })}
        </Typography>
        <AvatarGroup
          total={sourceMetadatas.length}
          max={MAX_FAVICON_AVATAR_COUNT}
        >
          {sourceMetadatas.map((m, index) => (
            <Avatar
              sx={{
                width: 16,
                height: 16,
              }}
              key={index}
              alt={new URL(sources[index].url).hostname}
              src={m.favicon}
            >
              <LinkIcon sx={{ width: 12, height: 12 }} />
            </Avatar>
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
