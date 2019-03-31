import React from 'react'

import { useLaxElement } from '../hooks/useLax'
import ball from '../../static/ball.png'

const ParallaxBall = ({ size = 500 }) => {
  const ref = useLaxElement()
  return (
    <img
      ref={ref}
      width={size}
      height={size}
      data-lax-preset="linger"
      src={ball}
      style={{
        opacity: 0.1,
        position: 'absolute',
        left: '30%',
        right: 'auto',
      }}
      alt="Googol ball"
    />
  )
}

export default ParallaxBall
