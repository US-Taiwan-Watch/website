'use client'

import { CongressIcon } from '@/common/styles/assets/Icons'
import { Stack, Typography, useTheme } from '@mui/material'
import { USTWTheme } from '@/common/lib/mui/theme'
import UContentCardWithModal from '@/common/components/atoms/UContentCardWithModal'
import ParliamentChart, {
  ParliamentChartData,
} from '@/modules/Bill/components/BillLanding/ParliamentChart'
import { useMemo, useState } from 'react'
import UHStack from '@/common/components/atoms/UHStack'
import UButton from '@/common/components/atoms/UButton'
import { ChamberEnum } from '@/common/enums/Chamber'
import { CongressUtils } from '@/common/business/Congress'
import useTranslationClient from '@/common/lib/i18n/hooks/useTranslationClient'

// TODO: 討論是否改為動態資料源
const PARLIAMENT_CHART_DATA_MOCK_HOUSE = Object.entries(
  CongressUtils.getHouseCongressMembers()
).map(
  ([party, count]) =>
    ({
      party,
      count,
    }) as ParliamentChartData
)

// TODO: 討論是否改為動態資料源
const PARLIAMENT_CHART_DATA_MOCK_SENATE = Object.entries(
  CongressUtils.getSenateCongressMembers()
).map(
  ([party, count]) =>
    ({
      party,
      count,
    }) as ParliamentChartData
)

export default function CongressCard() {
  const { t } = useTranslationClient('bill')
  const theme = useTheme<USTWTheme>()
  const [selectedChamber, setSelectedChamber] = useState<ChamberEnum>(
    ChamberEnum.HOUSE
  )

  const data = useMemo<ParliamentChartData[]>(() => {
    if (selectedChamber === ChamberEnum.HOUSE) {
      return PARLIAMENT_CHART_DATA_MOCK_HOUSE
    }
    return PARLIAMENT_CHART_DATA_MOCK_SENATE
  }, [selectedChamber])

  return (
    <UContentCardWithModal
      header={{
        title: t('landing.card.congressionalDistribution.title', {
          ns: 'bill',
        }),
        icon: <CongressIcon />,
        iconColor: 'primary',
      }}
    >
      <Stack pt={2} alignItems="center">
        <ParliamentChart data={data} />
        <UHStack alignItems="center" justifyContent="center" spacing={2}>
          {[ChamberEnum.HOUSE, ChamberEnum.SENATE].map((chamber) => (
            <UButton
              key={chamber}
              variant="contained"
              color="primary"
              sx={{
                backgroundColor:
                  selectedChamber === chamber
                    ? theme.color.purple[100]
                    : theme.color.neutral[100],
                textTransform: 'capitalize',
                padding: `${theme.spacing(0.75)} ${theme.spacing(1)}`,
                width: {
                  xs: '80px',
                  sm: '100px',
                },
              }}
              rounded
              onClick={() => setSelectedChamber(chamber)}
            >
              <Typography variant="subtitleS">
                {t(`landing.card.congressionalDistribution.chart.${chamber}`, {
                  ns: 'bill',
                })}
              </Typography>
            </UButton>
          ))}
        </UHStack>
      </Stack>
    </UContentCardWithModal>
  )
}
