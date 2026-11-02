'use client'

import UContentCard from '@/common/components/atoms/UContentCard'
import UContentCardHeader from '@/common/components/atoms/UContentCardHeader'
import UContentCardContent from '@/common/components/atoms/UContentCardContent'
import { SponsorIcon } from '@/common/styles/assets/Icons'
import { Box, Stack, Typography } from '@mui/material'
import { styled } from '@/common/lib/mui/theme'
import { Bill } from '@/modules/Bill/business/Bill'
import UHStack from '@/common/components/atoms/UHStack'
import Image from 'next/image'
import Link from 'next/link'
import UPoliticalPartyIcon from '@/common/components/atoms/UPoliticalPartyIcon'
import { PeopleUtils } from '@/modules/People/business/People'
import useTranslationClient from '@/common/lib/i18n/hooks/useTranslationClient'

const StyledImageContainer = styled(Box)(() => ({
  position: 'relative',
  width: '104px',
  height: '118px',
  borderRadius: '10px',
  overflow: 'hidden',
}))

const StyledImage = styled(Image)(() => ({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
}))

type Props = {
  bill: Bill
}

export default function Sponsor({ bill }: Props) {
  const { t } = useTranslationClient('bill')

  return (
    <UContentCard>
      <UContentCardHeader
        title={t('page.card.sponsors.title', {
          ns: 'bill',
        })}
        icon={<SponsorIcon />}
        iconColor="primary"
      />
      <UContentCardContent>
        <UHStack pt={2} spacing={3}>
          {bill.sponsor?.people?.image && (
            <Link
              href={
                bill.sponsor ? PeopleUtils.getLink(bill.sponsor.people.id) : '#'
              }
            >
              <StyledImageContainer>
                <StyledImage
                  src={bill.sponsor?.people?.image}
                  alt={bill.sponsor?.people?.name ?? ''}
                  fill
                />
              </StyledImageContainer>
            </Link>
          )}

          <Stack justifyContent="space-between">
            <Stack spacing={1}>
              <Link
                href={
                  bill.sponsor
                    ? PeopleUtils.getLink(bill.sponsor.people.id)
                    : '#'
                }
              >
                <Typography variant="articleH3">
                  {bill.sponsor?.people?.name}
                </Typography>
              </Link>
              <Typography variant="body">
                {bill.sponsor?.people?.position}
              </Typography>
            </Stack>

            <UHStack gap={1.5} alignItems="center">
              {bill.sponsor?.party && (
                <UPoliticalPartyIcon party={bill.sponsor.party} size="small" />
              )}
              <Typography
                variant="buttonXS"
                fontWeight={700}
                textTransform="capitalize"
              >
                {t(`party.${bill.sponsor?.party?.toLowerCase()}`, {
                  ns: 'common',
                })}
              </Typography>
            </UHStack>
          </Stack>
        </UHStack>
      </UContentCardContent>
    </UContentCard>
  )
}
