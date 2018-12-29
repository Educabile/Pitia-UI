import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

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
    <div className="collapsible-body" style={{ pointerEvents: disableContent ? 'none' : 'unset' }}>
      {children}
    </div>
  </li>
)

CollapsibleItem.propTypes = {
  header: PropTypes.any.isRequired,
  hideHeader: PropTypes.bool.isRequired,
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
  /**
   * The scroll behavior for scrollIntoView
   */
  scroll: PropTypes.oneOf(['auto', 'instant', 'smooth']),
}

CollapsibleItem.defaultProps = {
  expanded: false,
  node: 'div',
  hideHeader: false,
}

export default CollapsibleItem
