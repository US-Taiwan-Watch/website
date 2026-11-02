import UContainer from '@/common/components/atoms/UContainer'
import { Stack } from '@mui/material'
import type { ReactNode } from 'react'

export default function PodcastCategoryLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <UContainer>
      <Stack
        gap={{
          xs: 2,
          md: 4,
        }}
        px={{
          xs: 0,
          md: 2,
        }}
        pb={5}
      >
        {children}
      </Stack>
    </UContainer>
  )
}
