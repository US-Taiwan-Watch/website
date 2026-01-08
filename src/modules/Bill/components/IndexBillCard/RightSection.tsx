'use client'

import { styled, USTWTheme } from '@/common/lib/mui/theme'
import { Bill, BillUtils } from '@/modules/Bill/business/Bill'
import {
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
import UHStack from '@/common/components/atoms/UHStack'
import { memo, ReactNode, useMemo } from 'react'
import UHeightLimitedText from '@/common/components/atoms/UHeightLimitedText'

import UPoliticalPartyIcon from '@/common/components/atoms/UPoliticalPartyIcon'
import withSelectable from '@/common/hooks/withSelectable'
import { type ComponentProps } from 'react'
import { useResponsive } from '@/common/lib/responsive/ResponsiveProvider'
import useTranslationClient from '@/common/lib/i18n/hooks/useTranslationClient'
import { DateUtils } from '@/modules/Common/business/Date'
import { PeopleAvatarWithPartyBadge } from '@/modules/People/components/PeopleAvatarWithPartyBadge'

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
  const { t } = useTranslationClient(['bill', 'common'])
  const theme = useTheme<USTWTheme>()
  const latestAction = useMemo(() => BillUtils.getLatestAction(bill), [bill])

  const introducedDate = useMemo(() => {
    if (!bill.introducedAt) return ''
    return DateUtils.formatDc(bill.introducedAt, INTRODUCED_DATE_FORMAT)
  }, [bill.introducedAt])

  const latestActionDate = useMemo(() => {
    if (!bill.latestActionAt) return ''
    return DateUtils.formatDc(bill.latestActionAt, ACTION_DATE_FORMAT)
  }, [bill.latestActionAt])

  if (!bill.sponsor?.party) return null

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
            {bill.sponsor?.people && bill.sponsor?.party && (
              <PeopleAvatarWithPartyBadge
                party={bill.sponsor.party}
                people={bill.sponsor.people}
              />
            )}
            <Stack>
              <Typography variant="articleH4">
                {bill.sponsor?.people?.name}
              </Typography>
              <Typography
                variant="buttonXS"
                fontWeight={600}
                textTransform="capitalize"
              >
                {t(`party.${bill.sponsor.party}`, { ns: 'common' })}
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
          <Typography variant="articleH3">
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
          <Typography variant="articleH3">{introducedDate}</Typography>
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
              {latestAction?.description ?? ''}
            </UHeightLimitedText>
          </Stack>
        </StyledCardContainer>
      </Grid2WithSelectable>
    </Grid2>
  )
})

const MobileSection = memo(function MobileSection({ bill }: { bill: Bill }) {
  const theme = useTheme<USTWTheme>()
  const latestAction = useMemo(() => BillUtils.getLatestAction(bill), [bill])
  const latestActionDate = useMemo(() => {
    if (!latestAction?.date) return ''
    return DateUtils.formatDc(latestAction.date, ACTION_DATE_FORMAT)
  }, [latestAction])

  return (
    <Stack>
      {bill.sponsor && (
        <>
          <Divider sx={{ my: 2, borderWidth: 1 }} />
          <UHStack px={1} gap={1.5} alignItems="center">
            {bill.sponsor.party && (
              <UPoliticalPartyIcon party={bill.sponsor.party} size="small" />
            )}
            <Typography variant="subtitleS" fontWeight={700}>
              {bill.sponsor.people?.name}
            </Typography>
          </UHStack>
        </>
      )}
      <Divider sx={{ my: 2, borderWidth: 1 }} />
      <Stack gap={1.5}>
        <Typography variant="buttonS" color={theme.color.grey[400]}>
          {latestActionDate}
        </Typography>
        <UHeightLimitedText maxLine={3} variant="body" fontWeight={300}>
          {latestAction?.description ?? ''}
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
