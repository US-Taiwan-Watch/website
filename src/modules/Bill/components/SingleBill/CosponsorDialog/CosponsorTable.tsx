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
import { ChamberEnum } from '@/common/enums/Chamber'
import dayjs from 'dayjs'
import { BillCosponsor } from '@/modules/People/classes/BillCosponsor'

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
  cosponsors: BillCosponsor[]
}

const getName = (people: People) => {
  const chamberAbbreviation =
    people.chamber === ChamberEnum.HOUSE
      ? 'H.R.'
      : people.chamber === ChamberEnum.SENATE
        ? 'S.'
        : ''
  return `${chamberAbbreviation}${people.name}`
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
          {cosponsors.map((cosponsor, index) => {
            const cosponsoredAt = cosponsor.cosponsoredAt
            const people = cosponsor.people

            return (
              <TableRow
                key={index}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <StyledNameText>
                    {people?.name ? getName(people) : EMPTY_CELL}
                  </StyledNameText>
                </TableCell>
                <TableCell align="left">
                  <UHStack spacing={1} alignItems="center">
                    <UPoliticalPartyIcon
                      variant="rounded"
                      party={people?.party ?? Party.INDEPENDENT}
                      size="small"
                    />
                    <StyledBodyText textTransform="capitalize">
                      {people?.party ? people.party.toLowerCase() : EMPTY_CELL}
                    </StyledBodyText>
                  </UHStack>
                </TableCell>
                <TableCell align="left">
                  <StyledBodyText>
                    {cosponsor.constituency
                      ? cosponsor.constituency.toUpperCase()
                      : EMPTY_CELL}
                  </StyledBodyText>
                </TableCell>
                <TableCell align="left">
                  <StyledBodyText>
                    {cosponsoredAt && dayjs(cosponsoredAt).isValid()
                      ? dayjs(cosponsoredAt).format('MM/DD/YYYY')
                      : EMPTY_CELL}
                  </StyledBodyText>
                </TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
