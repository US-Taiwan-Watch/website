import { BriefcaseIcon } from '@/common/styles/assets/Icons'
import { CardContent, Stack, Typography, useTheme } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import UIconButton from '@/common/components/atoms/UIconButton'
import { USTWTheme } from '@/common/lib/mui/theme'
import CloseIcon from '@mui/icons-material/Close'
import { useMemo } from 'react'
import {
  type Experience as PeopleExperience,
  People,
} from '@/modules/People/classes/People'
import Timeline from '@mui/lab/Timeline'
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import TimelineConnector from '@mui/lab/TimelineConnector'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineDot from '@mui/lab/TimelineDot'
import UContentCard from '@/common/components/atoms/UContentCard'
import UContentCardDialog from '@/common/components/atoms/UContentCardDialog'
import useModal from '@/common/lib/useModal'

/**
 * 計算經歷的時間
 * @param experience 經歷
 * @returns 時間文字
 */
const useExperienceTime = function (experience: PeopleExperience) {
  // TODO: i18n
  const durationText = useMemo(() => {
    const duration = People.CalculateExperienceDuration(experience)
    let text = ''
    if (duration.year > 0) {
      text += `${duration.year} yr${duration.year > 1 ? 's' : ''} `
    }
    if (duration.month > 0) {
      text += `${duration.month} mo${duration.month > 1 ? 's' : ''}`
    }
    return text
  }, [experience])

  // TODO: i18n
  const timeText = useMemo(() => {
    if (!experience.start) return ''

    // 現在進行中
    if (!experience.end) {
      return `${experience.start.format(People.TimeFormat)} ~ Present`
    } else if (experience.experience) {
      return durationText
    } else {
      return `${experience.start.format(People.TimeFormat)} ~ ${experience.end.format(People.TimeFormat)} • ${durationText}`
    }
  }, [experience, durationText])

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
  experience: PeopleExperience
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
        <Typography variant="bodyM" fontWeight={700}>
          {experience.title}
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
const ExperienceTimeline = function ExperienceTimeline({
  experience,
}: {
  experience: Array<PeopleExperience>
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
  experience: PeopleExperience
}) {
  const theme = useTheme<USTWTheme>()
  const { timeText } = useExperienceTime(experience)

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
        {experience.title}
      </Typography>
      {experience.subtitle && (
        <Typography variant="bodyS" fontWeight={500}>
          {experience.subtitle}
        </Typography>
      )}
      <Typography
        variant="bodyS"
        sx={{ color: theme.color.neutral[500] }}
        fontWeight={400}
      >
        {timeText}
      </Typography>
      {experience.descriptions &&
        experience.descriptions.map((description, index) => (
          <Typography
            key={index}
            variant="bodyS"
            fontWeight={500}
            sx={{ color: theme.color.neutral[500] }}
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
  experience: PeopleExperience[]
  /**
   * 是否是彈窗
   */
  isModal?: boolean
  /**
   * 點擊事件
   */
  onActionClick?: () => void
}

/**
 * 人物經歷元件
 * @param experience 經歷
 * @param isModal 是否是彈窗
 * @param onActionClick 點擊事件
 * @returns 人物經歷元件
 */
const Experience = function Experience({
  experience,
  isModal,
  onActionClick,
}: ExperienceProps) {
  const theme = useTheme<USTWTheme>()
  const { isModalOpen, handleOpenModal, handleCloseModal } = useModal()

  const handleActionClick = () => {
    if (!isModal) {
      handleOpenModal()
    } else {
      onActionClick?.()
    }
  }

  return (
    <UContentCard
      withHeader
      headerProps={{
        title: 'Experience',
        icon: <BriefcaseIcon />,
        iconColor: 'primary',
        action: (
          <UIconButton
            variant="rounded"
            color="inherit"
            size="small"
            onClick={handleActionClick}
          >
            {isModal ? (
              <CloseIcon sx={{ color: theme.color.neutral[500] }} />
            ) : (
              <ArrowForwardIcon sx={{ color: theme.color.neutral[500] }} />
            )}
          </UIconButton>
        ),
      }}
      sx={{
        ...(isModal && {
          padding: 0,
          border: 'none',
          borderRadius: 0,
        }),
      }}
      overflowHidden={!isModal}
    >
      <CardContent
        sx={{
          padding: 0,
        }}
      >
        {experience?.map((exp, index) => (
          <ExperienceRow key={index} experience={exp} />
        ))}
      </CardContent>
      {isModalOpen && (
        <UContentCardDialog open={isModalOpen} onClose={handleCloseModal}>
          <Experience
            isModal
            onActionClick={handleCloseModal}
            experience={experience}
          />
        </UContentCardDialog>
      )}
    </UContentCard>
  )
}

export default Experience
