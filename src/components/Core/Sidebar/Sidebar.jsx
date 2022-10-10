import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '../Button';

const Sidebar = ({
  children,
  open,
  onColapse
}) => (
  <div
    data-testid="sidebar"
    className={[
      'ragnarok',
      'sidebar',
      open ? 'open' : 'close',
    ].join(' ')}
  >
    <Button
      className="colapse"
      icon={open ? 'minimize' : 'maximize'}
      label=""
      onClick={() => onColapse(!open)}
      type="ghost"
    />
    {children}
  </div>
);

Sidebar.propTypes = {
  /**
   * Sidebar content
   */
  children: PropTypes.node.isRequired,
  /**
   * Open or close state
   */
  open: PropTypes.bool,
  /**
   * Open/Close handler
   */
  onColapse: PropTypes.func,
};

Sidebar.defaultProps = {
  open: true,
  onColapse: undefined
};

export {
  Sidebar
};
