import React from 'react';
import PropTypes from 'prop-types';

const TabContent = ({
  children,
  selected,
}) => (
  <div
    role="presentation"
    className={[
      'ragnarok',
      'tab-content',
      selected ? 'selected' : undefined,
    ].join(' ')}
  >
    {children && children}
  </div>
);

TabContent.propTypes = {
  /**
   * Which content should it show?
   */
  children: PropTypes.node.isRequired,
  /**
   * Is it selected?
   */
  selected: PropTypes.bool,
};

TabContent.defaultProps = {
  selected: false,
};

export {
  TabContent
};
