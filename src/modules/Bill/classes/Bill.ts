import { BillStatusEnum } from '@/modules/Bill/enums/BillStatus'
import { ChamberEnum } from '@/common/enums/Chamber'
import { People } from '@/modules/People/classes/People'
import { isArray, isNumber, isString } from 'lodash-es'
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
  sponsor: People
  cosponsors: People[]
  tags: string[]
  status: BillStatusEnum
  actions: BillAction[]
  congressNumber: number
}

export class Bill {
  // ID
  id?: string
  // 法案名稱
  title?: string
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
  // 國會屆數
  congressNumber?: number

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
    if (isNumber(bill.congressNumber)) {
      this.congressNumber = bill.congressNumber
    }
  }

  get link() {
    return `${ROUTES.BILL}/${this.id}`
  }

  /**
   * Get the external link of the bill
   * @returns The external link
   * @example 'https://www.congress.gov/bill/118th-congress/house-bill/8281'
   */
  get externalLink() {
    const billType =
      this.latestAction?.chamber === ChamberEnum.HOUSE
        ? 'house'
        : this.latestAction?.chamber === ChamberEnum.SENATE
          ? 'senate'
          : ''
    const billNumber = this.id?.replace(/\D/g, '') // Extract only numbers from the ID
    return `https://www.congress.gov/bill/${this.congressNumber}th-congress/${billType}-bill/${billNumber}`
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
