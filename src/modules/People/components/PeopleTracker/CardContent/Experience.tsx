import UCardHeader from '@/common/components/atoms/UCardHeader'
import { BriefcaseIcon } from '@/common/styles/assets/Icons'
import {
  Box,
  Card,
  CardContent,
  Dialog,
  Stack,
  Typography,
  useTheme,
} from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import UIconButton from '@/common/components/atoms/UIconButton'
import { USTWTheme } from '@/common/lib/mui/theme'
import CloseIcon from '@mui/icons-material/Close'
import { useMemo, useState } from 'react'
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
          margin: '-15.5px 0',
          backgroundColor: theme.color.grey[100],
          width: '12px',
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

const ExperienceRow = function ExperienceRow({
  experience,
}: {
  experience: PeopleExperience
}) {
  const theme = useTheme<USTWTheme>()
  const { timeText } = useExperienceTime(experience)

  return (
    <Stack className="experience-row" padding={1}>
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
  experience: PeopleExperience[]
  isModal?: boolean
  onActionClick?: () => void
}

const Experience = function Experience({
  experience,
  isModal,
  onActionClick,
}: ExperienceProps) {
  const theme = useTheme<USTWTheme>()
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleActionClick = () => {
    if (!isModal) {
      setIsModalOpen(true)
    } else {
      onActionClick?.()
    }
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  return (
    <>
      <UCardHeader
        title="Experience"
        icon={<BriefcaseIcon />}
        iconColor="primary"
        action={
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
        }
      />
      <CardContent
        sx={{
          padding: 0,
          position: isModal ? 'relative' : 'absolute',
          width: isModal ? '100%' : 'calc(100% - 48px)',
          [`& .experience-row`]: {
            '&:not(:last-child)': {
              borderBottom: `1px solid ${theme.color.grey[1900]}`,
            },
          },
        }}
      >
        {experience?.map((exp, index) => (
          <ExperienceRow key={index} experience={exp} />
        ))}
      </CardContent>
      {isModalOpen && (
        <Dialog
          open={isModalOpen}
          onClose={handleCloseModal}
          PaperProps={{
            sx: {
              width: '100%',
              borderRadius: theme.shape.borderRadius,
            },
          }}
        >
          <Box
            sx={{
              bgcolor: 'background.paper',
            }}
          >
            <Card
              sx={{
                padding: 2,
                '& .MuiCardContent-root': {
                  paddingBottom: 0,
                },
              }}
            >
              <Experience
                isModal
                onActionClick={handleCloseModal}
                experience={experience}
              />
            </Card>
          </Box>
        </Dialog>
      )}
    </>
  )
}

export default Experience
