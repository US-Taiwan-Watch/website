'use client'

import UButton from '@/common/components/atoms/UButton'
import UHStack from '@/common/components/atoms/UHStack'
import { USTWTheme } from '@/common/lib/mui/theme'
import {
  OpinionRepostSource,
  OpinionTag,
} from '@/modules/Opinion/classes/Opinion'
import OpinionCategory from '@/modules/Opinion/classes/OpinionCategory'
import OpinionPostTag from '@/modules/Opinion/components/OpinionPost/OpinionPostTag'
import { Stack, Typography, useTheme } from '@mui/material'
import { Dayjs } from 'dayjs'

const dateFormat = 'YYYY-MM-DD'

// TODO: 定義介面

interface OpinionPostHeaderProps {
  categories?: Array<OpinionCategory>
  title?: string
  subtitle?: string
  date?: Dayjs
  tags?: Array<OpinionTag>
  repostSources?: Array<OpinionRepostSource>
}

const OpinionPostHeader = function OpinionPostHeader({
  categories,
  title,
  subtitle,
  date,
  tags,
  repostSources,
}: OpinionPostHeaderProps) {
  const theme = useTheme<USTWTheme>()

  const formattedDate = date?.isValid() ? date.format(dateFormat) : ''

  return (
    <Stack spacing={3}>
      {/** Categories */}
      {categories && (
        <UHStack gap={2}>
          {categories.map((category, index) => (
            <UButton
              key={index}
              variant="outlined"
              size="small"
              sx={{
                padding: theme.spacing(0.5, 1),
                minWidth: 'fit-content',
                borderColor: theme.color.orange[900],
                color: theme.color.orange[900],
              }}
            >
              {category.label}
            </UButton>
          ))}
        </UHStack>
      )}

      {/** Title */}
      {title && (
        <Typography
          component="h1"
          variant="h3"
          fontWeight={500}
          sx={{ color: theme.color.grey[3100] }}
        >
          {title}
        </Typography>
      )}

      {/** Subtitle */}
      {subtitle && (
        <Typography
          variant="subtitleL"
          sx={{ color: theme.color.grey[3200] }}
          fontWeight={400}
        >
          {subtitle}
        </Typography>
      )}

      <Stack spacing={2}>
        {/** Date */}
        <Typography
          variant="bodyS"
          sx={{ color: theme.color.grey[3300] }}
          fontWeight={500}
        >
          {`Release time: ${formattedDate}   |   By Sam / Tom `}
        </Typography>
        {/** Tags */}
        {tags && (
          <UHStack gap={1}>
            {tags.map((tag, index) => (
              <OpinionPostTag key={index} tag={tag} />
            ))}
          </UHStack>
        )}
      </Stack>

      {/** Repost source from */}
      <Stack spacing={1}>
        <Typography
          variant="bodyS"
          fontWeight={500}
          sx={{ color: theme.color.grey[3400] }}
        >
          {'Repost source from'}
        </Typography>

        {/** Links */}
        {repostSources?.map((repostSource, index) => (
          <a href={repostSource.link} key={index} target="_blank">
            <Typography
              variant="bodyS"
              fontWeight={400}
              sx={{
                color: theme.color.orange[900],
                textDecoration: 'underline',
              }}
            >
              {repostSource.title}
            </Typography>
          </a>
        ))}
      </Stack>
    </Stack>
  )
}

export default OpinionPostHeader
