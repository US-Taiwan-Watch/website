import { Stack } from '@mui/material'
import { SectionTitleWithLink } from '@/common/components/elements/Landing/SectionTitle'
import IndexBillCardList from '@/modules/Bill/components/IndexBillCard/IndexBillCardList'
import UContainer from '@/common/components/atoms/UContainer'
import getURouterServer from '@/common/lib/router/getURouterServer'
import { RouteName } from '@/common/lib/router/routes'
import { Bill } from '@/modules/Bill/business/Bill'

type BillSectionProps = {
  title: string
  bills: Bill[]
}

export default function BillSection({ title, bills }: BillSectionProps) {
  const { resolveRouteUrl } = getURouterServer()

  return (
    <UContainer>
      <Stack
        py={{
          xs: 4,
          sm: 10,
        }}
        gap={{
          xs: 4,
          sm: 7.5,
        }}
      >
        <SectionTitleWithLink
          title={title}
          link={resolveRouteUrl({ name: RouteName.Bill })}
        />
        <IndexBillCardList billData={bills} />
      </Stack>
    </UContainer>
  )
}
