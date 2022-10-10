import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '../Icon';

const ListItem = ({
  children,
  active,
  trailingIcon,
  onClick,
  onRightClick,
  id,
  className
}) => (
  <li
    role="menuitem"
    key={id}
    id={id}
    tabIndex={-1}
    onClick={onClick}
    onKeyPress={onClick}
    className={[
      'ragnarok',
      'list-item',
      active ? 'active' : undefined,
      className
    ].join(' ')}
    style={onClick ? { cursor: 'pointer' } : {}}
  >
    {children}
    {trailingIcon && (
      <span
        role="button"
        tabIndex={0}
        className="trailing-icon"
        onClick={onRightClick}
        onKeyPress={onRightClick}
        style={onRightClick ? { cursor: 'pointer' } : {}}
      >
        <Icon icon="chevron-right" />
      </span>
    )}
  </li>
  );

const List = ({
  children,
  active,
  width,
  vertical,
  ...args
}) => {
  const PropedChildren = Array.isArray(children)
    ? children && children.map((child, idx) => {
        if (React.isValidElement(child) && child.type === ListItem) {
          return React.cloneElement(child, {
            key: idx.toString(),
            id: idx.toString(),
            active: active === idx.toString(),
          });
        }
        return child;
      })
    : children && React.isValidElement(children) && children.type === ListItem && (
      React.cloneElement(children, {
        id: '0',
        active: active === '0',
      })
    );
  return (
    <ul
      data-testid="list"
      role="menu"
      className={['ragnarok', 'list', args.className].join(' ')}
      style={{ width, flexDirection: vertical ? 'column' : 'row' }}
    >
      {PropedChildren}
    </ul>
  );
};

List.propTypes = {
  /**
   * List contents
   */
  children: PropTypes.node.isRequired,
  /**
   * Which item should be active by default?
   */
  active: PropTypes.string,
  /**
   * List width
   */
  width: PropTypes.string,
  /**
   * Should it show as vertical?
   */
  vertical: PropTypes.bool,
};

ListItem.propTypes = {
  /**
   * List contents
   */
  children: PropTypes.node.isRequired,
  /**
   * Optional active state
   */
  active: PropTypes.bool,
  /**
   * Should it show a trailing icon?
   */
  trailingIcon: PropTypes.oneOf([false, 'chevron-right', 'edit', 'more-vertical']),
  /**
   * Optional right click handler
   */
  onRightClick: PropTypes.func
};

List.defaultProps = {
  width: '100%',
  vertical: true,
  active: undefined
};

ListItem.defaultProps = {
  active: false,
  trailingIcon: false,
  onRightClick: undefined
};

export {
  List,
  ListItem
};
