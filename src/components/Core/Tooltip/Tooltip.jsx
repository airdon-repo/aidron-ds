import React from 'react';
import PropTypes from 'prop-types';

const Tooltip = ({
  children,
  direction,
  className
}) => (
  <span
    data-testid="tooltip"
    className={[
      'ragnarok',
      'tooltip-wrapper',
      'caption',
      direction,
      className
    ].join(' ')}
  >
    {children}
  </span>
  );

Tooltip.propTypes = {
  /**
   * Tooltip contents
   */
  children: PropTypes.node.isRequired,
  /**
   * Tooltip's position
   */
  direction: PropTypes.oneOf([
    'top',
    'bottom',
    'left',
    'right',
  ]),
};

Tooltip.defaultProps = {
  direction: 'bottom',
};

export {
  Tooltip
};
