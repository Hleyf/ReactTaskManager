import React from 'react'
import { useStopwatch } from '../../hooks/useStopwatch'

export const InLineStopwatch: React.FC = () => {
  const { currentTime, isActive, start, pause } = useStopwatch()

  return (
    <div className='flex items-center'>
      <div>
      {isActive
        ? (
          <button onClick={pause}>⏸︎</button>
          )
        : (
          <button onClick={start}>⏵︎</button>
          )}
      </div>
      <div className='ml-4 flex items-center'>
        <p className="inline-block w-6 text-right">{currentTime.hours}</p>
        <span className='mx-1'> : </span>
        <p className="inline-block w-6 text-right">{currentTime.minutes}</p>
        <span className='mx-1'> : </span>
        <p className="inline-block w-4 text-right">{currentTime.seconds}</p>
      </div>
    </div>
  )
}
