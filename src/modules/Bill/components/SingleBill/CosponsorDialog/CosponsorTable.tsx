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
import { People } from '@/modules/People/domains/People.utils'
import UPoliticalPartyIcon from '@/common/components/atoms/UPoliticalPartyIcon'
import { Party } from '@/common/enums/Party'
import UHStack from '@/common/components/atoms/UHStack'
// import { ChamberEnum } from '@/common/enums/Chamber'

const EMPTY_CELL = '-'

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
const headers: string[] = ['Name', 'Party', 'Constituency', 'Date Sponsored']

type Props = {
  cosponsors: People[]
}

const getName = (people: People) => {
  // FIXME: 待確認 People 有沒有 chamber
  const chamberAbbreviation = ''
  // const chamberAbbreviation =
  //   people.chamber === ChamberEnum.HOUSE
  //     ? 'H.R.'
  //     : people.chamber === ChamberEnum.SENATE
  //       ? 'S.'
  //       : ''
  return `${chamberAbbreviation}${people.displayName ?? ''}`
}

export default function CosponsorTable({ cosponsors }: Props) {
  const theme = useTheme<USTWTheme>()
  return (
    <TableContainer sx={{ maxHeight: '90%' }}>
      <Table stickyHeader>
        <TableHead>
          <TableRow>
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
          {cosponsors.map((cosponsor) => (
            <TableRow
              key={cosponsor.displayName}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <StyledNameText>
                  {cosponsor.displayName ? getName(cosponsor) : EMPTY_CELL}
                </StyledNameText>
              </TableCell>
              <TableCell align="left">
                <UHStack spacing={1} alignItems="center">
                  <UPoliticalPartyIcon
                    variant="rounded"
                    party={cosponsor.currentParty ?? Party.INDEPENDENT}
                    size="small"
                  />
                  <StyledBodyText textTransform="capitalize">
                    {cosponsor.currentParty?.toLowerCase() ?? EMPTY_CELL}
                  </StyledBodyText>
                </UHStack>
              </TableCell>
              <TableCell align="left">
                <StyledBodyText>
                  {/* TODO: 待確認 People 有沒有 constituency */}
                  {/* {cosponsor.constituency || EMPTY_CELL} */}
                </StyledBodyText>
              </TableCell>
              <TableCell align="left">
                {/* TODO: 待確認日期是跟著法案or人 */}
                <StyledBodyText>01/01/2024</StyledBodyText>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
