import React from 'react';
import PropTypes from 'prop-types';

const Badge = ({
  children,
  variant,
  disabled,
  size,
  ...args
}) => (
  <span
    data-testid="badge"
    className={[
      'ragnarok',
      'badge',
      size,
      disabled ? 'disabled' : undefined,
      variant
    ].join(' ')}
    {...args}
  >
    {children}
  </span>
);

Badge.propTypes = {
  /**
   * Which content should it show?
   */
  children: PropTypes.node.isRequired,
  /**
   * How big should it be
   */
  size: PropTypes.oneOf(['md', 'sm']),
  /**
   * Which variant should it be
   */
  variant: PropTypes.oneOf(['danger', 'warning', 'success', 'information', 'disabled']).isRequired
};

Badge.defaultProps = {
  size: 'md'
};

export {
  Badge
};
