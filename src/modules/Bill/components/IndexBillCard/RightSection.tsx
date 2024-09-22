'use client'

import { styled, USTWTheme } from '@/common/lib/mui/theme'
import { Bill } from '@/modules/Bill/classes/Bill'
import {
  Box,
  Divider,
  Grid2,
  Stack,
  StackProps,
  Typography,
  useTheme,
} from '@mui/material'
import {
  ActionsIcon,
  CalenderIcon,
  NoteIcon,
  SponsorIcon,
} from '@/common/styles/assets/Icons'
import Image from 'next/image'
import UHStack from '@/common/components/atoms/UHStack'
import { ReactNode } from 'react'
import dayjs from 'dayjs'
import UCategoryTag from '@/common/components/atoms/UCategoryTag'
import UHeightLimitedText from '@/common/components/atoms/UHeightLimitedText'
import usePartyColor from '@/common/lib/Party/usePartyColor'
import { Party } from '@/common/enums/Party'
import UPoliticalPartyIcon from '@/common/components/atoms/UPoliticalPartyIcon'

const INTRODUCED_DATE_FORMAT = 'YYYY.MM.DD'
const ACTION_DATE_FORMAT = 'MM/DD/YYYY-H:mmA'

const StyledCardContainer = styled(Stack)(({ theme }) => ({
  width: '100%',
  padding: theme.spacing(3),
  borderRadius: '10px',
  backgroundColor: theme.color.grey[2500],
}))

const StyledIconContainer = styled(Stack)(({ theme }) => ({
  justifyContent: 'center',
  alignItems: 'center',
  color: theme.color.grey[2100],
  '& svg': {
    width: '20px',
    height: '20px',
  },
}))

const StyledImageContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '50px',
  height: '50px',
  borderRadius: '50%',
  marginRight: theme.spacing(3),
}))

const StyledImage = styled(Image)(() => ({
  width: '100%',
  height: '100%',
  borderRadius: '50%',
  objectFit: 'cover',
}))

const StyledPartyIconContainer = styled(Box)(() => ({
  position: 'absolute',
  bottom: -4,
  right: -5,
  zIndex: 1,
}))

function CardIconTitle({
  icon,
  title,
  containerProps,
}: {
  icon: ReactNode
  title: string
  containerProps?: StackProps
}) {
  const theme = useTheme<USTWTheme>()

  return (
    <UHStack gap="6px" alignItems="center" {...containerProps}>
      <StyledIconContainer>{icon}</StyledIconContainer>
      <Typography variant="buttonXS" color={theme.color.grey[2100]}>
        {title}
      </Typography>
    </UHStack>
  )
}

type Props = {
  bill: Bill
}

export default function RightSection({ bill }: Props) {
  const theme = useTheme<USTWTheme>()
  const { partyColor } = usePartyColor()

  return (
    <Grid2 container spacing={2}>
      <Grid2 size={12}>
        {/* Sponsors */}
        <StyledCardContainer direction="row" alignItems="center">
          <CardIconTitle
            containerProps={{ mr: 3 }}
            icon={<SponsorIcon />}
            title="Sponsors"
          />
          {bill.sponsor?.image && (
            <StyledImageContainer
              sx={{
                border: `2px solid`,
                borderColor: partyColor[bill.sponsor.party ?? Party.OTHER],
              }}
            >
              <StyledImage
                src={bill.sponsor.image}
                alt={bill.sponsor.name ?? ''}
                fill
              />
              <StyledPartyIconContainer>
                <UPoliticalPartyIcon
                  variant="rounded"
                  size="small"
                  party={
                    bill.sponsor?.party === Party.REPUBLICAN
                      ? 'republic'
                      : bill.sponsor?.party === Party.DEMOCRATIC
                        ? 'democracy'
                        : 'other'
                  }
                  sx={{
                    width: '18px',
                    height: '18px',
                  }}
                  customFontStyle={{
                    fontSize: '12px',
                  }}
                />
              </StyledPartyIconContainer>
            </StyledImageContainer>
          )}
          <Stack>
            <Typography variant="articleH4">{bill.sponsor?.name}</Typography>
            <Typography
              variant="buttonXS"
              fontWeight={600}
              textTransform="capitalize"
            >
              {bill.sponsor?.party?.toLowerCase()}
            </Typography>
          </Stack>
        </StyledCardContainer>
      </Grid2>

      {/* Cosponsors */}
      <Grid2 size={5}>
        <StyledCardContainer
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <CardIconTitle icon={<NoteIcon />} title="Cosponsors" />
          <Typography variant="subtitleL" fontWeight={700}>
            {bill.cosponsorsCount}
          </Typography>
        </StyledCardContainer>
      </Grid2>

      {/* Introduced */}
      <Grid2 size={7}>
        <StyledCardContainer
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <CardIconTitle icon={<CalenderIcon />} title="Introduced" />
          <Typography variant="subtitleL" fontWeight={700}>
            {dayjs(bill.introducedDate).isValid()
              ? dayjs(bill.introducedDate).format(INTRODUCED_DATE_FORMAT)
              : ''}
          </Typography>
        </StyledCardContainer>
      </Grid2>

      {/* Latest Action */}
      <Grid2 size={12}>
        <StyledCardContainer>
          <CardIconTitle icon={<ActionsIcon />} title="Latest Action" />
          <Divider sx={{ my: 2, borderWidth: 1 }} />
          <Stack gap={1.5}>
            <UHStack justifyContent="space-between" alignItems="center">
              <UCategoryTag
                value={bill.latestAction?.chamber}
                containerProps={{
                  sx: {
                    backgroundColor: `${theme.color.purple[100]}80`, // 50% opacity
                  },
                }}
                textProps={{
                  variant: 'buttonS',
                }}
              />
              <Typography
                variant="buttonXS"
                fontSize={15}
                sx={{ color: theme.color.grey[1200] }}
              >
                {dayjs(bill.latestAction?.date).isValid()
                  ? dayjs(bill.latestAction?.date).format(ACTION_DATE_FORMAT)
                  : ''}
              </Typography>
            </UHStack>
            <UHeightLimitedText maxLine={3} variant="buttonXS">
              {bill.latestAction?.description}
            </UHeightLimitedText>
          </Stack>
        </StyledCardContainer>
      </Grid2>
    </Grid2>
  )
}
