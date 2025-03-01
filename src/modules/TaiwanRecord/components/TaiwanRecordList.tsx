import UPagination from '@/common/components/atoms/UPagination'
import { USTWTheme } from '@/common/lib/mui/theme'
import TaiwanRecordCard from '@/modules/TaiwanRecord/components/TaiwanRecordCard'
import { useTheme } from '@mui/material'
import Stack from '@mui/material/Stack'
import {
  TaiwanRecord,
  TaiwanRecordUtils,
} from '@/modules/TaiwanRecord/business/TaiwanRecord'

interface TaiwanRecordListProps {
  records: TaiwanRecord[]
}

const TaiwanRecordList = ({ records }: TaiwanRecordListProps) => {
  const theme = useTheme<USTWTheme>()

  return (
    <Stack gap={theme.spacing(7.5)}>
      <Stack gap={theme.spacing(1.5)}>
        {records
          .filter((record) => TaiwanRecordUtils.isApproved(record))
          .map((item) => (
            <div key={item.id}>
              <TaiwanRecordCard taiwanRecord={item} />
            </div>
          ))}
      </Stack>
      {
        // FIXME: 因為是 mock data，所以先固定 5 筆，之後改動態 api 取得
        records.length > 5 && (
          <UPagination
            sx={{
              margin: '0 auto',
            }}
            count={10}
            page={1}
          />
        )
      }
    </Stack>
  )
}

export default TaiwanRecordList
