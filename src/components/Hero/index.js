import React from 'react'
import './style.css'
import { useLaxElement } from '../../hooks/useLax'
import brand from '../../../static/header/brand.png'

const Hero = () => {
  const ref = useLaxElement()
  return (
    <div className="hero flex items-center justify-center bg-black">
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
