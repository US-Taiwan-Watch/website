import UContentCard from '@/common/components/atoms/UContentCard'
import IdeologyLeadershipChartElement from '@/common/components/elements/IdeologyLeadershipChart'
import data from '@/modules/People/assets/data/ideology.json'

interface IdeologyLeadershipChartProps {
  isCurrentCongressMember?: boolean
  govTrackId?: string
}

const IdeologyLeadershipChart = function IdeologyLeadershipChart({
  isCurrentCongressMember,
  govTrackId,
}: IdeologyLeadershipChartProps) {
  const activeId = isCurrentCongressMember ? govTrackId : undefined

  return (
    <UContentCard
      withHeader
      headerProps={{
        title: 'Ideology-Leadership Chart',
      }}
    >
      <IdeologyLeadershipChartElement activeId={activeId} data={data} />
    </UContentCard>
  )
}

export default IdeologyLeadershipChart
