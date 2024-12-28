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
    // 如果 end 是現在，代表還在任職中，所以取目前年份
    return congressExperienceRange.latestCongressYear === dayjs().year()
  }, [congressExperienceRange])

  if (
    !congressExperienceRange.earliestCongress ||
    !congressExperienceRange.latestCongress ||
    !congressExperienceRange.earliestCongressYear
  )
    return null

  return (
    <Typography variant="bodyS" fontWeight={600}>
      {/** TODO i18n */}
      {`${congressExperienceRange.earliestCongress}th 
      - ${congressExperienceRange.latestCongress}th Congress 
      (${congressExperienceRange.earliestCongressYear}
      -${isPresent ? 'Present' : (congressExperienceRange.latestCongressYear ?? '')})`}
    </Typography>
  )
}

export default PeopleCongressTitle
