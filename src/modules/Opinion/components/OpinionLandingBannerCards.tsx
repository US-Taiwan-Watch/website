'use client'

import Carousel from '@/common/components/elements/Carousel'
import DotPagination from '@/common/components/elements/Carousel/DotPagination'
import { USTWTheme } from '@/common/lib/mui/theme'
import OpinionLandingBannerCard from '@/modules/Opinion/components/OpinionLandingBannerCard'
import { Box, useTheme } from '@mui/material'

const OpinionLandingBannerCards = () => {
  const theme = useTheme<USTWTheme>()

  return (
    <Box padding={theme.spacing(6, 0)}>
      <Carousel renderPagination={(props) => <DotPagination {...props} />}>
        <OpinionLandingBannerCard
          tags={['#1', '#2', '#3']}
          title="國家級警報：中共發射衛星火箭"
          description="大家都有收到嗎 ？ 1/9 下午三點多，觀測站的小編們都收到了國家級警報。華語寫著「衛星」，英語版可能會讓民眾嚇一跳：上面寫著 missile。事實上，這是一個「火箭搭載的衛星」， 英文可能要寫成「 a rocket carrying a satellite 」比較合適？"
          image="/assets/category1.jpg"
          href="https://via.placeholder.com"
        />
        <OpinionLandingBannerCard
          tags={['#1', '#2', '#3']}
          title="國家級警報：中共發射衛星火箭"
          description="大家都有收到嗎 ？ 1/9 下午三點多，觀測站的小編們都收到了國家級警報。華語寫著「衛星」，英語版可能會讓民眾嚇一跳：上面寫著 missile。事實上，這是一個「火箭搭載的衛星」， 英文可能要寫成「 a rocket carrying a satellite 」比較合適？"
          image="/assets/category1.jpg"
          href="https://via.placeholder.com"
        />
        <OpinionLandingBannerCard
          tags={['#1', '#2', '#3']}
          title="國家級警報：中共發射衛星火箭"
          description="大家都有收到嗎 ？ 1/9 下午三點多，觀測站的小編們都收到了國家級警報。華語寫著「衛星」，英語版可能會讓民眾嚇一跳：上面寫著 missile。事實上，這是一個「火箭搭載的衛星」， 英文可能要寫成「 a rocket carrying a satellite 」比較合適？"
          image="/assets/category1.jpg"
          href="https://via.placeholder.com"
        />
      </Carousel>
    </Box>
  )
}

export default OpinionLandingBannerCards
