import { BillStatusEnum } from '@/modules/Bill/enums/BillStatus'
import { ChamberEnum } from '@/common/enums/Chamber'
import { People } from '@/modules/People/classes/People'
import { isArray, isString } from 'lodash-es'
import { ROUTES } from '@/routes'

export interface BillAction {
  date: string
  description?: string
  // 參眾議院
  chamber: ChamberEnum
}

interface BillArgs {
  id: string
  title: string
  previousTitles: string[]
  sponsor: People
  cosponsors: People[]
  tags: string[]
  status: BillStatusEnum
  actions: BillAction[]
}

export class Bill {
  // ID
  id?: string
  // 法案名稱
  title?: string
  // 法案名稱歷史
  previousTitles?: string[] // TODO: 確認 DESC 還是 ASC
  // 提案人
  sponsor?: People
  // 共同提案人
  cosponsors?: People[]
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
    if (isArray(bill.previousTitles)) {
      this.previousTitles = bill.previousTitles
    }
    if (bill.sponsor instanceof People) {
      this.sponsor = bill.sponsor
    }
    if (isArray(bill.cosponsors)) {
      this.cosponsors = bill.cosponsors
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
    return `${ROUTES.BILL}/${this.id}`
  }

  get introducedDate() {
    return this.actions?.[0]?.date
  }

  /**
   * Get the latest action of the bill
   * @returns The latest action
   */
  get latestAction() {
    return this.actions?.[this.actions.length - 1]
  }

  /**
   * Get the index of the bill status
   * @returns The index of the bill status
   */
  get statusIndex() {
    return Object.values(BillStatusEnum).findIndex((key) => key === this.status)
  }

  get chamberPrefix(): string {
    return this.latestAction?.chamber === ChamberEnum.HOUSE
      ? 'H.R.'
      : this.latestAction?.chamber === ChamberEnum.SENATE
        ? 'S.'
        : ''
  }

  get cosponsorsCount() {
    return (this.cosponsors ?? []).length
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
