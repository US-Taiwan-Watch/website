'use client'

import { memo, forwardRef, useImperativeHandle, useMemo } from 'react'
import { Typography, Slider, Stack, Grid2 as Grid } from '@mui/material'
import { PlayCircleRounded, Pause } from '@mui/icons-material'
import Image from 'next/image'
import {
  EpisodeCardProps as GeneralEpisodeCardProps,
  EpisodeCardRef,
} from '@/modules/Podcast/types/ComponentProp'
import { styled } from '@/common/lib/mui/theme'
import { usePlayerWithUI } from '@/modules/Podcast/hooks/usePlayer'
import UIconButton from '@/common/components/atoms/UIconButton'
import {
  BackwardIcon,
  ForwardIcon,
  NorthEastIcon,
} from '@/common/styles/assets/Icons'
import Link from 'next/link'
import UHeightLimitedText from '@/common/components/atoms/UHeightLimitedText'
import { useResponsive } from '@/common/lib/responsive/ResponsiveProvider'
import UHStack from '@/common/components/atoms/UHStack'
import EpisodeUtils from '@/modules/Podcast/business/Episode'

const StyledEpisodeCardContainer = styled(Stack)(({ theme }) => ({
  backgroundColor: theme.color.common.white,
  borderRadius: '10px',
  color: theme.color.common.black,
}))

const StyledCoverImage = styled(Image)(() => ({
  borderRadius: '5px',
  objectFit: 'cover',
}))

const StyledTitle = styled(UHeightLimitedText)(() => ({
  fontWeight: 700,
}))

const StyledDate = styled(Typography)(({ theme }) => ({
  fontWeight: 500,
  color: theme.color.neutral[500],
}))

const StyledDescription = styled(UHeightLimitedText)(() => ({
  fontWeight: 500,
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
  padding: '0px !important',
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

const StyledLinkIconButton = styled(UIconButton)(() => ({
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
    { className, episode, onPlay, onPause }: EpisodeCardProps,
    ref
  ) {
    const { isMobile, isTablet } = useResponsive()
    const size = useMemo(() => {
      if (isMobile || isTablet) return 'small'
      return 'large'
    }, [isMobile, isTablet])
    const {
      playing,
      progress,
      runningTime,
      togglePlayPause,
      handleSliderChange,
      handleBackwardClick,
      handleForwardClick,
    } = usePlayerWithUI({
      audioUrl: episode?.audioUrl,
      episode,
      onPlay,
      onPause,
    })

    useImperativeHandle(ref, () => ({
      togglePlayPause,
    }))

    const playerBar = useMemo(() => {
      if (size === 'small')
        return (
          <Stack gap={1}>
            <Stack
              width="100%"
              direction="row"
              spacing={1}
              alignItems="center"
              justifyContent="center"
            >
              <StyledSlider
                value={progress}
                max={1}
                min={0}
                step={0.01}
                onChange={handleSliderChange}
                aria-labelledby="continuous-slider"
              />
              <Typography variant="body2">{runningTime}</Typography>
            </Stack>
            <Stack
              width="100%"
              direction="row"
              spacing={1}
              alignItems="center"
              justifyContent="space-between"
            >
              <UHStack gap={1}>
                <UIconButton
                  className="skip-button"
                  variant="rounded"
                  color="default"
                  size={'small'}
                  sx={{
                    p: 0,
                    width: 'auto',
                    height: 'auto',
                    color: '#00000080',
                  }}
                  onClick={() => handleBackwardClick()}
                >
                  <BackwardIcon />
                </UIconButton>
                <UIconButton
                  className="skip-button"
                  variant="rounded"
                  color="default"
                  size={'small'}
                  sx={{
                    p: 0,
                    width: 'auto',
                    height: 'auto',
                    color: '#00000080',
                  }}
                  onClick={() => handleForwardClick()}
                >
                  <ForwardIcon />
                </UIconButton>
                <Link
                  href={EpisodeUtils.getSoundonLink(
                    episode.podcastId!,
                    episode.id!
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <StyledLinkIconButton
                    variant="rounded"
                    color="default"
                    size="small"
                    sx={{
                      color: '#00000080',
                    }}
                  >
                    <NorthEastIcon />
                  </StyledLinkIconButton>
                </Link>
              </UHStack>
              <UIconButton
                variant="contained"
                color="default"
                size={'large'}
                sx={{
                  p: 0,
                  width: 'auto',
                  height: 'auto',
                }}
                className="control-button"
                onClick={togglePlayPause}
              >
                {playing ? (
                  <Pause fontSize={'large'} />
                ) : (
                  <PlayCircleRounded fontSize={'large'} />
                )}
              </UIconButton>
            </Stack>
          </Stack>
        )

      return (
        <StyledControlBarContainer container columnSpacing={2} width="100%">
          <Grid
            size={{
              xs: 10,
              sm: 10.5,
            }}
            alignItems="center"
            justifyContent="center"
            display="flex"
          >
            <Stack
              width="100%"
              direction="row"
              spacing={1}
              alignItems="center"
              justifyContent="center"
            >
              <Stack
                direction="row"
                spacing={1}
                alignItems="center"
                justifyContent="center"
                flex={1}
              >
                <UIconButton
                  className="skip-button"
                  variant="rounded"
                  color="default"
                  size={'medium'}
                  onClick={() => handleBackwardClick()}
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
                  size={'medium'}
                  onClick={() => handleForwardClick()}
                >
                  <ForwardIcon />
                </UIconButton>
              </Stack>
              <Typography variant="body2">{runningTime}</Typography>
            </Stack>
          </Grid>
          <Grid
            size={{
              xs: 2,
              sm: 1.5,
            }}
            display="flex"
            alignItems="center"
            justifyContent="end"
          >
            <UIconButton
              variant="contained"
              color="default"
              size={'large'}
              className="control-button"
              onClick={togglePlayPause}
            >
              {playing ? (
                <Pause fontSize={'large'} />
              ) : (
                <PlayCircleRounded fontSize={'large'} />
              )}
            </UIconButton>
          </Grid>
        </StyledControlBarContainer>
      )
    }, [
      size,
      progress,
      handleSliderChange,
      runningTime,
      episode.podcastId,
      episode.id,
      togglePlayPause,
      playing,
      handleBackwardClick,
      handleForwardClick,
    ])

    if (!episode) return null

    return (
      <StyledEpisodeCardContainer
        p={2}
        gap={{
          xs: 1,
          md: 0,
        }}
      >
        <UHStack
          className={className}
          alignItems={{
            xs: 'flex-start',
            sm: 'center',
          }}
          gap={{
            xs: 1.5,
            md: 4,
          }}
        >
          <StyledCoverImage
            src={episode.cover!}
            alt={episode.title!}
            width={110}
            height={110}
            sx={{
              width: {
                xs: 48,
                md: 160,
              },
              height: {
                xs: 48,
                md: 160,
              },
            }}
          />
          <Stack direction="column" flex={1} spacing={1} overflow="hidden">
            <Grid
              container
              spacing={{
                xs: 0,
                md: 2,
              }}
              width="100%"
            >
              <Grid
                size={{
                  xs: 12,
                  md: 10.5,
                }}
              >
                {size === 'small' ? (
                  <StyledTitle
                    gutterBottom
                    flex={1}
                    marginBottom={0}
                    maxLine={2}
                    fontWeight={500}
                  >
                    {episode.title}
                  </StyledTitle>
                ) : (
                  <Stack direction="column" spacing={1}>
                    <Stack direction="column" spacing={0}>
                      <StyledTitle
                        variant="h6"
                        gutterBottom
                        flex={1}
                        marginBottom={0}
                        maxLine={1}
                      >
                        {episode.title}
                      </StyledTitle>
                      <StyledDate variant="body2">
                        {EpisodeUtils.getFormattedPublishDate(
                          episode.createdAt!
                        )}
                      </StyledDate>
                    </Stack>
                    <StyledDescription variant="body1" maxLine={3}>
                      {episode.description}
                    </StyledDescription>
                  </Stack>
                )}
              </Grid>
              {size === 'large' && (
                <Grid
                  size={{
                    xs: 0,
                    md: 1.5,
                  }}
                  display="flex"
                  alignItems="flex-start"
                  justifyContent="end"
                >
                  <Link
                    href={EpisodeUtils.getSoundonLink(
                      episode.podcastId!,
                      episode.id!
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <StyledLinkIconButton
                      variant="rounded"
                      color="default"
                      size="small"
                      sx={{
                        color: 'grey.400',
                      }}
                    >
                      <NorthEastIcon />
                    </StyledLinkIconButton>
                  </Link>
                </Grid>
              )}
            </Grid>
            {size === 'large' && playerBar}
          </Stack>
        </UHStack>
        {size === 'small' && (
          <>
            <StyledDescription
              fontSize="0.75rem"
              maxLine={3}
              color="neutral.500"
            >
              {episode.description}
            </StyledDescription>
            <StyledDate fontSize="0.75rem" color="#6A6A6A" fontWeight={500}>
              {EpisodeUtils.getFormattedPublishDate(episode.createdAt!)}
            </StyledDate>
          </>
        )}
        {size === 'small' && playerBar}
      </StyledEpisodeCardContainer>
    )
  })
)

export default EpisodeCard
