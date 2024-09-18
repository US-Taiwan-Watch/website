import { BillStatusEnum } from '@/modules/Bill/enums/BillStatus'
import { ChamberEnum } from '@/common/enums/Chamber'
import { People } from '@/modules/People/classes/People'
import { isArray, isString } from 'lodash-es'

interface BillAction {
  date: string
  description?: string
  // 參眾議院
  chamber: ChamberEnum
}

interface BillArgs {
  id: string
  title: string
  sponsor: People
  tags: string[]
  status: BillStatusEnum
  actions: BillAction[]
}

export class Bill {
  // ID
  id?: string
  // 法案名稱
  title?: string
  // 提案人
  sponsor?: People
  // 標籤
  tags?: string[]
  // 法案狀態
  status?: BillStatusEnum
  // 法案動作
  actions?: BillAction[]

  constructor(private readonly bill: BillArgs) {
    if (isString(bill.id)) {
      this.id = bill.id
    }
    if (isString(bill.title)) {
      this.title = bill.title
    }
    if (bill.sponsor instanceof People) {
      this.sponsor = bill.sponsor
    }
    if (isArray(bill.tags)) {
      this.tags = bill.tags
    }
    if (isString(bill.status)) {
      this.status = bill.status
    }
    if (isArray(bill.actions)) {
      this.actions = bill.actions.map((action) => ({
        date: action.date,
        description: action.description,
        chamber: action.chamber,
      }))
    }
  }

  get link() {
    return `/bill/${this.id}`
  }

  /**
   * Get the latest action of the bill
   * @returns The latest action
   */
  get latestAction() {
    return this.actions?.[this.actions.length - 1]
  }

  get chamberPrefix(): string {
    return this.latestAction?.chamber === ChamberEnum.HOUSE
      ? 'H.R.'
      : this.latestAction?.chamber === ChamberEnum.SENATE
        ? 'S.'
        : ''
  }

  /**
   * Check if the bill has passed both chambers
   * @returns true if the bill has passed both House and Senate
   */
  hasPassedBothChambers(): boolean {
    const hasPassedHouse = (this.actions ?? []).some(
      (action) =>
        action.chamber === ChamberEnum.HOUSE &&
        action.description?.includes('Passed')
    )
    const hasPassedSenate = (this.actions ?? []).some(
      (action) =>
        action.chamber === ChamberEnum.SENATE &&
        action.description?.includes('Passed')
    )
    return hasPassedHouse && hasPassedSenate
  }

  /**
   * Get the current status of the bill
   * @returns The latest achieved status
   */
  static GetBillLatestStatus(status: BillStatusEnum): string {
    switch (status) {
      case BillStatusEnum.BECOME_LAW:
        return 'Become Law'
      case BillStatusEnum.TO_PRESIDENT:
        return 'To President'
      case BillStatusEnum.PASSED_SENATE:
        return 'Passed Senate'
      case BillStatusEnum.PASSED_HOUSE:
        return 'Passed House'
      case BillStatusEnum.INTRODUCED:
        return 'Introduced'
      default:
        return 'Unknown'
    }
  }
}
