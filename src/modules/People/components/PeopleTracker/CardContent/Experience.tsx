import { BriefcaseIcon } from '@/common/styles/assets/Icons'
import { Stack, Typography, useTheme } from '@mui/material'
import { USTWTheme } from '@/common/lib/mui/theme'
import { useMemo } from 'react'
import Timeline from '@mui/lab/Timeline'
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import TimelineConnector from '@mui/lab/TimelineConnector'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineDot from '@mui/lab/TimelineDot'
import UContentCardWithModal from '@/common/components/atoms/UContentCardWithModal'
import { People, PeopleUtils } from '@/modules/People/business/People'
import useTranslationClient from '@/common/lib/i18n/hooks/useTranslationClient'
import { DateUtils } from '@/modules/Common/business/Date'

/**
 * 計算經歷的時間
 * @param experience 經歷
 * @returns 時間文字
 */
const useExperienceTime = function (experience: People['experience'][number]) {
  const { t } = useTranslationClient(['people'])

  const durationText = useMemo(() => {
    const duration = PeopleUtils.calculateExperienceDuration(experience)
    const parts = []

    if (duration.year > 0) {
      parts.push(
        t('page.card.experience.duration.year', {
          ns: 'people',
          count: duration.year,
        })
      )
    }

    if (duration.month > 0) {
      parts.push(
        t('page.card.experience.duration.month', {
          ns: 'people',
          count: duration.month,
        })
      )
    }

    return parts.join(' ')
  }, [experience, t])

  const timeText = useMemo(() => {
    const start = DateUtils.parseLocal(experience.start)
    const end = DateUtils.parseLocal(experience.end)
    if (!start || !end) return ''

    const startText = start.format(PeopleUtils.ExperienceTimeFormat)

    // 現在進行中
    if (!experience.end) {
      return t('page.card.experience.timeRange.ongoing', {
        ns: 'people',
        start: startText,
      })
    } else if (experience.experience) {
      return durationText
    } else {
      const endText = end.format(PeopleUtils.ExperienceTimeFormat)
      return t('page.card.experience.timeRange.complete', {
        ns: 'people',
        start: startText,
        end: endText,
        duration: durationText,
      })
    }
  }, [experience, durationText, t])

  return { timeText, durationText }
}

/**
 * 經歷時間軸項目
 * @param experience 經歷
 * @param isLast 是否是最後一個
 * @returns 經歷時間軸項目
 */
const ExperienceTimelineItem = function ExperienceTimelineItem({
  experience,
  isLast,
}: {
  experience: People['experience'][number]
  isLast?: boolean
}) {
  const theme = useTheme<USTWTheme>()
  const { timeText } = useExperienceTime(experience)

  return (
    <TimelineItem
      sx={{
        minHeight: 'unset',
      }}
    >
      <TimelineSeparator>
        <TimelineDot />
        {!isLast && <TimelineConnector />}
      </TimelineSeparator>
      <TimelineContent>
        <Typography
          sx={{
            fontSize: '14px',
            fontWeight: 700,
          }}
        >
          {experience.title}
        </Typography>
        <Typography
          sx={{
            color: theme.color.neutral[500],
            fontSize: '12px',
            fontWeight: 400,
          }}
        >
          {timeText}
        </Typography>
      </TimelineContent>
    </TimelineItem>
  )
}

// Be hardcoded in source code
const TIMELINE_DOT_MARGIN_PX = 15.5
const TIMELINE_DOT_WIDTH_PX = 12

/**
 * 經歷時間軸
 * @param experience 經歷
 * @returns 經歷時間軸
 */
const ExperienceTimeline = function ExperienceTimeline({
  experience,
}: {
  experience: People['experience']
}) {
  const theme = useTheme<USTWTheme>()

  return (
    <Timeline
      sx={{
        padding: 0,
        margin: 0,
        [`& .${timelineItemClasses.root}:before`]: {
          flex: 0,
          padding: 0,
        },
        [`& .MuiTimelineConnector-root`]: {
          margin: `-${TIMELINE_DOT_MARGIN_PX + TIMELINE_DOT_WIDTH_PX / 2}px 0`,
          backgroundColor: theme.color.grey[100],
          width: `${TIMELINE_DOT_WIDTH_PX}px`,
        },
        [`& .MuiTimelineDot-root`]: {
          zIndex: 1,
          backgroundColor: theme.color.grey[400],
        },
      }}
    >
      {experience.map((exp, index) => (
        <ExperienceTimelineItem
          key={index}
          experience={exp}
          isLast={index === experience.length - 1}
        />
      ))}
    </Timeline>
  )
}

/**
 * 經歷行
 * @param experience 經歷
 * @returns 經歷行
 */
const ExperienceRow = function ExperienceRow({
  experience,
}: {
  experience: People['experience'][number]
}) {
  const theme = useTheme<USTWTheme>()
  const { timeText } = useExperienceTime(experience)

  return (
    <Stack
      className="experience-row"
      sx={{
        '&:not(:last-child)': {
          borderBottom: `1px solid ${theme.color.grey[1900]}`,
          pb: 2,
        },
      }}
    >
      <Typography
        sx={{
          fontSize: {
            xs: '14px',
            md: '17px',
          },
          fontWeight: 700,
        }}
      >
        {experience.title}
      </Typography>
      {experience.subtitle && (
        <Typography
          sx={{
            fontSize: {
              xs: '12px',
              md: '15px',
            },
            fontWeight: 500,
          }}
        >
          {experience.subtitle}
        </Typography>
      )}
      <Typography
        sx={{
          color: theme.color.neutral[500],
          fontSize: {
            xs: '12px',
            md: '15px',
          },
          fontWeight: 400,
        }}
      >
        {timeText}
      </Typography>
      {experience.descriptions &&
        experience.descriptions.map((description, index) => (
          <Typography
            key={index}
            sx={{
              color: theme.color.neutral[500],
              fontSize: {
                xs: '12px',
                md: '15px',
              },
              fontWeight: 500,
            }}
          >
            {description}
          </Typography>
        ))}
      {experience.experience && (
        <ExperienceTimeline experience={experience.experience} />
      )}
    </Stack>
  )
}

interface ExperienceProps {
  /**
   * 人物經歷
   */
  experience: People['experience']
}

/**
 * 人物經歷元件
 * @param experience 經歷
 * @returns 人物經歷元件
 */
const Experience = function Experience({ experience }: ExperienceProps) {
  const { t } = useTranslationClient(['people'])

  return (
    <UContentCardWithModal
      header={{
        title: t('page.card.experience.title', { ns: 'people' }),
        icon: <BriefcaseIcon />,
        iconColor: 'primary',
        actionType: 'modal',
      }}
      overflowHidden
      noContentPlaceholder={
        <Typography variant="subtitleXL" fontWeight={400}>
          {t('page.card.experience.placeholder', { ns: 'people' })}
        </Typography>
      }
    >
      <Stack gap={2}>
        {experience.map((exp, index) => (
          <ExperienceRow key={index} experience={exp} />
        ))}
      </Stack>
    </UContentCardWithModal>
  )
}

export default Experience
