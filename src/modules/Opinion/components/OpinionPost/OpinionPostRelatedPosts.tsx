'use client'

import UHStack from '@/common/components/atoms/UHStack'
import ULinkText from '@/common/components/atoms/ULinkText'
import { USTWTheme } from '@/common/lib/mui/theme'
import { Opinion } from '@/modules/Opinion/classes/Opinion'
import OpinionPostCards from '@/modules/Opinion/components/OpinionPostCards'
import { opinions as mockOpinions } from '@/modules/Opinion/data'
import { ROUTES } from '@/routes'
import { Stack, Typography, useTheme } from '@mui/material'
import { memo } from 'react'

interface OpinionPostRelatedPostsProps {
  opinions?: Array<Opinion>
}

const OpinionPostRelatedPosts = ({
  opinions,
}: OpinionPostRelatedPostsProps) => {
  // TODO: Mock 之後砍掉
  const _opinions = opinions ?? mockOpinions.slice(0, 4)

  const theme = useTheme<USTWTheme>()

  return (
    <Stack spacing={6} marginTop={10} marginBottom={16}>
      <UHStack gap={2} alignItems="center" justifyContent="space-between">
        <Typography variant="h2" fontWeight={600}>
          More Articles
        </Typography>
        <ULinkText
          link={ROUTES.OPINION}
          typographyProps={{
            fontWeight: 500,
            fontSize: 20,
            sx: {
              color: theme.color.common.black,
            },
          }}
        />
      </UHStack>

      <OpinionPostCards opinions={_opinions} pagination={false} />
    </Stack>
  )
}

export default memo(OpinionPostRelatedPosts)
