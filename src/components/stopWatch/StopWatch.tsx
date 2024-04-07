import React from 'react'
import { useStopwatch } from '../../hooks/useStopwatch'

export const Stopwatch: React.FC = () => {
  const { currentTime, start, pause, reset } = useStopwatch()

  return (
    <div>
      <p>{currentTime.hours} : {currentTime.minutes} : {currentTime.seconds}</p>
      <button onClick={start}>Start</button>
      <button onClick={pause}>Pause</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}
