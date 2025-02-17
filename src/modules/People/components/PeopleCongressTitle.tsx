import { type CongressExperienceRange } from '@/modules/People/classes/People'
import { Typography } from '@mui/material'
import dayjs from 'dayjs'
import { useMemo } from 'react'

interface PeopleCongressTitleProps {
  congressExperienceRange: CongressExperienceRange
}

const PeopleCongressTitle = function PeopleCongressTitle({
  congressExperienceRange,
}: PeopleCongressTitleProps) {
  const isPresent = useMemo(() => {
    // 如果沒有 end，代表還在任職中，所以取目前年份
    if (!congressExperienceRange.latestCongressYear) return true
    // 如果最新的國會年份為今年，代表還在任職中
    if (congressExperienceRange.latestCongressYear === dayjs().year())
      return true
    return false
  }, [congressExperienceRange])

  const congressRangeText = useMemo(() => {
    if (
      !congressExperienceRange.earliestCongress ||
      !congressExperienceRange.latestCongress
    )
      return null
    const start = congressExperienceRange.earliestCongress
    const end = congressExperienceRange.latestCongress

    // TODO: i18n
    return [`${start}th`, `${end}th`].join(' - ')
  }, [congressExperienceRange])

  const yearRangeText = useMemo(() => {
    if (!congressExperienceRange.earliestCongressYear) return null

    const start = congressExperienceRange.earliestCongressYear
    const end = isPresent
      ? 'Present'
      : (congressExperienceRange.latestCongressYear ?? '')

    return [start, end].join(' - ')
  }, [congressExperienceRange, isPresent])

  if (!congressRangeText && !yearRangeText) return null

  return (
    <Typography variant="bodyS" fontWeight={600}>
      {/** TODO i18n */}
      {[congressRangeText, `(${yearRangeText})`].join(' ')}
    </Typography>
  )
}

export default PeopleCongressTitle
