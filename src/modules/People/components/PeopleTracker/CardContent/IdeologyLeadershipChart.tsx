import UContentCard from '@/common/components/atoms/UContentCard'
import UContentCardHeader from '@/common/components/atoms/UContentCardHeader'
import UContentCardContent from '@/common/components/atoms/UContentCardContent'
import IdeologyLeadershipChartElement from '@/common/components/elements/IdeologyLeadershipChart'
import data from '@/modules/People/assets/data/ideology.json'
import useTranslationClient from '@/common/lib/i18n/hooks/useTranslationClient'

interface IdeologyLeadershipChartProps {
  isCurrentCongressMember?: boolean
  govTrackId?: string
}

const IdeologyLeadershipChart = function IdeologyLeadershipChart({
  isCurrentCongressMember,
  govTrackId,
}: IdeologyLeadershipChartProps) {
  const { t } = useTranslationClient(['people'])
  const activeId = isCurrentCongressMember ? govTrackId : undefined

  return (
    <UContentCard>
      <UContentCardHeader
        title={t('page.card.ideologyLeadershipChart.title', { ns: 'people' })}
      />
      <UContentCardContent>
        <IdeologyLeadershipChartElement activeId={activeId} data={data} />
      </UContentCardContent>
    </UContentCard>
  )
}

export default IdeologyLeadershipChart
