import React from 'react';
import PropTypes from 'prop-types';

const Caption = ({
  allcaps,
  children,
  className
}) => (
  <span
    data-testid="caption"
    allcaps={allcaps ? 1 : 0}
    className={['ragnarok', 'caption', className, allcaps ? 'text-decoration-allcaps' : ''].join(' ')}
  >
    {children}
  </span>
  );

Caption.propTypes = {
  /**
   * Should it be uppercase?
   */
  allcaps: PropTypes.bool,
};

Caption.defaultProps = {
  allcaps: undefined,
};

export {
  Caption
};
