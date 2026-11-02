'use client'

import UAccordion from '@/common/components/atoms/UAccordion'
import { TaiwanRecord } from '@/modules/TaiwanRecord/business/TaiwanRecord'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import { ExpandMoreIcon } from '@/common/styles/assets/Icons'
import { memo, useCallback, useEffect, useMemo, useState } from 'react'
import TaiwanRecordImageGallery from './TaiwanRecordImageGallery'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import { useTheme } from '@mui/material'
import { styled, USTWTheme } from '@/common/lib/mui/theme'
import UHeightLimitedText from '@/common/components/atoms/UHeightLimitedText'
import UHStack from '@/common/components/atoms/UHStack'
import Image from 'next/image'
import TaiwanRecordSources from '@/modules/TaiwanRecord/components/TaiwanRecordSources'
import { DateUtils } from '@/modules/Common/business/Date'
import { useResponsive } from '@/common/lib/responsive/ResponsiveProvider'
import { useImageLightbox } from '@/common/components/elements/ImageLightbox/ImageLightboxProvider'

const StyledImage = styled(Image)(() => ({}))

const DATE_FORMAT = 'MMM DD, YYYY'

interface TaiwanRecordCardProps {
  taiwanRecord: TaiwanRecord
}

const TaiwanRecordCard = ({ taiwanRecord }: TaiwanRecordCardProps) => {
  const { show } = useImageLightbox()
  const { isMobile } = useResponsive()
  const theme = useTheme<USTWTheme>()
  const [isContentExpanded, setIsContentExpanded] = useState(false)
  const handleExpandContentChange = useCallback(() => {
    setIsContentExpanded((prev) => !prev)
  }, [])

  const MAX_IMAGE_TO_SHOW = isMobile ? 1 : 4

  /**
   * 計算剩餘圖片數量
   */
  const imageCountLeft = useMemo(() => {
    if (!taiwanRecord.images) return 0
    return Math.max(0, taiwanRecord.images.length - MAX_IMAGE_TO_SHOW)
  }, [taiwanRecord, MAX_IMAGE_TO_SHOW])

  const [dateAndAuthor, setDateAndAuthor] = useState('')
  useEffect(() => {
    const createdAt = DateUtils.formatLocal(taiwanRecord.createdAt, DATE_FORMAT)

    setDateAndAuthor(`${createdAt} | ${taiwanRecord.author}`)
  }, [taiwanRecord])

  const [isGalleryOpen, setIsGalleryOpen] = useState(false)
  const handleOpenGallery = useCallback(() => {
    setIsGalleryOpen(true)
  }, [])
  const handleCloseGallery = useCallback(() => {
    setIsGalleryOpen(false)
  }, [])

  return (
    <UAccordion defaultExpanded>
      <AccordionSummary expandIcon={<ExpandMoreIcon width={24} height={24} />}>
        <Typography variant="articleH3">{taiwanRecord.title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Stack gap={theme.spacing(1.5)}>
          {isContentExpanded ? (
            <Typography variant="bodyM" onClick={handleExpandContentChange}>
              {taiwanRecord.content}
            </Typography>
          ) : (
            <UHeightLimitedText
              maxLine={3}
              variant="bodyM"
              onClick={handleExpandContentChange}
            >
              {taiwanRecord.content}
            </UHeightLimitedText>
          )}
          <UHStack gap={theme.spacing(1)} sx={{ width: '100%' }}>
            {taiwanRecord.images
              ?.slice(0, MAX_IMAGE_TO_SHOW)
              .map((image, index) => (
                <Box key={index} position="relative" flex={1} height={285}>
                  <StyledImage
                    src={image.url}
                    alt={`Taiwan Record Image ${index} from ${taiwanRecord.title}`}
                    width={285}
                    height={285}
                    sx={{
                      objectFit: 'cover',
                      width: {
                        xs: '100%',
                        // 如果只有一張圖片，則寬度設為 50%
                        sm: taiwanRecord.images?.length === 1 ? '50%' : '100%',
                      },
                      cursor: 'pointer',
                    }}
                    onClick={() => show(taiwanRecord.images, index)}
                  />
                  {/** Overlay，在最後一張圖顯示剩餘圖片數量 */}
                  {index === MAX_IMAGE_TO_SHOW - 1 && imageCountLeft > 0 && (
                    <Box
                      position="absolute"
                      top={0}
                      left={0}
                      width="100%"
                      height="100%"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      zIndex={10}
                      onClick={handleOpenGallery}
                      sx={{
                        cursor: 'pointer',
                      }}
                    >
                      <Box
                        position="absolute"
                        top={0}
                        left={0}
                        width="100%"
                        height="100%"
                        bgcolor={theme.color.common.black}
                        sx={{
                          opacity: 0.5,
                        }}
                      />
                      <Typography
                        variant="subtitleXL"
                        fontSize={48}
                        color={theme.color.common.white}
                        zIndex={10}
                      >
                        {/** 剩餘圖片數量 + 1，因為最後一張圖片也算進去 */}+
                        {imageCountLeft + 1}
                      </Typography>
                    </Box>
                  )}
                </Box>
              ))}
          </UHStack>
          <Stack gap={theme.spacing(0.5)}>
            <Typography variant="bodyS">{dateAndAuthor}</Typography>
            {taiwanRecord.sources && taiwanRecord.sources.length > 0 && (
              <TaiwanRecordSources sources={taiwanRecord.sources} />
            )}
          </Stack>
        </Stack>
      </AccordionDetails>
      <TaiwanRecordImageGallery
        open={isGalleryOpen}
        images={
          taiwanRecord.images?.map((img, idx) => ({
            url: img.url,
            alt: `Taiwan Record Image ${idx + 1} from ${taiwanRecord.title}`,
          })) || []
        }
        onClose={handleCloseGallery}
        title={taiwanRecord.title}
      />
    </UAccordion>
  )
}

export default memo(TaiwanRecordCard)
