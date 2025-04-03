import { Typography } from '@mui/material'
import type React from 'react'

export const CommonMdxComponents = {
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <Typography fontSize="2rem" fontWeight={600} {...props} />
  ),
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <Typography variant="h2" {...props} />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <Typography variant="h3" {...props} />
  ),
}
