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
import { BillAction } from '@/modules/Bill/business/Bill'
import UIconButton from '@/common/components/atoms/UIconButton'
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined'
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined'
import { useMemo, useState, useCallback } from 'react'
import UHStack from '@/common/components/atoms/UHStack'
import { sortBy } from 'lodash-es'
import { ActionsType } from '@/modules/Bill/components/SingleBill/ActionsFilter/ActionsFilter'
import { DateUtils } from '@/modules/Common/business/Date'

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

type ActionsTableProps = {
  actions: BillAction[]
  actionsType: ActionsType
}

export default function ActionsTable({
  actions,
  actionsType,
}: ActionsTableProps) {
  const theme = useTheme<USTWTheme>()
  const [sortDirection, setSortDirection] = useState<SortDirectionEnum>(
    SortDirectionEnum.DESC
  )

  const isAllActions = useMemo(
    () => actionsType === ActionsType.ALL_ACTIONS,
    [actionsType]
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

  const getActionDate = useCallback((action: BillAction) => {
    return DateUtils.formatDc(action.date, DATE_FORMAT)
  }, [])

  return (
    <TableContainer>
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
                <StyledNameText>{getActionDate(action)}</StyledNameText>
              </TableCell>
              {isAllActions && (
                <TableCell align="left">
                  <StyledBodyText textTransform="capitalize">
                    {action.chamber ? action.chamber.toLowerCase() : EMPTY_CELL}
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
