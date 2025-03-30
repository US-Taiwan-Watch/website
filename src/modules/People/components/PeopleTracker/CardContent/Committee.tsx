'use client'

import { PeopleIcon } from '@/common/styles/assets/Icons'
import { Stack, Typography, useTheme } from '@mui/material'
import { styled, USTWTheme } from '@/common/lib/mui/theme'
import UContentCard from '@/common/components/atoms/UContentCard'
import { People } from '@/modules/People/business/People'
import useTranslationClient from '@/common/lib/i18n/hooks/useTranslationClient'

const StyledDescriptionListItem = styled('li')(({ theme }) => ({
  position: 'relative',
  paddingLeft: theme.spacing(3),
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
        padding: theme.spacing(2, 1),
        '&:not(:last-child)': {
          borderBottom: `1px solid ${theme.color.grey[1900]}`,
        },
      }}
    >
      <Typography variant="bodyM" fontWeight={700}>
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
              <Typography variant="bodyS" fontWeight={500}>
                {subcommittee.name}
              </Typography>
            </StyledDescriptionListItem>
          ))}
      </ul>
    </Stack>
  )
}

// TODO: 確認資料來源
interface CommitteeProps {
  committees: People['committees']
}

const Committee = function Committee({ committees }: CommitteeProps) {
  const { t } = useTranslationClient(['people'])

  return (
    <UContentCard
      withHeader
      headerProps={{
        headerIconAction: 'modal',
        title: t('page.card.committee.title', { ns: 'people' }),
        icon: <PeopleIcon />,
        iconColor: 'secondary',
      }}
      overflowHidden
      popupProps={{
        popupContent: committees.map((committee, index) => (
          <CommitteeRow key={index} committee={committee} />
        )),
      }}
      noContentPlaceholder={
        <Typography variant="subtitleXL" fontWeight={400}>
          {t('page.card.committee.placeholder', { ns: 'people' })}
        </Typography>
      }
    >
      {committees?.map((committee, index) => (
        <CommitteeRow key={index} committee={committee} />
      )) ?? []}
    </UContentCard>
  )
}

export default Committee
