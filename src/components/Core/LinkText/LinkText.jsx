import React from 'react';
import PropTypes from 'prop-types';

const LinkText = ({
  to,
  size,
  color,
  allcaps,
  label,
  children,
  className,
  target
}) => (
  <a
    data-testid="link"
    href={to}
    target={target}
    className={[
      'ragnarok',
      'link',
      `text-link-${size}`,
      color,
      allcaps ? 'text-decoration-allcaps' : '',
      className
    ].join(' ')}
  >
    {children || label}
  </a>
  );

LinkText.propTypes = {
  /**
   * How big should the text be?
   */
  size: PropTypes.oneOf(['xxs', 'xs', 'sm']),
  /**
   * Where should this link lead to?
   */
  to: PropTypes.string.isRequired,
  /**
   * Which color should it be?
   */
  color: PropTypes.oneOf(['color-primary-medium', 'color-primary-light', 'color-primary-lightest']),
  /**
   * Should it be uppercase?
   */
  allcaps: PropTypes.bool,
  /**
   * Which Behaviour?
   */
  target: PropTypes.oneOf(['_self', '_blank']),
  /**
   * Heading contents
   */
  label: PropTypes.string,
};

LinkText.defaultProps = {
  size: 'sm',
  color: 'color-primary-medium',
  allcaps: false,
  target: '_self',
  label: 'Lorem Ipsum Dolor Sit Amet',
};

export {
  LinkText
};
