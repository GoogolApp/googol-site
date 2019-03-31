import React from 'react'
import { useLaxElement } from '../hooks/useLax'

const Title = ({ children }) => {
  const ref = useLaxElement()
  return (
    <h1 className="tc pb3 f1 lh-title" ref={ref} data-lax-preset="eager">
      {children}
    </h1>
  )
}

export default Title
