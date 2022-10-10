import React from 'react';
import PropTypes from 'prop-types';

const Text = ({
  size,
  weight,
  label,
  allcaps,
  children,
  className
}) => (
  <p
    allcaps={allcaps ? 1 : 0}
    data-testid="text-body"
    className={[
      'ragnarok',
      'text',
      `text-body-${size}-${weight}`,
      className,
      allcaps ? 'text-decoration-allcaps' : ''].join(' ')}
  >
    {children || label}
  </p>
);

Text.propTypes = {
  /**
   * How big should the text be?
   */
  size: PropTypes.oneOf(['xxs', 'xs', 'sm']),
  /**
   * How the text should pop?
   */
  weight: PropTypes.oneOf(['bold', 'regular']),
  /**
   * Should it be uppercase?
   */
  allcaps: PropTypes.bool,
  /**
   * Heading contents
   */
  label: PropTypes.string,
};

Text.defaultProps = {
  size: 'sm',
  weight: 'regular',
  allcaps: false,
  label: 'Lorem Ipsum Dolor Sit Amet',
};

export {
  Text
};
