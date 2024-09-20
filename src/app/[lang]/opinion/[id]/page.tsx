import OpinionPostBanner from '@/modules/Opinion/components/OpinionPost/OpinionPostBanner'
import OpinionPostContent from '@/modules/Opinion/components/OpinionPost/OpinionPostContent'
import OpinionPostHeader from '@/modules/Opinion/components/OpinionPost/OpinionPostHeader'
import { Stack } from '@mui/material'
import { Metadata } from 'next'

// TODO: 從 API 取得資料
export const metadata: Metadata = {
  title: '國家級警報：中共發射衛星火箭',
  description:
    'description description description description description description description description',
}

export default function OpinionPage() {
  return (
    <Stack gap={4}>
      {/** Header Section */}
      <OpinionPostHeader />
      {/** Banner Section */}
      <OpinionPostBanner
        image={'/assets/category1.jpg'}
        caption={
          '1967年，中國共產黨主席毛澤東掀起文化大革命，當時在北京市中心展示了他的巨大畫像與標語。（攝影／JEAN VINCENT／AFP）'
        }
      />

      {/** Content Section */}
      <OpinionPostContent />

      {/** Footer Section */}

      {/** Author Section */}

      {/** Related Posts Section */}
    </Stack>
  )
}
