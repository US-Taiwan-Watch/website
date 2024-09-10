import { Congress } from '@/common/classes/Congress'
import { Typography } from '@mui/material'

interface PeopleCongressTitleProps {
  congress: Congress
}

const PeopleCongressTitle = function PeopleCongressTitle ({ congress }: PeopleCongressTitleProps) {
  return (
    <Typography variant="bodyS" fontWeight={600}>
      {/** TODO i18n */}
      {`${congress.congressNumber}th Congress (${congress.startYear}-${congress.endYear})`}
    </Typography>
  )
}

export default PeopleCongressTitle
