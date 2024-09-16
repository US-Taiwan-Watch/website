'use client'

import { useEpisode } from '@/modules/Podcast/hooks/useEpisode'
import {
  memo,
  useCallback,
  forwardRef,
  useImperativeHandle,
  useMemo,
} from 'react'

import { Typography, Slider, Stack, Grid2 as Grid } from '@mui/material'
import { PlayCircleRounded, Pause, MoreHoriz } from '@mui/icons-material'
import Image from 'next/image'
import { debounce } from 'lodash-es'
import {
  EpisodeCardProps as GeneralEpisodeCardProps,
  EpisodeCardRef,
} from '@/modules/Podcast/types/ComponentProp'

import { styled } from '@/common/lib/mui/theme'
import usePlayer from '@/modules/Podcast/hooks/usePlayer'
import UIconButton from '@/common/components/atoms/UIconButton'
import {
  BackwardIcon,
  ForwardIcon,
  NorthEastIcon,
} from '@/common/styles/assets/Icons'
import Link from 'next/link'

const StyledEpisodeCardContainer = styled(Stack)(({ theme }) => ({
  backgroundColor: theme.color.common.white,
  borderRadius: '10px',
  color: theme.color.common.black,
}))

const StyledCoverImage = styled(Image)(() => ({
  borderRadius: '5px',
  width: '192px',
  height: '192px',
  objectFit: 'cover',
}))

const StyledTitle = styled(Typography)(() => ({
  fontWeight: 700,
  display: '-webkit-box',
  WebkitLineClamp: 1,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
}))

const StyledDate = styled(Typography)(({ theme }) => ({
  fontWeight: 500,
  color: theme.color.neutral[500],
}))

const StyledDescription = styled(Typography)(() => ({
  fontWeight: 500,
  display: '-webkit-box',
  WebkitLineClamp: 3,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
}))

const StyledControlBarContainer = styled(Grid)(({ theme }) => ({
  '& .control-button': {
    color: theme.color.common.black,
    padding: 0,
    width: '40px',
    height: '40px',
    '& svg': {
      width: '40px',
      height: '40px',
    },
  },
  '& .skip-button': {
    color: '#00000080',
    padding: 0,
  },
  '& .more-button': {
    padding: 0,
    marginBottom: `-${theme.spacing(1)}`,
  },
}))

const StyledSlider = styled(Slider)(({ theme }) => ({
  padding: '0px',
  color: theme.color.common.white,
  '& .MuiSlider-rail': {
    backgroundColor: '#0000004D',
  },
  '& .MuiSlider-track': {
    backgroundColor: theme.color.neutral[500],
    color: theme.color.neutral[500],
  },
  '& .MuiSlider-thumb': {
    display: 'none',
  },
}))

const StyledLinkIconButton = styled(UIconButton)(({ theme }) => ({
  color: theme.color.grey[400],
  padding: 0,
  '& svg': {
    width: '12px',
    height: '12px',
  },
}))

interface EpisodeCardProps extends GeneralEpisodeCardProps {
  className?: string
}

const EpisodeCard = memo(
  forwardRef<EpisodeCardRef, EpisodeCardProps>(function EpisodeCard(
    { className, podcastId, episodeId, onPlay, onPause }: EpisodeCardProps,
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

    const { playerRef, playing, progress, remainingTime, play, pause } =
      usePlayer({
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

    const handleBackwardClick = () => {
      if (playerRef.current) {
        playerRef.current.seek(
          playerRef.current.seek() - 15 < 0 ? 0 : playerRef.current.seek() - 15
        )
      }
    }

    const handleForwardClick = () => {
      if (playerRef.current) {
        playerRef.current.seek(
          playerRef.current.seek() + 15 > playerRef.current.duration()
            ? playerRef.current.duration()
            : playerRef.current.seek() + 15
        )
      }
    }

    useImperativeHandle(ref, () => ({
      play,
      pause,
    }))

    if (!episode) return null

    return (
      <StyledEpisodeCardContainer
        className={className}
        direction="row"
        alignItems="center"
        spacing={4}
        padding={2}
      >
        <StyledCoverImage
          src={episode.cover!}
          alt={episode.title!}
          width={110}
          height={110}
        />
        <Stack direction="column" flex={1} spacing={1} overflow="hidden">
          <Grid container columnSpacing={2} width="100%">
            <Grid size={10.5}>
              <Stack direction="column" spacing={1}>
                <Stack direction="column" spacing={0}>
                  <StyledTitle
                    variant="h6"
                    gutterBottom
                    flex={1}
                    marginBottom={0}
                  >
                    {episode.title}
                  </StyledTitle>
                  <StyledDate variant="body2">
                    {episode.formattedPublishDate}
                  </StyledDate>
                </Stack>
                <StyledDescription variant="body1">
                  {episode.description}
                </StyledDescription>
              </Stack>
            </Grid>
            <Grid
              size={1.5}
              display="flex"
              alignItems="flex-start"
              justifyContent="end"
            >
              {/** TODO: Add link to episode */}
              <Link href={'/#'}>
                <StyledLinkIconButton
                  variant="rounded"
                  color="default"
                  size="small"
                >
                  <NorthEastIcon />
                </StyledLinkIconButton>
              </Link>
            </Grid>
          </Grid>
          <StyledControlBarContainer container columnSpacing={2} width="100%">
            <Grid
              size={10.5}
              alignItems="center"
              justifyContent="center"
              display="flex"
            >
              <Stack
                width="100%"
                direction="row"
                spacing={1}
                alignItems="flex-end"
                justifyContent="center"
              >
                <Stack
                  direction="row"
                  spacing={1}
                  alignItems="flex-end"
                  justifyContent="center"
                  flex={1}
                >
                  <UIconButton
                    className="skip-button"
                    variant="rounded"
                    color="default"
                    size="medium"
                    onClick={handleBackwardClick}
                  >
                    <BackwardIcon />
                  </UIconButton>
                  <StyledSlider
                    value={progress}
                    max={1}
                    min={0}
                    step={0.01}
                    onChange={handleSliderChange}
                    aria-labelledby="continuous-slider"
                  />
                  <UIconButton
                    className="skip-button"
                    variant="rounded"
                    color="default"
                    size="medium"
                    onClick={handleForwardClick}
                  >
                    <ForwardIcon />
                  </UIconButton>
                </Stack>
                <Typography variant="body2">{remainingTime}</Typography>
                <UIconButton
                  className="more-button"
                  variant="rounded"
                  color="default"
                  size="medium"
                >
                  <MoreHoriz />
                </UIconButton>
              </Stack>
            </Grid>
            <Grid
              size={1.5}
              display="flex"
              alignItems="center"
              justifyContent="end"
            >
              <UIconButton
                variant="contained"
                color="default"
                size="large"
                className="control-button"
                onClick={togglePlayPause}
              >
                {playing ? (
                  <Pause fontSize="large" />
                ) : (
                  <PlayCircleRounded fontSize="large" />
                )}
              </UIconButton>
            </Grid>
          </StyledControlBarContainer>
        </Stack>
      </StyledEpisodeCardContainer>
    )
  })
)

export default EpisodeCard
