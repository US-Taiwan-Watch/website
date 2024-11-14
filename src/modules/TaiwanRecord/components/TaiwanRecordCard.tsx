'use client'

import UAccordion from '@/common/components/atoms/UAccordion'
import TaiwanRecord from '@/modules/TaiwanRecord/classes/TaiwanRecord'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import { ExpandMoreIcon, LinkIcon } from '@/common/styles/assets/Icons'
import { memo, useMemo } from 'react'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import { useTheme } from '@mui/material'
import { USTWTheme } from '@/common/lib/mui/theme'
import UHeightLimitedText from '@/common/components/atoms/UHeightLimitedText'
import UHStack from '@/common/components/atoms/UHStack'
import UIconButton from '@/common/components/atoms/UIconButton'
import Link from 'next/link'
import Image from 'next/image'

const DATE_FORMAT = 'MMM DD, YYYY'
const MAX_IMAGE_TO_SHOW = 4

interface TaiwanRecordCardProps {
  taiwanRecord: TaiwanRecord
}

const TaiwanRecordCard = ({ taiwanRecord }: TaiwanRecordCardProps) => {
  const theme = useTheme<USTWTheme>()

  /**
   * 計算剩餘圖片數量，
   * 假設圖片總數為 10，最多顯示 4 張，剩餘圖片數量為 5
   */
  const imageCountLeft = useMemo(() => {
    if (!taiwanRecord.images) return 0
    return Math.max(0, taiwanRecord.images.length - (MAX_IMAGE_TO_SHOW - 1))
  }, [taiwanRecord])

  const dateAndAuthor = useMemo(() => {
    return `${taiwanRecord.createdAt?.format(DATE_FORMAT)} | ${
      taiwanRecord.author
    }`
  }, [taiwanRecord])

  return (
    <UAccordion expanded>
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
                      width: '100%',
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
                        +{imageCountLeft}
                      </Typography>
                    </Box>
                  )}
                </Box>
              ))}
          </UHStack>
          <Stack gap={theme.spacing(0.5)}>
            <Typography variant="bodyS">{dateAndAuthor}</Typography>
            {taiwanRecord.sources && (
              <UHStack gap={theme.spacing(1)}>
                <UIconButton
                  variant="rounded"
                  color="black"
                  sx={{
                    backgroundColor: theme.color.grey[3700],
                    width: 18,
                    height: 18,
                    '& svg': {
                      width: 10,
                      height: 10,
                    },
                  }}
                >
                  <LinkIcon />
                </UIconButton>
                <Typography variant="bodyS">
                  Sources From {taiwanRecord.sources.from}
                </Typography>
              </UHStack>
            )}
            <Stack>
              {taiwanRecord.sources?.links.map((link, index) => (
                <Link
                  href={link}
                  key={index}
                  rel="noopener noreferrer"
                  target="_blank"
                  style={{
                    maxWidth: 'fit-content',
                    textDecoration: 'underline',
                    textDecorationColor: theme.color.neutral[400],
                  }}
                >
                  <Typography
                    variant="bodyS"
                    fontSize={12}
                    color={theme.color.neutral[400]}
                  >
                    {link}
                  </Typography>
                </Link>
              ))}
            </Stack>
          </Stack>
        </Stack>
      </AccordionDetails>
    </UAccordion>
  )
}

export default memo(TaiwanRecordCard)
