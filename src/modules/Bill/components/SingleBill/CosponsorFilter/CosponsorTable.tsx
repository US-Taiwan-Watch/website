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
import UPoliticalPartyIcon from '@/common/components/atoms/UPoliticalPartyIcon'
import UHStack from '@/common/components/atoms/UHStack'
import CommonUtils from '@/modules/Common/Common.utils'
import Link from 'next/link'
import { BillCosponsor } from '@/modules/People/business/BillCosponsor'
import { PeopleUtils } from '@/modules/People/business/People'
import { useCallback } from 'react'
import { DateUtils } from '@/modules/Common/business/Date'

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

export default function CosponsorTable({ cosponsors }: Props) {
  const theme = useTheme<USTWTheme>()
  const getCosponsoredAt = useCallback((cosponsor: BillCosponsor) => {
    return DateUtils.formatDc(cosponsor.cosponsoredAt, 'MM/DD/YYYY')
  }, [])

  return (
    <TableContainer>
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
            const people = cosponsor.people

            return (
              <TableRow
                key={index}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <Link href={PeopleUtils.getLink(people.id)}>
                    <StyledNameText>
                      {people?.name ? people.name : EMPTY_CELL}
                    </StyledNameText>
                  </Link>
                </TableCell>
                <TableCell align="left">
                  <UHStack spacing={1} alignItems="center">
                    {people?.party && (
                      <UPoliticalPartyIcon party={people.party} size="small" />
                    )}
                    <StyledBodyText textTransform="capitalize">
                      {people?.party ? people.party.toLowerCase() : EMPTY_CELL}
                    </StyledBodyText>
                  </UHStack>
                </TableCell>
                <TableCell align="left">
                  <StyledBodyText>
                    {cosponsor.constituency
                      ? CommonUtils.formatConstituency(cosponsor.constituency)
                      : EMPTY_CELL}
                  </StyledBodyText>
                </TableCell>
                <TableCell align="left">
                  <StyledBodyText>{getCosponsoredAt(cosponsor)}</StyledBodyText>
                </TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
