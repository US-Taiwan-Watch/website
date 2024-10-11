import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Howl } from 'howler'
import { EpisodeCardProps } from '@/modules/Podcast/types/ComponentProp'
import { debounce } from 'lodash-es'

export interface UsePlayerParams {
  audioUrl?: string
  onPlayCallback?: () => void
  onPauseCallback?: () => void
}

export default function usePlayer({
  audioUrl,
  onPlayCallback,
  onPauseCallback,
}: UsePlayerParams) {
  const [playing, setPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const playerRef = useRef<Howl | null>(null)
  const [remainingTime, setRemainingTime] = useState('0:00')

  const memoizedAudioUrl = useMemo(() => audioUrl, [audioUrl])
  const memoizedOnPlayCallback = useCallback(
    () => onPlayCallback?.(),
    [onPlayCallback]
  )
  const memoizedOnPauseCallback = useCallback(
    () => onPauseCallback?.(),
    [onPauseCallback]
  )

  useEffect(() => {
    if (memoizedAudioUrl) {
      playerRef.current = new Howl({
        src: [memoizedAudioUrl],
        html5: true,
        onplay: () => {
          setPlaying(true)
          memoizedOnPlayCallback?.()
        },
        onpause: () => {
          setPlaying(false)
          memoizedOnPauseCallback?.()
        },
        onstop: () => setPlaying(false),
      })
    }

    return () => {
      if (playerRef.current) {
        playerRef.current.unload()
      }
    }
  }, [memoizedAudioUrl, memoizedOnPauseCallback, memoizedOnPlayCallback])

  useEffect(() => {
    const updateProgress = () => {
      if (playerRef.current) {
        const seek = playerRef.current.seek() || 0
        const duration = playerRef.current.duration() || 0
        setProgress(seek / duration || 0)
        setRemainingTime(formatTime(duration - seek))
      }
    }

    const intervalId = setInterval(updateProgress, 1000)
    return () => clearInterval(intervalId)
  }, [playerRef])

  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = Math.floor(seconds % 60)
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`
  }

  const play = useCallback(() => {
    if (playerRef.current && !playing) {
      playerRef.current.play()
    }
  }, [playerRef, playing])

  const pause = useCallback(() => {
    if (playerRef.current && playing) {
      playerRef.current.pause()
    }
  }, [playerRef, playing])

  return {
    playerRef,
    playing,
    progress,
    remainingTime,
    play,
    pause,
  }
}

export interface UsePlayerWithUIParams
  extends Omit<UsePlayerParams, 'onPlayCallback' | 'onPauseCallback'>,
    EpisodeCardProps {}

// 加上 UI 控制組件的 usePlayer
export const usePlayerWithUI = ({
  audioUrl,
  episodeId,
  podcastId,
  onPlay,
  onPause,
}: UsePlayerWithUIParams) => {
  const memoizedAudioUrl = useMemo(() => audioUrl, [audioUrl])
  const memoizedOnPlay = useCallback(() => {
    onPlay?.({
      podcastId,
      episodeId,
    })
  }, [onPlay, podcastId, episodeId])

  const memoizedOnPause = useCallback(() => {
    onPause?.({
      podcastId,
      episodeId,
    })
  }, [onPause, podcastId, episodeId])

  const { playerRef, playing, progress, remainingTime, play, pause } =
    usePlayer({
      audioUrl: memoizedAudioUrl,
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

  const handleBackwardClick = (value: number = 15) => {
    if (playerRef.current) {
      playerRef.current.seek(Math.max(playerRef.current.seek() - value, 0))
    }
  }

  const handleForwardClick = (value: number = 15) => {
    if (playerRef.current) {
      playerRef.current.seek(
        Math.min(playerRef.current.seek() + value, playerRef.current.duration())
      )
    }
  }

  return {
    playerRef,
    playing,
    progress,
    remainingTime,
    togglePlayPause,
    handleSliderChange,
    handleBackwardClick,
    handleForwardClick,
  }
}
