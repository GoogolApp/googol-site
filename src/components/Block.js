import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Title from './Title'

const Block = ({ id, title, className, children, contentClasses }) => {
  const classes = classNames(className, 'flex flex-column pa5 pb7')
  return (
    <section id={id} className={classes}>
      <Title>{title}</Title>
      <div className={contentClasses}>{children}</div>
    </section>
  )
}

Block.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  contentClasses: PropTypes.string,
  className: PropTypes.string,
}

export default Block
