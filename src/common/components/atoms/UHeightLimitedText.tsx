import { Typography, TypographyProps } from '@mui/material'

type Props = {
  maxLine: number
} & TypographyProps

export default function UHeightLimitedText({
  maxLine,
  children,
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
        ...props.sx,
      }}
      {...props}
    >
      {children}
    </Typography>
  )
}
