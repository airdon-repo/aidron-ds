import React from 'react';
import PropTypes from 'prop-types';
import { GridItem } from './GridItem';

const Grid = ({
  sidebar,
  children,
}) => {
  const sidebarChildren = children && children.map((child, idx) => {
    if (React.isValidElement(child) && child.type !== GridItem) {
      return React.cloneElement(child, {
        key: idx.toString()
      });
    }
    return false;
  }).filter(Boolean);
  const itemsChildren = children && children.map((child, idx) => {
    if (React.isValidElement(child) && child.type === GridItem) {
      return React.cloneElement(child, {
        key: idx.toString()
      });
    }
    return false;
  }).filter(Boolean);
  return (
    <div
      data-testid="grid"
      className={`grid-wrapper ${sidebar ? 'with-sidebar' : ''}`}
    >
      {sidebar && sidebarChildren}
      <div className="grid-container">
        <div className={sidebar ? 'grid grid-system with-sidebar' : ' grid grid-system'}>
          {itemsChildren}
        </div>
      </div>
    </div>
  );
};

Grid.propTypes = {
  /**
   * Sidebar available?
   */
  sidebar: PropTypes.bool,
  /**
   * Grid contents
   */
  children: PropTypes.node.isRequired,
};

Grid.defaultProps = {
  sidebar: false,
};

export { Grid };
