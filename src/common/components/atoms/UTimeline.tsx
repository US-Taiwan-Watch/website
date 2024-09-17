import { USTWTheme } from '@/common/lib/mui/theme'
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  timelineItemClasses,
  TimelineSeparator,
} from '@mui/lab'
import { Typography, useTheme } from '@mui/material'

type UTimelineItemProps = {
  title: string
} & Partial<{
  subtitle: string
  isLast: boolean
  isActiveDot: boolean
  isActiveConnector: boolean
}>

function UTimelineItem({
  title,
  subtitle,
  isLast,
  isActiveDot,
  isActiveConnector,
}: UTimelineItemProps) {
  const theme = useTheme<USTWTheme>()

  return (
    <TimelineItem sx={{ minHeight: 'unset' }}>
      <TimelineSeparator>
        <TimelineDot
          sx={{
            backgroundColor: isActiveDot
              ? theme.color.purple[100]
              : theme.color.common.black,
            outline: isActiveDot
              ? `3px solid ${theme.color.common.black}`
              : 'none',
          }}
        />
        {!isLast && (
          <TimelineConnector
            sx={{
              backgroundColor: isActiveConnector
                ? theme.color.purple[100]
                : theme.color.neutral[200],
            }}
          />
        )}
      </TimelineSeparator>
      <TimelineContent>
        <Typography
          variant={isActiveDot ? 'articleH4' : 'buttonS'}
          {...(isActiveDot && {
            lineHeight: 1.2,
          })}
          sx={{
            color: isActiveDot
              ? theme.color.common.black
              : theme.color.grey[500],
          }}
        >
          {title}
        </Typography>
        {subtitle && (
          <Typography variant="bodyS" sx={{ color: theme.color.neutral[500] }}>
            {subtitle}
          </Typography>
        )}
      </TimelineContent>
    </TimelineItem>
  )
}

// Be hardcoded in source code
const TIMELINE_DOT_MARGIN_PX = 15.5
const TIMELINE_DOT_WIDTH_PX = 12

export type UTimelineData = Array<{
  title: string
  subtitle?: string
}>

type UTimelineProps = {
  data: UTimelineData
  activeIndex?: number
}

export default function UTimeline({ data, activeIndex }: UTimelineProps) {
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
          borderRadius: '10px',
          width: `${TIMELINE_DOT_WIDTH_PX}px`,
        },
        [`& .MuiTimelineDot-root`]: {
          zIndex: 1,
        },
      }}
    >
      {data.map((d, index) => (
        <UTimelineItem
          key={index}
          title={d.title}
          subtitle={d.subtitle}
          isLast={index === data.length - 1}
          isActiveDot={index === activeIndex}
          isActiveConnector={!!activeIndex && index < activeIndex}
        />
      ))}
    </Timeline>
  )
}
