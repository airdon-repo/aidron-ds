import React from 'react';
import PropTypes from 'prop-types';

const Tab = ({
  children,
  selected,
  alias,
}) => (
  <div
    className={[
      'ragnarok',
      'tab',
      selected ? 'selected' : undefined,
      alias
    ].join(' ')}
  >
    {children && children}
  </div>
);

Tab.propTypes = {
  /**
   * Which content should it show?
   */
  children: PropTypes.node.isRequired,
  /**
   * Is it selected?
   */
  selected: PropTypes.bool,
};

Tab.defaultProps = {
  selected: false
};

export {
  Tab
};
