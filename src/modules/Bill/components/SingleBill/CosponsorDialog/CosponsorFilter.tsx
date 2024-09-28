'use client'

import { styled, USTWTheme } from '@/common/lib/mui/theme'
import {
  Checkbox,
  Collapse,
  FormControlLabel,
  FormGroup,
  Stack,
  Typography,
  useTheme,
} from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import { useState } from 'react'
import UHStack from '@/common/components/atoms/UHStack'
import UIconButton from '@/common/components/atoms/UIconButton'

const FAKE_COUNT = 20

const StyledOptionContainer = styled(FormGroup)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingTop: theme.spacing(0.5),
  paddingBottom: theme.spacing(0.5),
  borderTop: `1px solid ${theme.color.grey[1400]}`,
}))

const StyledCategoryContainer = styled(UHStack)(({ theme }) => ({
  alignItems: 'center',
  justifyContent: 'space-between',
  borderTop: `1px solid ${theme.color.grey[1400]}`,
  marginTop: theme.spacing(1),
  paddingTop: theme.spacing(2),
  paddingBottom: theme.spacing(2),
}))

const StyledExpandButton = styled(UIconButton)(() => ({
  borderRadius: '6px',
  width: '24px',
  height: '24px',
}))

const StyledOptionText = styled(Typography)(({ theme }) => ({
  ...theme.typography.buttonXXS,
  color: theme.color.neutral[500],
}))

const StyledBadge = styled(Stack)(({ theme }) => ({
  color: theme.color.common.white,
  backgroundColor: theme.color.grey[400],
  borderRadius: '32px',
  padding: '2px 6px',
  marginLeft: theme.spacing(1),
}))

export default function CosponsorFilter() {
  const theme = useTheme<USTWTheme>()
  const [expandedParty, setExpandedParty] = useState(true)
  const [expandedTerritory, setExpandedTerritory] = useState(false)

  return (
    <Stack pl={1}>
      <FormGroup>
        <FormControlLabel
          control={<Checkbox color="secondary" />}
          label={
            <Typography
              variant="buttonXS"
              fontWeight={600}
              sx={{
                color: theme.color.neutral[500],
              }}
            >
              Select all
            </Typography>
          }
        />

        {/* Party of Cosponsor */}
        <StyledCategoryContainer>
          <Typography variant="buttonXS" fontWeight={700}>
            Party of Cosponsor
          </Typography>

          <StyledExpandButton
            variant="contained"
            color="secondary"
            size="small"
            onClick={() => setExpandedParty((prev) => !prev)}
          >
            {expandedParty ? <RemoveIcon /> : <AddIcon />}
          </StyledExpandButton>
        </StyledCategoryContainer>

        <Collapse in={expandedParty}>
          <StyledOptionContainer>
            <FormControlLabel
              control={<Checkbox color="secondary" size="small" />}
              label={<StyledOptionText>House Roll Call Vote</StyledOptionText>}
            />
            <StyledBadge>
              <Typography variant="buttonXXS">{FAKE_COUNT}</Typography>
            </StyledBadge>
          </StyledOptionContainer>
          <StyledOptionContainer>
            <FormControlLabel
              control={<Checkbox color="secondary" size="small" />}
              label={<StyledOptionText>Senate Roll Call Vote</StyledOptionText>}
            />
            <StyledBadge>
              <Typography variant="buttonXXS">{FAKE_COUNT}</Typography>
            </StyledBadge>
          </StyledOptionContainer>
        </Collapse>

        {/* Cosponsors by U.S. State or Territory */}
        <StyledCategoryContainer>
          <Typography variant="buttonXS" fontWeight={700}>
            Cosponsors by U.S. State or Territory
          </Typography>

          <StyledExpandButton
            variant="contained"
            color="secondary"
            size="small"
            onClick={() => setExpandedTerritory((prev) => !prev)}
          >
            {expandedTerritory ? <RemoveIcon /> : <AddIcon />}
          </StyledExpandButton>
        </StyledCategoryContainer>

        {/* TODO: 待釐清有哪些選項 */}
        <Collapse in={expandedTerritory}>
          <StyledOptionContainer>
            <FormControlLabel
              control={<Checkbox color="secondary" size="small" />}
              label={<StyledOptionText>House Roll Call Vote</StyledOptionText>}
            />
            <StyledBadge>
              <Typography variant="buttonXXS">{FAKE_COUNT}</Typography>
            </StyledBadge>
          </StyledOptionContainer>
          <StyledOptionContainer>
            <FormControlLabel
              control={<Checkbox color="secondary" size="small" />}
              label={<StyledOptionText>Senate Roll Call Vote</StyledOptionText>}
            />
            <StyledBadge>
              <Typography variant="buttonXXS">{FAKE_COUNT}</Typography>
            </StyledBadge>
          </StyledOptionContainer>
        </Collapse>
      </FormGroup>
    </Stack>
  )
}
