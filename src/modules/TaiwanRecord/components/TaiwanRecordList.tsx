import UPagination from '@/common/components/atoms/UPagination'
import { USTWTheme } from '@/common/lib/mui/theme'
import TaiwanRecordCard from '@/modules/TaiwanRecord/components/TaiwanRecordCard'
import { useTheme } from '@mui/material'
import Stack from '@mui/material/Stack'
import TaiwanRecord from '@/modules/TaiwanRecord/classes/TaiwanRecord'
import { useParams } from 'next/navigation'
import { findPeople } from '@/modules/People/data'
import { People } from '@/modules/People/classes/People'
import { Language } from '@/common/lib/i18n/types'

const TaiwanRecordList = () => {
  const { id: peopleId, lang } = useParams<{ id: string; lang: Language }>()
  const theme = useTheme<USTWTheme>()

  const dto = findPeople(peopleId)
  if (!dto) return null
  const people = People.fromDTO(lang, dto)
  const records = people.taiwanRecords

  return (
    <Stack gap={theme.spacing(7.5)}>
      <Stack gap={theme.spacing(1.5)}>
        {records.filter(TaiwanRecord.isApproved).map((item) => (
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
