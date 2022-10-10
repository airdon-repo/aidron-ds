import React from 'react';
import PropTypes from 'prop-types';

import { Icon } from '../Icon';

const NavBrand = ({
  backLabel,
  home,
  onBackClick,
  brandName,
  children
}) => {
  if (!home) {
    return (
      <button
        type="button"
        onClick={() => onBackClick()}
        className={[
          'ragnarok',
          'back'
        ].join(' ')}
      >
        <Icon
          icon="arrow-left"
        />
        {backLabel}
      </button>
    );
  }
  return (
    <a
      href="/"
      alt={brandName}
      title={brandName}
      data-testid="navbrand"
      className={[
        'ragnarok',
        'navbrand',
        home ? 'home' : 'inner',
      ].join(' ')}
    >
      {children && children}
    </a>
  );
};

NavBrand.propTypes = {
  /**
   * Label for the back button
   */
  backLabel: PropTypes.string,
  /**
   * Brand Name to show
   */
  brandName: PropTypes.string,
  /**
   * Is the page located at home?
   */
  home: PropTypes.bool,
  /**
   * Optional Back Click Handler?
   */
   onBackClick: PropTypes.func,
};

NavBrand.defaultProps = {
  backLabel: 'Back',
  brandName: '',
  home: true,
  onBackClick: () => {}
};

export {
  NavBrand
};
