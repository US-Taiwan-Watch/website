import { USTWTheme } from '@/common/lib/mui/theme'
import { BillAction } from '@/modules/Bill/business/Bill'
import { Divider, Stack, Typography, useTheme } from '@mui/material'
import { Fragment, memo, useCallback } from 'react'
import dayjs from 'dayjs'
import UHeightLimitedText from '@/common/components/atoms/UHeightLimitedText'

const DATE_FORMAT = 'MM/DD/YYYY-H:mmA'

type ActionsListProps = {
  actions: BillAction[]
}

const ActionsList = memo(function ActionsList({ actions }: ActionsListProps) {
  const theme = useTheme<USTWTheme>()
  const getActionDate = useCallback((action: BillAction) => {
    if (action.date && dayjs(action.date).isValid()) {
      return dayjs(action.date).format(DATE_FORMAT)
    }
    return ''
  }, [])

  return (
    <Stack gap={1.75} mt={1.75}>
      {actions.map((action, index) => (
        <Fragment key={index}>
          <Stack alignItems="flex-start" gap={1.5}>
            <Typography variant="buttonS" color={theme.color.grey[1200]}>
              {getActionDate(action)}
            </Typography>
            <UHeightLimitedText maxLine={2} variant="buttonXS">
              {action.description}
            </UHeightLimitedText>
          </Stack>
          {index !== actions.length - 1 && <Divider />}
        </Fragment>
      ))}
    </Stack>
  )
})

export default ActionsList
