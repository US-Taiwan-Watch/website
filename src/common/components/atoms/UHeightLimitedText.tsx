import { Typography, TypographyProps } from '@mui/material'

type Props = {
  maxLine: number
} & TypographyProps

export default function UHeightLimitedText({
  maxLine,
  children,
  sx,
  ...props
}: Props) {
  return (
    <Typography
      sx={{
        display: '-webkit-box',
        WebkitLineClamp: maxLine,
        WebkitBoxOrient: 'vertical',
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
