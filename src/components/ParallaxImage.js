import React from 'react'
import PropTypes from 'prop-types'

import { useLaxElement } from '../hooks/useLax'

const ParallaxImage = ({ size, preset, ...props }) => {
  const ref = useLaxElement()
  return (
    <img
      ref={ref}
      width={size}
      height={size}
      {...props}
      data-lax-preset={preset}
    />
  )
}

ParallaxImage.defaultProps = {}

ParallaxImage.propTypes = {
  /** Lax preset */
  preset: PropTypes.string.isRequired,
  /** Image size in px */
  size: PropTypes.number,
}

export default ParallaxImage
