import { CongressExperienceRange } from '@/modules/People/business/People'
import { Typography } from '@mui/material'
import { useMemo } from 'react'
import useTranslationClient from '@/common/lib/i18n/hooks/useTranslationClient'
import { DateUtils } from '@/modules/Common/business/Date'

interface PeopleCongressTitleProps {
  congressExperienceRange: CongressExperienceRange
}

const PeopleCongressTitle = function PeopleCongressTitle({
  congressExperienceRange,
}: PeopleCongressTitleProps) {
  const { t } = useTranslationClient(['people'])

  const isPresent = useMemo(() => {
    // 如果沒有 end，代表還在任職中，所以取目前年份
    if (!congressExperienceRange.latestCongressYear) return true
    // 如果最新的國會年份為今年，代表還在任職中
    if (
      congressExperienceRange.latestCongressYear ===
      DateUtils.safeParseDc().year()
    )
      return true
    return false
  }, [congressExperienceRange])

  const congressRangeText = useMemo(() => {
    if (
      !congressExperienceRange.earliestCongress ||
      !congressExperienceRange.latestCongress
    )
      return null
    const start = t('card.congress.ordinal', {
      ns: 'people',
      count: congressExperienceRange.earliestCongress,
    })
    const end = t('card.congress.ordinal', {
      ns: 'people',
      count: congressExperienceRange.latestCongress,
    })

    return `${start} - ${end}`
  }, [congressExperienceRange, t])

  const yearRangeText = useMemo(() => {
    if (!congressExperienceRange.earliestCongressYear) return null

    const start = congressExperienceRange.earliestCongressYear
    const end = isPresent
      ? t('card.congress.present', { ns: 'people' })
      : (congressExperienceRange.latestCongressYear ?? '')

    return [start, end].join(' - ')
  }, [congressExperienceRange, isPresent, t])

  if (!congressRangeText && !yearRangeText) return null

  return (
    <Typography variant="bodyS" fontWeight={600}>
      {t('card.congress.titleFormat', {
        ns: 'people',
        congressRange: congressRangeText,
        yearRange: yearRangeText,
      })}
    </Typography>
  )
}

export default PeopleCongressTitle
