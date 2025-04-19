import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'

dayjs.extend(utc)
dayjs.extend(timezone)

export class DateUtils {
  static DcTimezone = 'America/New_York'

  /**
   * 解析本地時間，如果解析失敗，則返回 null
   * @param date
   * @returns
   */
  static parseLocal(date?: string) {
    if (!date) return null
    if (!dayjs(date).isValid()) return null
    return dayjs(date)
  }

  /**
   * 安全解析本地時間，如果解析失敗，則返回當前時間
   * @param date
   * @returns
   */
  static safeParseLocal(date?: string) {
    if (!date) return dayjs()
    if (!dayjs(date).isValid()) return dayjs()
    return dayjs(date)
  }

  /**
   * 安全格式化本地時間，如果解析失敗，則返回空字串
   * @param date
   * @param format
   * @returns
   */
  static formatLocal(date?: string, format: string = 'YYYY-MM-DD HH:mm:ss') {
    if (!date) return ''
    if (!dayjs(date).isValid()) return ''
    return dayjs(date).format(format)
  }

  /**
   * 解析 DC 時間，如果解析失敗，則返回 null
   * @param date
   * @returns
   */
  static parseDc(date?: string) {
    if (!date) return null
    if (!dayjs(date).isValid()) return null
    return dayjs(date).tz(this.DcTimezone)
  }

  /**
   * 安全解析 DC 時間，如果解析失敗，則返回當前時間
   * @param date
   * @returns
   */
  static safeParseDc(date?: string) {
    if (!date) return dayjs()
    if (!dayjs(date).isValid()) return dayjs()
    return dayjs(date).tz(this.DcTimezone)
  }

  /**
   * 安全格式化 DC 時間，如果解析失敗，則返回空字串
   * @param date
   * @param format
   * @returns
   */
  static formatDc(date?: string, format: string = 'YYYY-MM-DD HH:mm:ss') {
    if (!date) return ''
    if (!dayjs(date).isValid()) return ''
    return dayjs(date).tz(this.DcTimezone).format(format)
  }
}
