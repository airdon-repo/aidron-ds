import React from 'react';
import PropTypes from 'prop-types';

const NavBar = ({
  home,
  backLabel,
  brandName,
  children
}) => (
  <nav
    backlabel={backLabel}
    brandname={brandName}
    data-testid="navbar"
    className={[
      'ragnarok',
      'navbar',
      home ? 'home' : 'inner',
    ].join(' ')}
  >
    {children && children}
  </nav>
);

NavBar.propTypes = {
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
};

NavBar.defaultProps = {
  backLabel: 'Back',
  brandName: '',
  home: true
};

export {
  NavBar
};
