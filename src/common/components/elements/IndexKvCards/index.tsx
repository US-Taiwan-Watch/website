'use client'

import UFullWidthBackgroundBox from '@/common/components/atoms/UFullWidthBackgroundBox'
import Carousel from '@/common/components/elements/Carousel'
import IndexKvCard from '@/common/components/elements/IndexKvCard'
import { USTWTheme } from '@/common/lib/mui/theme'
import { ROUTES } from '@/routes'
import { Container, useTheme } from '@mui/material'

const IndexKVCards = () => {
  const theme = useTheme<USTWTheme>()

  return (
    <UFullWidthBackgroundBox>
      <Container>
        <Carousel>
          <IndexKvCard
            containerSx={{ margin: theme.spacing(0, 1) }}
            tags={Array.from({ length: 100 }, (_, i) => `#${i + 1}`)}
            title="快訊：美國政府宣布提供台灣 8000 萬美元外國軍事融資"
            description="美國時間8/30日，美聯社報導美國政府已正式通知國會，將向台灣提供8000萬美元「無償軍事援助」。去年底通過的2023財政年度國防授權法案（NDAA FY2023）中有一項「台灣增強韌性法案」（Taiwan Enhanced Resilience Act），授權美國國務院從2023年至2027年期間，每年提供台灣高達20億美元的軍援...美國時間8/30日，美聯社報導美國政府已正式通知國會，將向台灣提供8000萬美元「無償軍事援助」。去年底通過的2023財政年度國防授權法案（NDAA FY2023）中有一項「台灣增強韌性法案」（Taiwan Enhanced Resilience Act），授權美國國務院從2023年至2027年期間，每年提供台灣高達20億美元的軍援..."
            image="/assets/category1.jpg"
            href={ROUTES.BILL}
          />
          <IndexKvCard
            containerSx={{ margin: theme.spacing(0, 1) }}
            tags={['#1', '#2', '#3']}
            title="快訊：美國政府宣布提供台灣 8000 萬美元外國軍事融資"
            description="美國時間8/30日，美聯社報導美國政府已正式通知國會，將向台灣提供8000萬美元「無償軍事援助」。去年底通過的2023財政年度國防授權法案（NDAA FY2023）中有一項「台灣增強韌性法案」（Taiwan Enhanced Resilience Act），授權美國國務院從2023年至2027年期間，每年提供台灣高達20億美元的軍援...美國時間8/30日，美聯社報導美國政府已正式通知國會，將向台灣提供8000萬美元「無償軍事援助」。去年底通過的2023財政年度國防授權法案（NDAA FY2023）中有一項「台灣增強韌性法案」（Taiwan Enhanced Resilience Act），授權美國國務院從2023年至2027年期間，每年提供台灣高達20億美元的軍援..."
            image="/assets/category1.jpg"
            href={ROUTES.BILL}
          />
          <IndexKvCard
            containerSx={{ margin: theme.spacing(0, 1) }}
            tags={['#1', '#2', '#3']}
            title="快訊：美國政府宣布提供台灣 8000 萬美元外國軍事融資"
            description="美國時間8/30日，美聯社報導美國政府已正式通知國會，將向台灣提供8000萬美元「無償軍事援助」。去年底通過的2023財政年度國防授權法案（NDAA FY2023）中有一項「台灣增強韌性法案」（Taiwan Enhanced Resilience Act），授權美國國務院從2023年至2027年期間，每年提供台灣高達20億美元的軍援...美國時間8/30日，美聯社報導美國政府已正式通知國會，將向台灣提供8000萬美元「無償軍事援助」。去年底通過的2023財政年度國防授權法案（NDAA FY2023）中有一項「台灣增強韌性法案」（Taiwan Enhanced Resilience Act），授權美國國務院從2023年至2027年期間，每年提供台灣高達20億美元的軍援..."
            image="/assets/category1.jpg"
            href={ROUTES.BILL}
          />
        </Carousel>
      </Container>
    </UFullWidthBackgroundBox>
  )
}

export default IndexKVCards
