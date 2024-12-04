import { BriefcaseIcon } from '@/common/styles/assets/Icons'
import { Stack, Typography, useTheme } from '@mui/material'
import { USTWTheme } from '@/common/lib/mui/theme'
import { PeopleExperience } from '@/modules/People/domains/People.utils'
import Timeline from '@mui/lab/Timeline'
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import TimelineConnector from '@mui/lab/TimelineConnector'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineDot from '@mui/lab/TimelineDot'
import UContentCard from '@/common/components/atoms/UContentCard'

/**
 * 計算經歷的時間
 * @param experience 經歷
 * @returns 時間文字
 */
const useExperiencePositionTime = function (
  position: NonNullable<PeopleExperience['positions']>[number]
) {
  // FIXME: avoid eslint error
  console.log(position)
  // TODO: 根據 PeopleExperience 重構這塊
  // TODO: i18n
  // const durationText = useMemo(() => {
  //   const duration = PeopleUtils.calculateExperiencePositionDuration(experience)
  //   let text = ''
  //   if (duration.year > 0) {
  //     text += `${duration.year} yr${duration.year > 1 ? 's' : ''} `
  //   }
  //   if (duration.month > 0) {
  //     text += `${duration.month} mo${duration.month > 1 ? 's' : ''}`
  //   }
  //   return text
  // }, [experience])

  // // TODO: i18n
  // const timeText = useMemo(() => {
  //   if (!experience.start) return ''

  //   // 現在進行中
  //   if (!experience.end) {
  //     return `${experience.start.format(People.TimeFormat)} ~ Present`
  //   } else if (experience.experience) {
  //     return durationText
  //   } else {
  //     return `${experience.start.format(People.TimeFormat)} ~ ${experience.end.format(People.TimeFormat)} • ${durationText}`
  //   }
  // }, [experience, durationText])

  return { timeText: '', durationText: '' }
}

/**
 * 經歷時間軸項目
 * @param experience 經歷
 * @param isLast 是否是最後一個
 * @returns 經歷時間軸項目
 */
const ExperiencePositionTimelineItem = function ExperiencePositionTimelineItem({
  position,
  isLast,
}: {
  position: NonNullable<PeopleExperience['positions']>[number]
  isLast?: boolean
}) {
  const theme = useTheme<USTWTheme>()
  const { timeText } = useExperiencePositionTime(position)

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
        <Typography variant="bodyM" fontWeight={700}>
          {/** TODO: 待確認 People 有沒有 title */}
          {/* {experience.title} */}
        </Typography>
        <Typography
          variant="bodyS"
          sx={{ color: theme.color.neutral[500] }}
          fontWeight={400}
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
const ExperiencePositionTimeline = function ExperiencePositionTimeline({
  positions = [],
}: {
  positions?: PeopleExperience['positions']
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
      {positions?.map((position, index) => (
        <ExperiencePositionTimelineItem
          key={index}
          position={position}
          isLast={index === positions.length - 1}
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
  experience: PeopleExperience
}) {
  const theme = useTheme<USTWTheme>()
  // TODO: 重構
  // const { timeText } = useExperiencePositionTime(experience)
  const timeText = ''

  return (
    <Stack
      className="experience-row"
      padding={1}
      sx={{
        '&:not(:last-child)': {
          borderBottom: `1px solid ${theme.color.grey[1900]}`,
        },
      }}
    >
      <Typography variant="bodyM" fontWeight={700}>
        {/** TODO: 待確認 People 有沒有 title */}
        {/* {experience.title} */}
      </Typography>
      {/** TODO: 待確認 People 有沒有 subtitle */}
      {/* {experience.subtitle && (
        <Typography variant="bodyS" fontWeight={500}>
          {experience.subtitle}
        </Typography>
      )} */}
      <Typography
        variant="bodyS"
        sx={{ color: theme.color.neutral[500] }}
        fontWeight={400}
      >
        {timeText}
      </Typography>
      {/** TODO: 待確認 People 有沒有 descriptions */}
      {/* {experience.descriptions &&
        experience.descriptions.map((description, index) => (
          <Typography
            key={index}
            variant="bodyS"
            fontWeight={500}
            sx={{ color: theme.color.neutral[500] }}
          >
            {description}
          </Typography>
        ))} */}
      <ExperiencePositionTimeline positions={experience.positions} />
    </Stack>
  )
}

interface ExperienceProps {
  /**
   * 人物經歷
   */
  experiences: PeopleExperience[]
}

/**
 * 人物經歷元件
 * @param experience 經歷
 * @param isModal 是否是彈窗
 * @param onActionClick 點擊事件
 * @returns 人物經歷元件
 */
const Experience = function Experience({ experiences }: ExperienceProps) {
  return (
    <UContentCard
      headerIconAction="modal"
      withHeader
      headerProps={{
        title: 'Experience',
        icon: <BriefcaseIcon />,
        iconColor: 'primary',
      }}
      overflowHidden
      noContentPlaceholder={
        <Typography variant="subtitleXL" fontWeight={400}>
          No experience
        </Typography>
      }
    >
      {experiences.map((experience, index) => (
        <ExperienceRow key={index} experience={experience} />
      ))}
    </UContentCard>
  )
}

export default Experience
