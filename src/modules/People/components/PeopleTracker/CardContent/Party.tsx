'use client'

import UHStack from '@/common/components/atoms/UHStack'
import { Party as PartyEnum } from '@/common/enums/Party'
import { styled } from '@/common/lib/mui/theme'
import { Typography } from '@mui/material'
import Image from 'next/image'
import UContentCard from '@/common/components/atoms/UContentCard'
import useTranslationClient from '@/common/lib/i18n/hooks/useTranslationClient'

const StyledPartyLogo = styled(Image)(() => ({
  width: '50px',
  height: '50px',
}))

const getPartyLogo = (party: PartyEnum) => {
  if (party === PartyEnum.INDEPENDENT) return null
  return `/assets/party-logo/${party}.png`
}

interface PartyProps {
  party: PartyEnum
}

const Party = function ({ party }: PartyProps) {
  const { t } = useTranslationClient('common')
  const partyLogo = getPartyLogo(party)

  return (
    <UContentCard
      sx={{
        padding: 0,
      }}
    >
      <UHStack
        alignItems="center"
        justifyContent="center"
        width="100%"
        height="100%"
        spacing={2}
        padding={{
          xs: 2,
          lg: 3,
        }}
        sx={{
          minHeight: {
            xs: 64,
            lg: 110,
          },
        }}
      >
        {partyLogo && (
          <StyledPartyLogo
            src={partyLogo}
            alt={party}
            width={50}
            height={50}
            sx={{
              width: {
                xs: 32,
                sm: 50,
              },
              height: {
                xs: 32,
                sm: 50,
              },
            }}
          />
        )}
        <Typography
          textTransform="capitalize"
          flex={1}
          sx={{
            fontSize: {
              xs: '0.875rem',
              sm: '1.375rem',
            },
            fontWeight: 700,
          }}
        >
          {t(`party.${party.toLowerCase()}`, { ns: 'common' })}
        </Typography>
      </UHStack>
    </UContentCard>
  )
}

export default Party
