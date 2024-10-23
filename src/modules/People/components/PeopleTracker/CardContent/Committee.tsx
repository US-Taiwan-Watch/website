import { PeopleIcon } from '@/common/styles/assets/Icons'
import { Stack, Typography, useTheme } from '@mui/material'
import { styled, USTWTheme } from '@/common/lib/mui/theme'
import UContentCard from '@/common/components/atoms/UContentCard'

const MOCK_COMMITTEES = [
  {
    title: 'Committee on Environment and Public Works',
    description: [
      'Subcommittee on Clean Air, Climate, and Nuclear Safety (Ranking)',
      'Subcommittee on Fisheries, Water, and Wildlife',
      'Subcommittee on Transportation and Infrastructure',
    ],
  },
  {
    title: 'Committee on Foreign Relations',
    description: [
      'Subcommittee on East Asia, the Pacific, and International Cybersecurity Policy',
      'Subcommittee on Europe and Regional Security Cooperation (Ranking)',
    ],
  },
  {
    title: 'Special Committee on Aging',
    description: [
      'Subcommittee on East Asia, the Pacific, and International Cybersecurity Policy',
      'Subcommittee on Europe and Regional Security Cooperation (Ranking)',
    ],
  },
]

type CommitteeArg = {
  title: string
  description?: Array<string>
}

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
  committee: CommitteeArg
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
        {committee.title}
      </Typography>
      <ul
        style={{
          listStyleType: 'none',
          paddingLeft: 0,
          margin: 0,
        }}
      >
        {committee.description &&
          committee.description.map((description, index) => (
            <StyledDescriptionListItem key={index}>
              <Typography variant="bodyS" fontWeight={500}>
                {description}
              </Typography>
            </StyledDescriptionListItem>
          ))}
      </ul>
    </Stack>
  )
}

// TODO: 確認資料來源
interface CommitteeProps {
  committees?: Array<CommitteeArg>
}

const Committee = function Committee({
  committees = MOCK_COMMITTEES,
}: CommitteeProps) {
  return (
    <UContentCard
      headerIconAction="modal"
      withHeader
      headerProps={{
        title: 'Committee',
        icon: <PeopleIcon />,
        iconColor: 'secondary',
      }}
      overflowHidden
      modalContent={committees.map((committee, index) => (
        <CommitteeRow key={index} committee={committee} />
      ))}
    >
      {committees.map((committee, index) => (
        <CommitteeRow key={index} committee={committee} />
      ))}
    </UContentCard>
  )
}

export default Committee
