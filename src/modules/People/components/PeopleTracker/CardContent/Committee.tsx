'use client'

import { PeopleIcon } from '@/common/styles/assets/Icons'
import { Stack, Typography, useTheme } from '@mui/material'
import { styled, USTWTheme } from '@/common/lib/mui/theme'
import UContentCardWithModal from '@/common/components/atoms/UContentCardWithModal'
import { People } from '@/modules/People/business/People'
import useTranslationClient from '@/common/lib/i18n/hooks/useTranslationClient'

const StyledDescriptionListItem = styled('li')(({ theme }) => ({
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: `${(theme.typography.bodyS.fontSize as number) / 2}px`,
    left: theme.spacing(1.5),
    transform: 'translate(-50%, 50%)',
    width: 4,
    height: 4,
    borderRadius: '100%',
    backgroundColor: theme.color.common.black,
  },
}))

/**
 * 委員會行
 * @param committee 委員會
 * @returns 委員會行
 */
const CommitteeRow = function CommitteeRow({
  committee,
}: {
  committee: People['committees'][number]
}) {
  const theme = useTheme<USTWTheme>()

  return (
    <Stack
      className="committee-row"
      sx={{
        '&:not(:last-child)': {
          borderBottom: `1px solid ${theme.color.grey[1900]}`,
          pb: 2,
        },
      }}
    >
      <Typography
        sx={{
          fontSize: {
            xs: '14px',
            md: '18px',
          },
          fontWeight: 700,
        }}
      >
        {committee.name}
      </Typography>
      <ul
        style={{
          listStyleType: 'none',
          paddingLeft: 0,
          margin: 0,
        }}
      >
        {committee.subcommittees &&
          committee.subcommittees.map((subcommittee, index) => (
            <StyledDescriptionListItem key={index}>
              <Typography
                sx={{
                  fontSize: {
                    xs: '12px',
                    md: '15px',
                  },
                  fontWeight: 500,
                }}
              >
                {subcommittee.name}
              </Typography>
            </StyledDescriptionListItem>
          ))}
      </ul>
    </Stack>
  )
}

interface CommitteeProps {
  committees: People['committees']
}

const Committee = function Committee({ committees }: CommitteeProps) {
  const { t } = useTranslationClient(['people'])

  return (
    <UContentCardWithModal
      header={{
        title: t('page.card.committee.title', { ns: 'people' }),
        icon: <PeopleIcon />,
        iconColor: 'secondary',
        actionType: 'modal',
      }}
      overflowHidden
      noContentPlaceholder={
        <Typography variant="subtitleXL" fontWeight={400}>
          {t('page.card.committee.placeholder', { ns: 'people' })}
        </Typography>
      }
    >
      <Stack gap={2}>
        {committees?.map((committee, index) => (
          <CommitteeRow key={index} committee={committee} />
        )) ?? []}
      </Stack>
    </UContentCardWithModal>
  )
}

export default Committee
