import { useState, useEffect } from 'react'
import { type ITime, type IStopwatch } from '../types'

export function useStopwatch (): IStopwatch {
  const [time, setTime] = useState(0)
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    let interval: number = 0

    if (isActive) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime + 1)
      }, 1000)
    } else if (!isActive && time !== 0) {
      clearInterval(interval)
    }

    return () => { clearInterval(interval) }
  }, [isActive, time])

  const start = (): void => { setIsActive(true) }
  const pause = (): void => { setIsActive(false) }
  const reset = (): void => {
    setIsActive(false)
    setTime(0)
  }

  const seconds = (time % 60).toString().padStart(2, '0')
  const minutes = (Math.floor(time / 60) % 60).toString().padStart(2, '0')
  const hours = (Math.floor(time / 3600)).toString().padStart(2, '0')
  const currentTime: ITime = { hours, minutes, seconds }

  return { start, pause, reset, currentTime, isActive }
}
