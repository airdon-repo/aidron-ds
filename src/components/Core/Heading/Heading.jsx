import React from 'react';
import PropTypes from 'prop-types';

const Heading = ({
  size,
  allcaps,
  label,
  children,
  className
}) => {
  switch (size) {
    case 'display':
      return (
        <h1 data-testid="heading" className={['ragnarok', 'heading', 'text-display', allcaps ? 'text-decoration-allcaps' : '', className].join(' ')}>{children || label}</h1>
      );

    case 'xl':
      return (
        <h2 data-testid="heading" className={['ragnarok', 'heading', 'text-heading-xl', allcaps ? 'text-decoration-allcaps' : '', className].join(' ')}>{children || label}</h2>
      );

    case 'lg':
      return (
        <h3 data-testid="heading" className={['ragnarok', 'heading', 'text-heading-lg', allcaps ? 'text-decoration-allcaps' : '', className].join(' ')}>{children || label}</h3>
      );

    case 'md':
      return (
        <h4 data-testid="heading" className={['ragnarok', 'heading', 'text-heading-md', allcaps ? 'text-decoration-allcaps' : '', className].join(' ')}>{children || label}</h4>
      );

    case 'sm':
      return (
        <h4 data-testid="heading" className={['ragnarok', 'heading', 'text-heading-sm', allcaps ? 'text-decoration-allcaps' : '', className].join(' ')}>{children || label}</h4>
      );

    default:
      return (
        <h1 data-testid="heading" className={['ragnarok', 'heading', 'text-display', allcaps ? 'text-decoration-allcaps' : '', className].join(' ')}>{children || label}</h1>
      );
  }
};

Heading.propTypes = {
  /**
   * How big should the heading be?
   */
  size: PropTypes.oneOf(['display', 'xl', 'lg', 'md', 'sm']),
  /**
   * Should it be uppercase?
   */
  allcaps: PropTypes.bool,
  /**
   * Heading contents
   */
  label: PropTypes.string,
};

Heading.defaultProps = {
  size: 'display',
  allcaps: false,
  label: 'Lorem Ipsum Dolor Sit Amet',
};

export { Heading };
