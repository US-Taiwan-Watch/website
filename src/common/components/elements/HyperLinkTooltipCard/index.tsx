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
import { ReactNode, useMemo } from 'react'
import { useResponsive } from '@/common/lib/responsive/ResponsiveProvider'
import useTranslationClient from '@/common/lib/i18n/hooks/useTranslationClient'
import { Bill, BillUtils } from '@/modules/Bill/business/Bill'
import {
  Article,
  ArticleType,
  ArticleUtils,
} from '@/modules/Article/business/Article'
import { People, PeopleUtils } from '@/modules/People/business/People'

export type HyperLinkValue =
  | {
      type: 'bill'
      value: Bill
    }
  | {
      type: 'article'
      value: Article
    }
  | {
      type: 'people'
      value: People
    }

export interface HyperLinkTooltipCardProps {
  HeaderComponent?: ReactNode
  value: HyperLinkValue
}
const HyperLinkTooltipCard = function HyperLinkTooltipCard({
  HeaderComponent,
  value,
}: HyperLinkTooltipCardProps) {
  const { t } = useTranslationClient()
  const { isHoverable } = useResponsive()
  const theme = useTheme<USTWTheme>()

  const title = useMemo(() => {
    switch (value.type) {
      case 'bill':
        return value.value.title
      case 'article':
        return value.value.title
      case 'people':
        return value.value.name
    }
  }, [value])

  const description = useMemo(() => {
    switch (value.type) {
      case 'bill':
        return value.value.summary
      case 'article':
        return value.value.description
      case 'people':
        return value.value.description
    }
  }, [value])

  const link = useMemo(() => {
    switch (value.type) {
      case 'bill':
        return BillUtils.getLink(value.value.id)
      case 'article':
        return ArticleUtils.getLink(ArticleType.Article, value.value.id)
      case 'people':
        return PeopleUtils.getLink(value.value.id)
    }
  }, [value])

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
              {t('cta.learnMore', { ns: 'common' })}
            </Button>
          </Link>
        </Stack>
      </CardContent>
    </Card>
  )
}

export default HyperLinkTooltipCard
