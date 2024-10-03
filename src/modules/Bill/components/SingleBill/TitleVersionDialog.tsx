'use client'
import UContentCard from '@/common/components/atoms/UContentCard'
import UContentCardDialog from '@/common/components/atoms/UContentCardDialog'
import UIconButton from '@/common/components/atoms/UIconButton'
import { VersionIcon } from '@/common/styles/assets/Icons'
import CloseIcon from '@mui/icons-material/Close'
import { USTWTheme } from '@/common/lib/mui/theme'
import {
  CardContent,
  Collapse,
  Stack,
  StackProps,
  Typography,
  useTheme,
} from '@mui/material'
import { Bill } from '@/modules/Bill/classes/Bill'
import { CONGRESS_CURRENT_SESSION_MOCK } from '@/modules/Bill/data'
import UHStack from '@/common/components/atoms/UHStack'
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined'
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined'
import { useState } from 'react'

const FAKE_DESCRIPTION =
  "The United States says its relations with Taiwan are strong, and China expresses dissatisfaction following Taiwan's presidential election. CNN's Will Ripley and Steven Jiang have the detailsThe United States says its relations with Taiwan are strong, and China expresses dissatisfaction following Taiwan's presidential election. CNN's Will Ripley and Steven Jiang have the details"

function TitleRow({
  title,
  description,
  containerProps,
}: {
  title: string
  description: string
  containerProps?: StackProps
}) {
  const theme = useTheme<USTWTheme>()
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <UHStack
      spacing={2}
      justifyContent="space-between"
      alignItems="flex-start"
      borderTop={`1px solid ${theme.color.grey[1400]}`}
      {...containerProps}
    >
      <Stack spacing={1}>
        <Typography variant="articleH5">{title}</Typography>
        <Collapse in={isExpanded}>
          <Typography variant="bodyS">{description}</Typography>
        </Collapse>
      </Stack>
      <UIconButton
        variant="rounded"
        color="inherit"
        size="small"
        onClick={() => setIsExpanded((prev) => !prev)}
      >
        {isExpanded ? (
          <KeyboardArrowUpOutlinedIcon
            sx={{ color: theme.color.neutral[400] }}
          />
        ) : (
          <KeyboardArrowDownOutlinedIcon
            sx={{ color: theme.color.neutral[400] }}
          />
        )}
      </UIconButton>
    </UHStack>
  )
}

type Props = {
  bill: Bill
  isModalOpen: boolean
  handleCloseModal: () => void
}

export default function TitleVersionDialog({
  bill,
  isModalOpen,
  handleCloseModal,
}: Props) {
  const theme = useTheme<USTWTheme>()

  return (
    <UContentCardDialog
      open={isModalOpen}
      onClose={handleCloseModal}
      maxWidth="md"
    >
      <UContentCard
        withHeader
        headerProps={{
          title: 'Title Version',
          icon: <VersionIcon />,
          iconColor: 'primary',
          action: (
            <UIconButton
              variant="rounded"
              color="inherit"
              size="small"
              onClick={handleCloseModal}
            >
              <CloseIcon sx={{ color: theme.color.neutral[500] }} />
            </UIconButton>
          ),
        }}
        sx={{
          padding: 0,
          border: 'none',
          borderRadius: 0,
        }}
      >
        <CardContent>
          <Stack
            pt={2}
            sx={{
              '& > *': {
                padding: theme.spacing(2.5, 6),
              },
            }}
          >
            <Typography variant="articleH4">
              {`${bill.chamberPrefix}${bill.id} | ${CONGRESS_CURRENT_SESSION_MOCK}th Congress (2023-2024)`}
            </Typography>
            {bill.previousTitles?.map((title, index) => (
              <TitleRow
                key={index}
                title={title}
                // TODO: 待釐清設計稿中的文字意涵，暫以假文案代之
                description={FAKE_DESCRIPTION}
              />
            ))}
          </Stack>
        </CardContent>
      </UContentCard>
    </UContentCardDialog>
  )
}
