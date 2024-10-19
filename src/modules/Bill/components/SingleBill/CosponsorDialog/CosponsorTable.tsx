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
import { People } from '@/modules/People/classes/People'
import UPoliticalPartyIcon from '@/common/components/atoms/UPoliticalPartyIcon'
import { Party } from '@/common/enums/Party'
import UHStack from '@/common/components/atoms/UHStack'

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
              key={cosponsor.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <StyledNameText>{cosponsor.name || EMPTY_CELL}</StyledNameText>
              </TableCell>
              <TableCell align="left">
                <UHStack spacing={1} alignItems="center">
                  <UPoliticalPartyIcon
                    variant="rounded"
                    party={
                      cosponsor?.party === Party.REPUBLICAN
                        ? 'republic'
                        : cosponsor?.party === Party.DEMOCRATIC
                          ? 'democracy'
                          : 'other'
                    }
                    size="small"
                  />
                  <StyledBodyText textTransform="capitalize">
                    {cosponsor.party
                      ? cosponsor.party.toLowerCase()
                      : EMPTY_CELL}
                  </StyledBodyText>
                </UHStack>
              </TableCell>
              <TableCell align="left">
                <StyledBodyText>
                  {cosponsor.constituency || EMPTY_CELL}
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
