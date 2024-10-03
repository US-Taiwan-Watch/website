'use client'

import UHStack from '@/common/components/atoms/UHStack'
import { USTWTheme } from '@/common/lib/mui/theme'
import { OpinionResource, OpinionTag } from '@/modules/Opinion/classes/Opinion'
import OpinionPostTag from '@/modules/Opinion/components/OpinionPost/OpinionPostTag'
import { Stack, Typography, useTheme } from '@mui/material'
import { memo } from 'react'

interface OpinionPostFooterProps {
  tags?: Array<OpinionTag>
  resources?: Array<OpinionResource>
}

const OpinionPostFooter = function OpinionPostFooter({
  tags,
  resources,
}: OpinionPostFooterProps) {
  const theme = useTheme<USTWTheme>()

  return (
    <Stack spacing={2}>
      {/** Tags */}
      {tags && (
        <UHStack gap={1}>
          {tags.map((tag, index) => (
            <OpinionPostTag key={index} tag={tag} />
          ))}
        </UHStack>
      )}

      {/** Resources */}
      {resources?.length && (
        <Stack spacing={1} sx={{ color: theme.color.grey[3400] }}>
          <Typography variant="bodyS" fontWeight={500}>
            Repost source from:{' '}
          </Typography>
          {resources.map((resource, index) => (
            <a href={resource.link} key={index} target="_blank">
              <Typography
                variant="bodyS"
                fontWeight={400}
                sx={{
                  textDecoration: 'underline',
                }}
              >
                {resource.title}
              </Typography>
            </a>
          ))}
        </Stack>
      )}
    </Stack>
  )
}

export default memo(OpinionPostFooter)
