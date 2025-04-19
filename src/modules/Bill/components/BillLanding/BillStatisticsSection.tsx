import CongressCard from '@/modules/Bill/components/BillLanding/CongressCard'
import Introduction from '@/modules/Bill/components/BillLanding/Introduction'
import PopularTags from '@/modules/Bill/components/BillLanding/PopularTags'
import SponsorCard from '@/modules/Bill/components/BillLanding/SponsorCard'
import TrendCard from '@/modules/Bill/components/BillLanding/TrendCard'
import { Grid2, Stack } from '@mui/material'
import ServerBillApi from '@/modules/Bill/api/ServerBillApi'
import { Language } from '@/common/lib/i18n/types'

/**
 * 贊成法案最多的前 5 名議員
 */
const TOP_SPONSORS_LIMIT = 5

/**
 * 反對法案最多的前 5 名議員
 */
const TOP_COSPONSORS_LIMIT = 5

type BillStatisticsSectionProps = {
  lang: Language
}

export default async function BillStatisticsSection({
  lang,
}: BillStatisticsSectionProps) {
  const sponsors = await ServerBillApi.getTopSponsors({
    limit: TOP_SPONSORS_LIMIT,
  })

  const cosponsors = await ServerBillApi.getTopCosponsors({
    limit: TOP_COSPONSORS_LIMIT,
  })

  return (
    <Stack
      spacing={{
        xs: 3,
        sm: 6,
      }}
    >
      <Introduction />
      <PopularTags lang={lang} />
      <Grid2
        container
        spacing={{
          xs: 1,
          sm: 2,
        }}
      >
        <Grid2
          size={{
            xs: 12,
            sm: 7,
            lg: 8,
          }}
        >
          <TrendCard />
        </Grid2>
        <Grid2
          size={{
            xs: 12,
            sm: 5,
            lg: 4,
          }}
        >
          <SponsorCard sponsorsData={sponsors} />
        </Grid2>
        <Grid2
          size={{
            xs: 12,
            sm: 7,
            lg: 8,
          }}
        >
          <CongressCard />
        </Grid2>
        <Grid2
          size={{
            xs: 12,
            sm: 5,
            lg: 4,
          }}
        >
          <SponsorCard isCosponsor sponsorsData={cosponsors} />
        </Grid2>
      </Grid2>
    </Stack>
  )
}
