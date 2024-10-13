import { LineChartIcon } from '@/common/styles/assets/Icons'
import UContentCard from '@/common/components/atoms/UContentCard'
import IdeologyLeadershipChartElement from '@/common/components/elements/IdeologyLeadershipChart'
import data from '@/modules/People/assets/data/ideology.json'

const IdeologyLeadershipChart = function IdeologyLeadershipChart() {
  return (
    <UContentCard
      headerIconAction="modal"
      withHeader
      headerProps={{
        title: 'Ideology-Leadership Chart',
        icon: <LineChartIcon />,
        iconColor: 'secondary',
      }}
    >
      <IdeologyLeadershipChartElement activeId={'412190'} data={data} />
    </UContentCard>
  )
}

export default IdeologyLeadershipChart
