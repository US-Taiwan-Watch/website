'use client'

import { useEpisode } from '@/modules/Podcast/hooks/useEpisode'
import {
  memo,
  forwardRef,
  useImperativeHandle,
  useMemo,
  ComponentProps,
} from 'react'
import { Typography, Slider, Stack } from '@mui/material'
import { PlayCircleRounded, Pause } from '@mui/icons-material'
import Image from 'next/image'
import {
  EpisodeCardProps,
  EpisodeCardRef,
} from '@/modules/Podcast/types/ComponentProp'
import { styled } from '@/common/lib/mui/theme'
import { usePlayerWithUI } from '@/modules/Podcast/hooks/usePlayer'
import UIconButton from '@/common/components/atoms/UIconButton'
import UHeightLimitedText from '@/common/components/atoms/UHeightLimitedText'

const StyledIndexEpisodeCardContainer = styled(Stack)(({ theme }) => ({
  backgroundColor: '#FFFFFF1A', // Opacity 10%
  borderRadius: '20px',
  color: theme.color.common.white,
}))

const StyledCoverImage = styled(Image)(() => ({
  borderRadius: '5px',
  width: '110px',
  height: '110px',
  objectFit: 'cover',
}))

const StyledTitle = styled(UHeightLimitedText)(() => ({
  fontWeight: 500,
}))

const StyledControlBarContainer = styled(Stack)(({ theme }) => ({
  '& .control-button': {
    color: theme.color.common.white,
    padding: 0,
    width: '25px',
    height: '25px',
    '& svg': {
      width: '25px',
      height: '25px',
    },
  },
}))

const StyledSlider = styled(Slider)(({ theme }) => ({
  color: theme.color.common.white,
  '& .MuiSlider-rail': {
    backgroundColor: '#00000026',
  },
  '& .MuiSlider-track': {
    backgroundColor: theme.color.neutral[600],
    color: theme.color.neutral[600],
  },
  '& .MuiSlider-thumb': {
    backgroundColor: theme.color.neutral[600],
    boxShadow: 'none !important',
    width: '12px',
    height: '12px',
  },
}))

interface IndexEpisodeCardProps extends EpisodeCardProps {
  className?: string
  containerProps?: Pick<
    ComponentProps<typeof StyledIndexEpisodeCardContainer>,
    'onMouseDown'
  >
}

const IndexEpisodeCard = memo(
  forwardRef<EpisodeCardRef, IndexEpisodeCardProps>(function IndexEpisodeCard(
    {
      className,
      podcastId,
      episodeId,
      onPlay,
      onPause,
      containerProps,
    }: IndexEpisodeCardProps,
    ref
  ) {
    const { episode } = useEpisode(podcastId, episodeId)
    const memoizedEpisode = useMemo(() => episode, [episode])

    const {
      playing,
      progress,
      remainingTime,
      togglePlayPause,
      handleSliderChange,
    } = usePlayerWithUI({
      audioUrl: memoizedEpisode?.audioUrl,
      episodeId,
      podcastId,
      onPlay,
      onPause,
    })

    useImperativeHandle(ref, () => ({
      togglePlayPause,
    }))

    if (!episode) return null

    return (
      <StyledIndexEpisodeCardContainer
        className={className}
        direction="row"
        alignItems="center"
        spacing={4}
        padding={2}
        {...containerProps}
      >
        <StyledCoverImage
          src={episode.cover!}
          alt={episode.title!}
          width={200}
          height={200}
        />
        <Stack direction="column" flex={1} spacing={2}>
          <StyledTitle gutterBottom flex={1} maxLine={2}>
            {episode.title}
          </StyledTitle>
          <StyledControlBarContainer
            direction="row"
            alignItems="center"
            spacing={2}
          >
            <UIconButton
              variant="contained"
              color="default"
              className="control-button"
              onClick={togglePlayPause}
            >
              {playing ? (
                <Pause fontSize="large" />
              ) : (
                <PlayCircleRounded fontSize="large" />
              )}
            </UIconButton>
            <StyledSlider
              value={progress}
              max={1}
              min={0}
              step={0.01}
              onChange={handleSliderChange}
              aria-labelledby="continuous-slider"
            />
            <Typography variant="body2">{remainingTime}</Typography>
          </StyledControlBarContainer>
        </Stack>
      </StyledIndexEpisodeCardContainer>
    )
  })
)

export default IndexEpisodeCard
