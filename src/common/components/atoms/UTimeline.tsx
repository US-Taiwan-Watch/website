'use client'

import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  timelineItemClasses,
  TimelineSeparator,
} from '@mui/lab'
import {
  Typography,
  useTheme,
  Stepper,
  Step,
  StepLabel,
  Box,
  stepConnectorClasses,
  StepConnector,
  Tooltip,
  StepConnectorProps,
} from '@mui/material'
import { styled, USTWTheme } from '@/common/lib/mui/theme'
import { useMemo } from 'react'

// Be hardcoded in source code
const TIMELINE_DOT_MARGIN_PX = 15.5
const TIMELINE_DOT_WIDTH_PX = 12

type UTimelineItemProps = {
  title: string
  variant?: 'primary' | 'secondary'
} & Partial<{
  subtitle: string
  isLast: boolean
  isActiveDot: boolean
  isActiveConnector: boolean
  isFuture: boolean
  minHeight?: number
}>

export type UTimelineData = Array<{
  title: string
  subtitle?: string
  isFuture?: boolean
}>

type UTimelineProps = {
  data: UTimelineData
  activeIndex?: number
  isHorizontal?: boolean
  itemMinHeight?: number
  variant?: 'primary' | 'secondary'
}

interface StyledConnectorProps extends StepConnectorProps {
  variant?: 'primary' | 'secondary'
}

const StyledConnector = styled(StepConnector)<StyledConnectorProps>(
  ({ theme, variant = 'primary' }) => ({
    [`&.${stepConnectorClasses.root}`]: {
      top: 0,
      left: '-50%',
      right: '50%',
    },
    [`&.${stepConnectorClasses.active}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        borderColor:
          variant === 'primary'
            ? theme.color.lime[500]
            : theme.color.purple[100],
      },
    },
    [`&.${stepConnectorClasses.completed}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        borderColor:
          variant === 'primary'
            ? theme.color.lime[500]
            : theme.color.purple[100],
      },
    },
    [`&.${stepConnectorClasses.disabled}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        borderColor: theme.color.neutral[200],
      },
    },
    [`& .${stepConnectorClasses.line}`]: {
      borderTopWidth: `${TIMELINE_DOT_WIDTH_PX}px`,
    },
  })
)

function HorizontalTimeline({
  data,
  activeIndex,
  variant = 'primary',
}: UTimelineProps) {
  const theme = useTheme<USTWTheme>()
  const color = useMemo(() => {
    if (variant === 'primary') {
      return theme.color.lime[500]
    }

    return theme.color.purple[100]
  }, [variant, theme])

  return (
    <Stepper
      activeStep={activeIndex}
      alternativeLabel
      connector={<StyledConnector variant={variant} />}
      sx={{
        width: `${(data.length / Math.max(data.length - 1, 1)) * 100}%`,
        ml: `-${100 / Math.max(data.length - 1, 1) / 2}%`,
        pl: data.length > 1 ? '12px' : '18px',
        pr: data.length > 1 ? '12px' : '0px',
      }}
    >
      {data.map((item, index) => {
        const isActiveDot = index === activeIndex
        const isFuture = item.isFuture ?? false

        return (
          <Tooltip key={index} title={data[index].title} arrow>
            <Step disabled={isFuture}>
              <StepLabel
                StepIconComponent={() => (
                  <Box
                    sx={{
                      width: TIMELINE_DOT_WIDTH_PX,
                      height: TIMELINE_DOT_WIDTH_PX,
                      borderRadius: '50%',
                      backgroundColor: isActiveDot
                        ? color
                        : theme.color.common.black,
                      outline: isActiveDot
                        ? `3px solid ${theme.color.common.black}`
                        : 'none',
                      zIndex: 1,
                    }}
                  />
                )}
              />
            </Step>
          </Tooltip>
        )
      })}
    </Stepper>
  )
}

function UTimelineItem({
  title,
  subtitle,
  isLast,
  isActiveDot,
  isActiveConnector,
  minHeight,
  variant = 'primary',
}: UTimelineItemProps) {
  const theme = useTheme<USTWTheme>()

  const color = useMemo(() => {
    if (variant === 'primary') {
      return theme.color.lime[500]
    }

    return theme.color.purple[100]
  }, [variant, theme])

  return (
    <TimelineItem sx={{ minHeight: minHeight ?? 'unset' }}>
      <TimelineSeparator>
        <TimelineDot
          sx={{
            backgroundColor: isActiveDot ? color : theme.color.common.black,
            outline: isActiveDot
              ? `3px solid ${theme.color.common.black}`
              : 'none',
          }}
        />
        {!isLast && (
          <TimelineConnector
            sx={{
              backgroundColor: isActiveConnector
                ? color
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

export default function UTimeline({
  data,
  activeIndex,
  isHorizontal,
  itemMinHeight,
  variant = 'primary',
}: UTimelineProps) {
  if (isHorizontal) {
    return (
      <HorizontalTimeline
        data={data}
        activeIndex={activeIndex}
        variant={variant}
      />
    )
  }

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
        height: '100%',
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
          minHeight={itemMinHeight}
          variant={variant}
        />
      ))}
    </Timeline>
  )
}
