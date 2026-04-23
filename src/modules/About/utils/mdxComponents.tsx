import { Typography } from '@mui/material'
import type React from 'react'

export const CommonMdxComponents = {
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <Typography component="h1" fontSize="2rem" fontWeight={600} {...props} />
  ),
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <Typography component="h2" fontSize="1.5rem" fontWeight={600} {...props} />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <Typography component="h3" fontSize="1.25rem" fontWeight={600} {...props} />
  ),
  h4: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <Typography
      component="h4"
      fontSize="1.125rem"
      fontWeight={600}
      {...props}
    />
  ),
}
