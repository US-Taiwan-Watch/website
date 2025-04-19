'use client'

import { styled, USTWTheme } from '@/common/lib/mui/theme'
import { Bill, BillUtils } from '@/modules/Bill/business/Bill'
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
import { memo, ReactNode, useMemo, useState, useEffect } from 'react'
import UHeightLimitedText from '@/common/components/atoms/UHeightLimitedText'
import usePartyColor from '@/common/lib/Party/usePartyColor'
import { Party } from '@/common/enums/Party'
import UPoliticalPartyIcon from '@/common/components/atoms/UPoliticalPartyIcon'
import withSelectable from '@/common/hooks/withSelectable'
import { type ComponentProps } from 'react'
import { useResponsive } from '@/common/lib/responsive/ResponsiveProvider'
import useTranslationClient from '@/common/lib/i18n/hooks/useTranslationClient'
import { DateUtils } from '@/modules/Common/business/Date'

const Grid2WithSelectable = withSelectable<ComponentProps<typeof Grid2>>(Grid2)

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

const DesktopSection = memo(function DesktopSection({ bill }: { bill: Bill }) {
  const { t } = useTranslationClient('bill')
  const theme = useTheme<USTWTheme>()
  const { partyColor } = usePartyColor()
  const [introducedDate, setIntroducedDate] = useState('')
  const [latestActionDate, setLatestActionDate] = useState('')
  const latestAction = useMemo(() => {
    const latestAction = BillUtils.getLatestAction(bill)
    return latestAction
  }, [bill])

  useEffect(() => {
    setIntroducedDate(
      DateUtils.formatDc(bill.introducedAt, INTRODUCED_DATE_FORMAT)
    )
  }, [bill])

  useEffect(() => {
    setLatestActionDate(
      DateUtils.formatDc(bill.latestActionAt, ACTION_DATE_FORMAT)
    )
  }, [bill])

  return (
    <Grid2 container spacing={2}>
      <Grid2WithSelectable size={12}>
        {/* Sponsors */}
        <StyledCardContainer
          gap={2}
          direction={{
            xs: 'column',
            md: 'row',
          }}
          alignItems={{
            xs: 'flex-start',
            md: 'center',
          }}
        >
          <CardIconTitle
            containerProps={{ mr: 3 }}
            icon={<SponsorIcon />}
            title={t('card.item.sponsor.title', { ns: 'bill' })}
          />
          <UHStack gap={2}>
            {bill.sponsor?.image && (
              <StyledImageContainer
                sx={{
                  border: `2px solid`,
                  borderColor:
                    partyColor[bill.sponsor.party ?? Party.INDEPENDENT],
                }}
              >
                <StyledImage
                  src={bill.sponsor.image}
                  alt={bill.sponsor.name ?? ''}
                  fill
                />
                {bill.sponsor.party && (
                  <StyledPartyIconContainer>
                    <UPoliticalPartyIcon
                      size="small"
                      party={bill.sponsor.party}
                      sx={{
                        width: '18px',
                        height: '18px',
                      }}
                      customFontStyle={{
                        fontSize: '12px',
                      }}
                    />
                  </StyledPartyIconContainer>
                )}
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
          </UHStack>
        </StyledCardContainer>
      </Grid2WithSelectable>

      {/* Cosponsors */}
      <Grid2WithSelectable
        size={{
          xs: 12,
          md: 5,
        }}
      >
        <StyledCardContainer
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <CardIconTitle
            icon={<NoteIcon />}
            title={t('card.item.cosponsors.title', { ns: 'bill' })}
          />
          <Typography variant="subtitleS" fontWeight={700}>
            {BillUtils.getCosponsorsCount(bill)}
          </Typography>
        </StyledCardContainer>
      </Grid2WithSelectable>

      {/* Introduced */}
      <Grid2WithSelectable
        size={{
          xs: 12,
          md: 7,
        }}
      >
        <StyledCardContainer
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <CardIconTitle
            icon={<CalenderIcon />}
            title={t('card.item.introduced.title', { ns: 'bill' })}
          />
          <Typography variant="subtitleS" fontWeight={700}>
            {introducedDate}
          </Typography>
        </StyledCardContainer>
      </Grid2WithSelectable>

      {/* Latest Action */}
      <Grid2WithSelectable size={12}>
        <StyledCardContainer>
          <CardIconTitle
            icon={<ActionsIcon />}
            title={t('card.item.latestAction.title', { ns: 'bill' })}
          />
          <Divider sx={{ my: 2, borderWidth: 1 }} />
          <Stack gap={1.5}>
            <Typography
              variant="buttonXS"
              fontSize={15}
              sx={{ color: theme.color.grey[1200] }}
            >
              {latestActionDate}
            </Typography>
            <UHeightLimitedText maxLine={3} variant="buttonXS">
              {latestAction.description}
            </UHeightLimitedText>
          </Stack>
        </StyledCardContainer>
      </Grid2WithSelectable>
    </Grid2>
  )
})

const MobileSection = memo(function MobileSection({ bill }: { bill: Bill }) {
  const theme = useTheme<USTWTheme>()
  const latestAction = BillUtils.getLatestAction(bill)
  const [latestActionDate, setLatestActionDate] = useState('')
  useEffect(() => {
    setLatestActionDate(
      DateUtils.formatDc(latestAction.date, ACTION_DATE_FORMAT)
    )
  }, [latestAction])

  return (
    <Stack>
      <Divider sx={{ my: 2, borderWidth: 1 }} />
      <UHStack px={1} gap={1.5} alignItems="center">
        {bill.sponsor?.party && (
          <UPoliticalPartyIcon party={bill.sponsor.party} size="small" />
        )}
        <Typography variant="subtitleS" fontWeight={700}>
          {bill.sponsor?.name}
        </Typography>
      </UHStack>
      <Divider sx={{ my: 2, borderWidth: 1 }} />
      <Stack gap={1.5}>
        <Typography variant="buttonS" color={theme.color.grey[400]}>
          {latestActionDate}
        </Typography>
        <UHeightLimitedText maxLine={3} variant="body" fontWeight={300}>
          {latestAction.description}
        </UHeightLimitedText>
      </Stack>
    </Stack>
  )
})

type Props = {
  bill: Bill
}

export default function RightSection({ bill }: Props) {
  const { isMobile } = useResponsive()

  if (isMobile) {
    return <MobileSection bill={bill} />
  }

  return <DesktopSection bill={bill} />
}
