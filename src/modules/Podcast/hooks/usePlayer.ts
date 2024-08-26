import { useCallback, useEffect, useRef, useState } from 'react'
import { Howl } from 'howler'

export interface UsePlayerParams {
  audioUrl?: string
  onPlayCallback?: () => void
  onPauseCallback?: () => void
}

export default function usePlayer (
  {
    audioUrl,
    onPlayCallback,
    onPauseCallback,
  }: UsePlayerParams
) {
  const [playing, setPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const playerRef = useRef<Howl | null>(null)
  const [remainingTime, setRemainingTime] = useState('0:00')

  useEffect(() => {
    if (audioUrl) {
      playerRef.current = new Howl({
        src: [audioUrl],
        html5: true,
        onplay: () => {
          setPlaying(true)
          onPlayCallback?.()
        },
        onpause: () => {
          setPlaying(false)
          onPauseCallback?.()
        },
        onstop: () => setPlaying(false),
      })
    }

    return () => {
      if (playerRef.current) {
        playerRef.current.unload()
      }
    }
  }, [audioUrl, onPlayCallback, onPauseCallback])

  useEffect(() => {
    const updateProgress = () => {
      if (playerRef.current) {
        const seek = playerRef.current.seek() || 0
        const duration = playerRef.current.duration() || 0
        setProgress((seek / duration) || 0)
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
