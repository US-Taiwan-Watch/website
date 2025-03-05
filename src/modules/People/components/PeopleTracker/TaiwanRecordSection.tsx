'use client'

import UButton from '@/common/components/atoms/UButton'
import LandingSectionWrapper from '@/common/components/elements/Landing/LandingSectionWrapper'
import SectionTitle from '@/common/components/elements/Landing/SectionTitle'
import { USTWTheme } from '@/common/lib/mui/theme'
import TaiwanRecordList from '@/modules/TaiwanRecord/components/TaiwanRecordList'
import AddIcon from '@mui/icons-material/Add'
import { useTheme } from '@mui/material'
import Stack from '@mui/material/Stack'
import { People } from '@/modules/People/business/People'

interface TaiwanRecordSectionProps {
  people: People
}

export default function TaiwanRecordSection({
  people,
}: TaiwanRecordSectionProps) {
  const theme = useTheme<USTWTheme>()

  return (
    <LandingSectionWrapper>
      <Stack gap={theme.spacing(7.5)}>
        <SectionTitle
          title="Taiwan Record"
          renderEndComponent={() => (
            <UButton
              variant="contained"
              color="primary"
              rounded
              size="medium"
              startIcon={<AddIcon />}
            >
              Submit
            </UButton>
          )}
        />
        <TaiwanRecordList records={people.taiwanRecords} />
      </Stack>
    </LandingSectionWrapper>
  )
}
