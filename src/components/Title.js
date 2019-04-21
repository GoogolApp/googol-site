import React from 'react'
import PropTypes from 'prop-types'

import { useLaxElement } from '../hooks/useLax'

const Title = ({ children, preset }) => {
  const ref = useLaxElement()
  return (
    <h1 className="tc pb3 f1 lh-title" ref={ref} data-lax-preset={preset}>
      {children}
    </h1>
  )
}

Title.defaultProps = {
  preset: 'eager fadeIn',
}

Title.propTypes = {
  preset: PropTypes.string,
}

export default Title
