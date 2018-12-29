import React from 'react'
import cx from 'class-names'
import PropTypes from 'prop-types'

const CardTitle = ({ children, className, reveal, closeReveal, style }) => (
  <span
    className={cx(
      'card-title',
      {
        activator: reveal,
      },
      className
    )}
    style={style}>
    {children}
    {reveal && <i className="material-icons right">more_vert</i>}
    {closeReveal && <i className="material-icons right">close</i>}
  </span>
)

CardTitle.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
  reveal: PropTypes.bool,
  closeReveal: PropTypes.bool,
}

export default CardTitle
