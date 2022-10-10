import React from 'react';
import PropTypes from 'prop-types';

const Flex = (args) => (
  <div className="flex flex-system flex-wrapper" {...args}>{args.children}</div>
  );

Flex.propTypes = {
  /**
   * Sidebar available?
   */
  sidebar: PropTypes.bool,
  /**
   * Heading contents
   */
  children: PropTypes.array.isRequired,
};

Flex.defaultProps = {
  sidebar: false
};

export { Flex };
