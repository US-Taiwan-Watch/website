'use client'

import { useEpisode } from '@/modules/Podcast/hooks/useEpisode'
import {
  memo,
  useCallback,
  forwardRef,
  useImperativeHandle,
  useMemo,
} from 'react'
import { Typography, Slider, Stack } from '@mui/material'
import { PlayCircleRounded, Pause } from '@mui/icons-material'
import Image from 'next/image'
import { debounce } from 'lodash-es'
import {
  EpisodeCardProps,
  EpisodeCardRef,
} from '@/modules/Podcast/types/ComponentProp'
import { styled } from '@/common/lib/mui/theme'
import usePlayer from '@/modules/Podcast/hooks/usePlayer'
import UIconButton from '@/common/components/atoms/UIconButton'

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

const StyledTitle = styled(Typography)(() => ({
  fontWeight: 500,
  display: '-webkit-box',
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
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
  className?: string;
}

const IndexEpisodeCard = memo(
  forwardRef<EpisodeCardRef, IndexEpisodeCardProps>(function IndexEpisodeCard (
    {
      className,
      podcastId,
      episodeId,
      onPlay,
      onPause,
    }: IndexEpisodeCardProps,
    ref
  ) {
    const { episode } = useEpisode(podcastId, episodeId)
    const memoizedEpisode = useMemo(() => episode, [episode])

    const memoizedOnPlay = useCallback(() => {
      onPlay?.({ podcastId, episodeId })
    }, [onPlay, podcastId, episodeId])

    const memoizedOnPause = useCallback(() => {
      onPause?.({ podcastId, episodeId })
    }, [onPause, podcastId, episodeId])

    const { playerRef, playing, progress, remainingTime, play, pause } = usePlayer({
      audioUrl: memoizedEpisode?.audioUrl,
      onPlayCallback: memoizedOnPlay,
      onPauseCallback: memoizedOnPause,
    })

    const togglePlayPause = () => {
      if (playerRef.current) {
        if (playing) {
          pause()
        } else {
          play()
        }
      }
    }

    const debouncedSliderChange = debounce(
      (_: Event, newValue: number | number[]) => {
        if (playerRef.current && typeof newValue === 'number') {
          const duration = playerRef.current.duration()
          playerRef.current.seek(duration * newValue)
        }
      },
      200
    )

    const handleSliderChange = useCallback(debouncedSliderChange, [
      debouncedSliderChange,
    ])

    useImperativeHandle(ref, () => ({
      play,
      pause,
    }))

    if (!episode) return null

    return (
      <StyledIndexEpisodeCardContainer
        className={className}
        direction="row"
        alignItems="center"
        spacing={4}
        padding={2}
      >
        <StyledCoverImage
          src={episode.cover!}
          alt={episode.title!}
          width={200}
          height={200}
        />
        <Stack direction="column" flex={1} spacing={2}>
          <StyledTitle gutterBottom flex={1}>
            {episode.title}
          </StyledTitle>
          <StyledControlBarContainer
            direction="row"
            alignItems="center"
            spacing={2}
          >
            <UIconButton variant="contained" color="default" className="control-button" onClick={togglePlayPause}>
              {playing
                ? (
                  <Pause fontSize="large" />
                  )
                : (
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
