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

type SourceMetadata = {
  /** 連結 */
  link: string
  /** 網站 favicon */
  favicon: string
  /** 網站名稱 */
  siteName: string
  /** 網站 title */
  title: string
  /** 網站 description */
  description: string
}

const getMetadata = async (link: string): Promise<SourceMetadata | null> => {
  try {
    const response = await fetch(link)
    const html = await response.text()

    // 使用正則表達式或 DOM parser 來提取 metadata
    const favicon = html.match(/<link rel="icon" href="(.*?)"/i)?.[1] || ''
    const siteName =
      html.match(/<meta property="og:site_name" content="(.*?)"/i)?.[1] ||
      new URL(link).hostname
    const title = html.match(/<title>(.*?)<\/title>/i)?.[1] || ''
    const description =
      html.match(/<meta name="description" content="(.*?)"/i)?.[1] || ''

    return {
      link,
      favicon,
      siteName,
      title,
      description,
    }
  } catch {
    return null
  }
}

interface SourcesDialogProps {
  sources: Sources
  isModalOpen: boolean
  handleCloseModal: () => void
}

const SourcesDialog = memo(function SourcesDialog(props: SourcesDialogProps) {
  const theme = useTheme<USTWTheme>()
  const { sources, isModalOpen, handleCloseModal } = props

  const [metadata, setMetadata] = useState<SourceMetadata[]>([])

  useEffect(() => {
    const fetchMetadata = async () => {
      const metadata = await Promise.all(sources.links.map(getMetadata))
      setMetadata(metadata.filter((m) => !isNull(m)))
    }
    fetchMetadata()
  }, [sources])

  // TODO: i18n
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
          {metadata.map((m, index) => (
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
                    <Avatar src={m.favicon} sx={{ width: 16, height: 16 }} />
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
              {index !== metadata.length - 1 && (
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

const getFavicon = async (link: string) => {
  const url = new URL(link).origin
  const faviconUrl = `${url}/favicon.ico`
  const response = await fetch(faviconUrl)
  const blob = await response.blob()
  return URL.createObjectURL(blob)
}

interface TaiwanRecordSourcesProps {
  sources: Sources
}

const TaiwanRecordSources = ({ sources }: TaiwanRecordSourcesProps) => {
  const { isModalOpen, handleOpenModal, handleCloseModal } = useModal()
  const [favicons, setFavicons] = useState<string[]>([])

  useEffect(() => {
    const fetchFavicons = async () => {
      try {
        const favicons = await Promise.all(sources.links.map(getFavicon))
        setFavicons(favicons)
      } catch {
        setFavicons([])
      }
    }
    fetchFavicons()
  }, [sources])

  return (
    <Box width="max-content">
      <Button onClick={handleOpenModal}>
        <AvatarGroup total={favicons.length} max={MAX_FAVICON_AVATAR_COUNT}>
          {favicons.map((favicon, index) => (
            <Avatar
              key={index}
              alt={new URL(sources.links[index]).hostname}
              src={favicon}
            />
          ))}
        </AvatarGroup>
      </Button>
      <SourcesDialog
        sources={sources}
        isModalOpen={isModalOpen}
        handleCloseModal={handleCloseModal}
      />
    </Box>
  )
}

export default memo(TaiwanRecordSources)
