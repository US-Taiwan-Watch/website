'use client'

import UAccordion from '@/common/components/atoms/UAccordion'
import { TaiwanRecord } from '@/modules/TaiwanRecord/business/TaiwanRecord'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import { ExpandMoreIcon } from '@/common/styles/assets/Icons'
import { memo, useMemo } from 'react'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import { useTheme } from '@mui/material'
import { USTWTheme } from '@/common/lib/mui/theme'
import UHeightLimitedText from '@/common/components/atoms/UHeightLimitedText'
import UHStack from '@/common/components/atoms/UHStack'
import Image from 'next/image'
import TaiwanRecordSources from '@/modules/TaiwanRecord/components/TaiwanRecordSources'
import dayjs from 'dayjs'

const DATE_FORMAT = 'MMM DD, YYYY'
const MAX_IMAGE_TO_SHOW = 4

interface TaiwanRecordCardProps {
  taiwanRecord: TaiwanRecord
}

const TaiwanRecordCard = ({ taiwanRecord }: TaiwanRecordCardProps) => {
  const theme = useTheme<USTWTheme>()

  /**
   * 計算剩餘圖片數量
   */
  const imageCountLeft = useMemo(() => {
    if (!taiwanRecord.images) return 0
    return Math.max(0, taiwanRecord.images.length - MAX_IMAGE_TO_SHOW)
  }, [taiwanRecord])

  const dateAndAuthor = useMemo(() => {
    const createdAt = dayjs(taiwanRecord.createdAt)

    if (!createdAt.isValid()) return ''

    return `${createdAt.format(DATE_FORMAT)} | ${taiwanRecord.author}`
  }, [taiwanRecord])

  return (
    <UAccordion defaultExpanded>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon width={24} height={24} />}
        aria-controls="panel1-content"
        id="panel1-header"
      >
        <Typography variant="articleH3">{taiwanRecord.title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Stack gap={theme.spacing(1.5)}>
          <UHeightLimitedText maxLine={3} variant="bodyM">
            {taiwanRecord.content}
          </UHeightLimitedText>
          <UHStack gap={theme.spacing(1)} sx={{ width: '100%' }}>
            {taiwanRecord.images
              ?.slice(0, MAX_IMAGE_TO_SHOW)
              .map((image, index) => (
                <Box key={index} position="relative" flex={1} height={285}>
                  <Image
                    src={image}
                    alt={`Taiwan Record Image ${index}`}
                    width={285}
                    height={285}
                    style={{
                      objectFit: 'cover',
                      // 如果只有一張圖片，則寬度設為 50%
                      width: taiwanRecord.images?.length === 1 ? '50%' : '100%',
                    }}
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
            {taiwanRecord.sources && taiwanRecord.sources.links.length > 0 && (
              <TaiwanRecordSources sources={taiwanRecord.sources} />
            )}
          </Stack>
        </Stack>
      </AccordionDetails>
    </UAccordion>
  )
}

export default memo(TaiwanRecordCard)
