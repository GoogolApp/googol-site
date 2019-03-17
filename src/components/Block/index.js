import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const Block = ({ id, title, className, children, contentClasses }) => {
  const classes = classNames(className, 'flex flex-column pa5')
  return (
    <section id={id} className={classes}>
      <h1 className="tc pb3">{title}</h1>
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
