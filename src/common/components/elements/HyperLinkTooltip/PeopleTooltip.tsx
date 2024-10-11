'use client'

import { USTWTheme } from '@/common/lib/mui/theme'
import {
  Avatar,
  Badge,
  Button,
  Card,
  CardContent,
  Stack,
  Typography,
  useTheme,
} from '@mui/material'
import Link from 'next/link'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import UPoliticalPartyIcon, {
  getMainColor,
} from '@/common/components/atoms/UPoliticalPartyIcon'
import UHeightLimitedText from '@/common/components/atoms/UHeightLimitedText'

const PeopleTooltip = function PeopleTooltip() {
  const theme = useTheme<USTWTheme>()

  return (
    <Card
      sx={{
        backgroundColor: theme.color.tooltip.people.backgroundColor,
        color: theme.color.tooltip.people.textColor,
        '& .MuiCardContent-root:last-child': {
          padding: theme.spacing(3),
        },
        borderRadius: theme.shape.borderRadius * 2,
      }}
    >
      <CardContent>
        <Stack spacing={3}>
          <Badge
            overlap="circular"
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            badgeContent={
              <UPoliticalPartyIcon
                variant="rounded"
                party="democracy"
                size="small"
              />
            }
            sx={{
              width: 80,
              height: 80,
            }}
          >
            <Avatar
              sx={{
                width: 80,
                height: 80,
                border: `5px solid ${getMainColor(theme, 'democracy')}`,
              }}
              alt="Travis Howard"
              src="/assets/category1.jpg"
            />
          </Badge>
          <Typography variant="subtitleL" fontWeight={600}>
            Sekou Jeffries
          </Typography>
          <UHeightLimitedText maxLine={4} variant="bodyS" fontWeight={300}>
            Minim dolor in amet nulla laboris enim dolore consequat..Minim dolor
            in amet nulla laboris enim dolore consequat nulla laboris enim
            dolore consequat..
          </UHeightLimitedText>
          <Link href="/">
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

export default PeopleTooltip
