import React from 'react';
import PropTypes from 'prop-types';

const GridSidebar = ({ children, ...args }) => (
  <div className="grid-sidebar" {...args}>{children}</div>
);

GridSidebar.propTypes = {
  /**
   * Sidebar contents
   */
  children: PropTypes.any,
};

GridSidebar.defaultProps = {
  children: [],
};

export { GridSidebar };
