import React, { useEffect, useState } from 'react'
import { throttle } from 'lodash'

const ReadingProgress = ({ height }) => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight
      const scrolled = (winScroll / height) * 100
      setProgress(scrolled)
    }
    const throttled = throttle(handleScroll, 10)
    window.addEventListener('scroll', throttled)
    return () => window.removeEventListener('scroll', throttled)
  }, [])

  return (
    <div
      style={{ height: `${height}rem` }}
      className="bg-black w-100 absolute top-0 left-0"
    >
      <div
        className="bg-white"
        style={{ width: `${progress}%`, height: `${height}rem` }}
      />
    </div>
  )
}

export default ReadingProgress
