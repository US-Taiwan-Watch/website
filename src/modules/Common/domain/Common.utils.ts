import dayjs from 'dayjs'

export class CommonUtils {
  static parseDateTime(datetime?: string | null) {
    return datetime && dayjs(datetime).isValid() ? dayjs(datetime) : null
  }
}
