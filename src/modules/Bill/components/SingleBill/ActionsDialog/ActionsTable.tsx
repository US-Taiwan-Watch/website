'use client'

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  useTheme,
} from '@mui/material'
import { styled, USTWTheme } from '@/common/lib/mui/theme'
import { BillAction } from '@/modules/Bill/classes/Bill'
import dayjs from 'dayjs'
import UIconButton from '@/common/components/atoms/UIconButton'
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined'
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined'
import { useMemo, useState } from 'react'
import UHStack from '@/common/components/atoms/UHStack'
import { sortBy } from 'lodash-es'
import { ActionsTableType } from '@/modules/Bill/components/SingleBill/ActionsDialog'

const EMPTY_CELL = '-'
const DATE_FORMAT = 'MM/DD/YYYY'

const StyledHeadText = styled(Typography)(({ theme }) => ({
  ...theme.typography.buttonXS,
  fontWeight: 600,
  color: theme.color.neutral[500],
}))

const StyledNameText = styled(Typography)(({ theme }) => ({
  ...theme.typography.buttonS,
  color: theme.color.common.black,
}))

const StyledBodyText = styled(Typography)(({ theme }) => ({
  ...theme.typography.bodyS,
  color: theme.color.common.black,
}))

enum SortDirectionEnum {
  ASC = 'ASC',
  DESC = 'DESC',
}

type Props = {
  actions: BillAction[]
  tableType: ActionsTableType
}

export default function ActionsTable({ actions, tableType }: Props) {
  const theme = useTheme<USTWTheme>()
  const [sortDirection, setSortDirection] = useState<SortDirectionEnum>(
    SortDirectionEnum.DESC
  )

  const isAllActions = useMemo(
    () => tableType === ActionsTableType.ALL_ACTIONS,
    [tableType]
  )

  const headers: string[] = [
    ...(isAllActions ? ['Chamber'] : []),
    'Description',
  ]

  const sortedActions = useMemo<BillAction[]>(() => {
    const sortResult = sortBy(actions, 'date')
    return sortDirection === SortDirectionEnum.DESC
      ? sortResult.reverse()
      : sortResult
  }, [actions, sortDirection])

  return (
    <TableContainer sx={{ maxHeight: '90%' }}>
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell
              sx={{
                backgroundColor: theme.color.common.white,
              }}
            >
              <UHStack spacing={1} alignItems="center">
                <StyledHeadText>Date</StyledHeadText>
                <UIconButton
                  variant="rounded"
                  color="inherit"
                  size="small"
                  onClick={() =>
                    setSortDirection((prev) =>
                      prev === SortDirectionEnum.DESC
                        ? SortDirectionEnum.ASC
                        : SortDirectionEnum.DESC
                    )
                  }
                >
                  {sortDirection === SortDirectionEnum.DESC ? (
                    <KeyboardArrowDownOutlinedIcon
                      sx={{ color: theme.color.neutral[400] }}
                    />
                  ) : (
                    <KeyboardArrowUpOutlinedIcon
                      sx={{ color: theme.color.neutral[400] }}
                    />
                  )}
                </UIconButton>
              </UHStack>
            </TableCell>

            {headers.map((header) => (
              <TableCell
                key={header}
                sx={{
                  backgroundColor: theme.color.common.white,
                }}
              >
                <StyledHeadText>{header}</StyledHeadText>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {sortedActions.map((action, index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <StyledNameText>
                  {dayjs(action.date).isValid()
                    ? dayjs(action.date).format(DATE_FORMAT)
                    : EMPTY_CELL}
                </StyledNameText>
              </TableCell>
              {isAllActions && (
                <TableCell align="left">
                  <StyledBodyText textTransform="capitalize">
                    {action.chamber.toLowerCase()}
                  </StyledBodyText>
                </TableCell>
              )}
              <TableCell align="left">
                <StyledBodyText>
                  {action.description || EMPTY_CELL}
                </StyledBodyText>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
