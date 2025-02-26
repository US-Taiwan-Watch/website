'use client'

import UButton from '@/common/components/atoms/UButton'
import UHStack from '@/common/components/atoms/UHStack'
import { USTWTheme } from '@/common/lib/mui/theme'
import { Opinion, OpinionUtils } from '@/modules/Opinion/business/Opinion'
import OpinionPostTag from '@/modules/Opinion/components/OpinionPost/OpinionPostTag'
import { Stack, Typography, useTheme } from '@mui/material'
import dayjs from 'dayjs'
import { useMemo } from 'react'

const dateFormat = 'YYYY-MM-DD'

// TODO: 定義介面

interface OpinionPostHeaderProps {
  opinion: Opinion
}

const OpinionPostHeader = function OpinionPostHeader({
  opinion,
}: OpinionPostHeaderProps) {
  const { categories, title, subtitle, date, tags, repostSources, authors } =
    opinion
  const theme = useTheme<USTWTheme>()

  const formattedDate = useMemo(() => {
    if (!date) return ''
    const dayjsDate = dayjs(date)
    return dayjsDate.isValid() ? dayjsDate.format(dateFormat) : ''
  }, [date])

  return (
    <Stack spacing={3}>
      {/** Categories */}
      {categories && (
        <UHStack gap={2} flexWrap="wrap">
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
          {`Release time: ${formattedDate}   |   By ${OpinionUtils.formatAuthorsName(authors ?? [])}`}
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
      {repostSources && repostSources.length > 0 && (
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
      )}
    </Stack>
  )
}

export default OpinionPostHeader
