import { type CongressExperienceRange } from '@/modules/People/classes/People'
import { Typography } from '@mui/material'

interface PeopleCongressTitleProps {
  congressExperienceRange: CongressExperienceRange
}

const PeopleCongressTitle = function PeopleCongressTitle({
  congressExperienceRange,
}: PeopleCongressTitleProps) {
  if (
    !congressExperienceRange.earliestCongress ||
    !congressExperienceRange.latestCongress ||
    !congressExperienceRange.earliestCongressYear
  )
    return null

  return (
    <Typography variant="bodyS" fontWeight={600}>
      {/** TODO i18n */}
      {`${congressExperienceRange.earliestCongress}th - ${congressExperienceRange.latestCongress}th Congress (${congressExperienceRange.earliestCongressYear}-${congressExperienceRange.latestCongressYear ?? 'Present'})`}
    </Typography>
  )
}

export default PeopleCongressTitle
