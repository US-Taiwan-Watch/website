import { Typography, TypographyProps } from '@mui/material'

export default function UWidthLimitedText({
  children,
  sx,
  ...props
}: TypographyProps) {
  return (
    <Typography
      sx={{
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        ...sx,
      }}
      {...props}
    >
      {children}
    </Typography>
  )
}
