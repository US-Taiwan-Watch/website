'use client'

import UAccordion from '@/common/components/atoms/UAccordion'
import TaiwanRecord from '@/modules/TaiwanRecord/classes/TaiwanRecord'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import { ExpandMoreIcon, LinkIcon } from '@/common/styles/assets/Icons'
import { memo, useMemo } from 'react'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import { useTheme } from '@mui/material'
import { USTWTheme } from '@/common/lib/mui/theme'
import UHeightLimitedText from '@/common/components/atoms/UHeightLimitedText'
import UHStack from '@/common/components/atoms/UHStack'
import UIconButton from '@/common/components/atoms/UIconButton'
import Link from 'next/link'

const DATE_FORMAT = 'MMM DD, YYYY'

interface TaiwanRecordCardProps {
  taiwanRecord: TaiwanRecord
}

const TaiwanRecordCard = ({ taiwanRecord }: TaiwanRecordCardProps) => {
  const theme = useTheme<USTWTheme>()

  const dateAndAuthor = useMemo(() => {
    return `${taiwanRecord.createdAt?.format(DATE_FORMAT)} | ${
      taiwanRecord.author
    }`
  }, [taiwanRecord])

  return (
    <UAccordion>
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
            {taiwanRecord.description}
          </UHeightLimitedText>
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
