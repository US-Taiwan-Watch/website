'use client'

import UPagination from '@/common/components/atoms/UPagination'
import { USTWTheme } from '@/common/lib/mui/theme'
import TaiwanRecordCard from '@/modules/TaiwanRecord/components/TaiwanRecordCard'
import useTaiwanRecord from '@/modules/TaiwanRecord/hooks/useTaiwanRecord'
import { useTheme } from '@mui/material'
import Stack from '@mui/material/Stack'

const TaiwanRecordList = () => {
  const theme = useTheme<USTWTheme>()
  const { list } = useTaiwanRecord()

  return (
    <Stack gap={theme.spacing(7.5)}>
      <Stack gap={theme.spacing(1.5)}>
        {list.map((item) => (
          <div key={item.id}>
            <TaiwanRecordCard taiwanRecord={item} />
          </div>
        ))}
      </Stack>
      <UPagination
        sx={{
          margin: '0 auto',
        }}
        count={10}
        page={1}
      />
    </Stack>
  )
}

export default TaiwanRecordList
