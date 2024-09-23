import { UTimelineData } from '@/common/components/atoms/UTimeline'
import { BillStatusEnum } from '@/modules/Bill/enums/BillStatus'

export const billStatusList: UTimelineData = Object.values(BillStatusEnum).map(
  (status) => ({
    title: status.replaceAll('_', ' '),
  })
)
