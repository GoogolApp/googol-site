import React from 'react'
import PropTypes from 'prop-types'

import ParallaxImage from './ParallaxImage'

const Person = ({ picture, name, job }) => {
  return (
    <div className="pa4 tc">
      <ParallaxImage
        size={180}
        className="br-100"
        preset="fadeIn"
        src={picture}
        alt={name}
      />
      <h4 className="f4 lh-copy">{name}</h4>
      <h5 className="f5 lh-copy">{job}</h5>
    </div>
  )
}

Person.propTypes = {
  picture: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  job: PropTypes.string.isRequired,
}

export default Person
