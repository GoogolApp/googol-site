import React from 'react'
import PropTypes from 'prop-types'

const Person = ({ picture, name, job }) => {
  return (
    <div className="pa4 tc">
      <img className="br-100" width={200} src={picture} alt={name} />
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
