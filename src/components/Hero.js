import React from 'react'
import { useLaxElement } from '../hooks/useLax'
import brand from '../../static/header/brand.png'

const Hero = () => {
  const ref = useLaxElement()
  return (
    <div
      className="flex items-center justify-center bg-black"
      style={{
        backgroundImage: 'url(../../static/hero/bg.jpeg)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height: '50rem',
      }}
    >
      <img
        ref={ref}
        width={800}
        data-lax-preset="zoomOut"
        src={brand}
        alt="Googol brand"
      />
    </div>
  )
}

export default Hero
