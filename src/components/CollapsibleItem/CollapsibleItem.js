import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { Link } from 'react-router-dom'

const CollapsibleItem = ({
  className,
  eventKey,
  expanded,
  header,
  children,
  icon,
  node: Node,
  onSelect,
  hideHeader,
  disableHeader,
  disableContent,
  to,
  style,
  ...props
}) => (
  <li className={cx(className, { active: expanded })} {...props}>
    {!hideHeader && (
      <Node
        className={cx('collapsible-header', { active: expanded })}
        onClick={() => onSelect(eventKey)}
        style={{ pointerEvents: disableHeader ? 'none' : 'unset' }}>
        {icon}
        {header}
      </Node>
    )}
    {to ? (
      <Link
        to={to}
        className="collapsible-body"
        style={{ pointerEvents: disableContent ? 'none' : 'unset', ...style }}>
        <div>{children}</div>
      </Link>
    ) : (
      <div
        className="collapsible-body"
        style={{ pointerEvents: disableContent ? 'none' : 'unset', ...style }}>
        {children}
      </div>
    )}
  </li>
)

CollapsibleItem.propTypes = {
  header: PropTypes.any.isRequired,
  hideHeader: PropTypes.bool.isRequired,
  to: PropTypes.object,
  icon: PropTypes.string,
  iconClassName: PropTypes.string,
  children: PropTypes.node,
  onSelect: PropTypes.func,
  /**
   * If the item is expanded by default. Overridden if the parent Collapsible is an accordion.
   * @default false
   */
  expanded: PropTypes.bool,
  /**
   * The value to pass to the onSelect callback.
   */
  eventKey: PropTypes.any,
  className: PropTypes.string,
  /**
   * The node type of the header
   * @default a
   */
  node: PropTypes.node,
  style: PropTypes.object,
}

CollapsibleItem.defaultProps = {
  expanded: false,
  node: 'div',
  hideHeader: false,
  style: {
    paddingBottom: '3.07rem',
  },
}

export default CollapsibleItem
