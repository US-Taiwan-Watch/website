'use client'

import { USTWTheme } from '@/common/lib/mui/theme'
import {
  Button,
  Card,
  CardContent,
  Stack,
  Typography,
  useTheme,
} from '@mui/material'
import Link from 'next/link'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import UHeightLimitedText from '@/common/components/atoms/UHeightLimitedText'
import { ReactNode } from 'react'
import { useResponsive } from '@/common/lib/responsive/ResponsiveProvider'

export interface HyperLinkTooltipCardProps {
  HeaderComponent?: ReactNode
  title: string
  description: string
  link: string
}
const HyperLinkTooltipCard = function HyperLinkTooltipCard({
  HeaderComponent,
  title,
  description,
  link,
}: HyperLinkTooltipCardProps) {
  const { isHoverable } = useResponsive()
  const theme = useTheme<USTWTheme>()

  return (
    <Card
      sx={{
        backgroundColor: theme.color.tooltip.people.backgroundColor,
        color: theme.color.tooltip.people.textColor,
        '& .MuiCardContent-root:last-child': {
          padding: theme.spacing(3),
        },
        borderRadius: isHoverable ? theme.shape.borderRadius * 2 : 0,
      }}
    >
      <CardContent>
        <Stack
          gap={{
            xs: 1,
            md: 3,
          }}
          alignItems="flex-start"
        >
          {HeaderComponent}
          <Typography variant="subtitleL" fontWeight={600} lineHeight={1.2}>
            {title}
          </Typography>
          <UHeightLimitedText maxLine={4} variant="bodyS" fontWeight={300}>
            {description}
          </UHeightLimitedText>
          <Link href={link} target="_blank" rel="noopener noreferrer">
            <Button
              variant="text"
              sx={{
                color: theme.color.tooltip.people.textColor,
                '&:hover': {
                  backgroundColor: 'inherit',
                },
                textTransform: 'capitalize',
                paddingLeft: 0,
                paddingRight: 0,
              }}
              endIcon={<ArrowForwardIcon />}
            >
              Learn More
            </Button>
          </Link>
        </Stack>
      </CardContent>
    </Card>
  )
}

export default HyperLinkTooltipCard
