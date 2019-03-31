import React from 'react'
import PropTypes from 'prop-types'

import { useLaxElement } from '../hooks/useLax'

const Person = ({ picture, name, job }) => {
  const ref = useLaxElement()
  return (
    <div className="pa4 tc">
      <img
        ref={ref}
        data-lax-preset="eager"
        className="br-100"
        width={200}
        src={picture}
        alt={name}
      />
      <h4>{name}</h4>
      <h5>{job}</h5>
    </div>
  )
}

Person.propTypes = {
  picture: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  job: PropTypes.string.isRequired,
}

export default Person
