import React from 'react';
import PropTypes from 'prop-types';

import { Button } from '../Button';

const Dialog = ({
  children,
  actions,
  overlay,
  width,
  open
}) => (
  <div
    className={['ragnarok', 'dialog-wrapper', open ? 'open' : 'close'].join(' ')}
  >
    {overlay && (
      <div
        data-testid="overlay"
        className={['ragnarok', 'overlay'].join(' ')}
      />
    )}
    <div
      data-testid="dialog"
      className={['ragnarok', 'dialog'].join(' ')}
      style={{ width }}
    >
      {children}
      {actions.length > 0 && (
        <div className="actions">
          {actions}
        </div>
      )}
    </div>
  </div>
);

Dialog.propTypes = {
  /**
   * Dialog contents
   */
  children: PropTypes.node.isRequired,
  /**
   * Dialog contents
   */
  actions: PropTypes.arrayOf(Button),
  /**
   * An overlay should de shown?
   */
  overlay: PropTypes.bool,
  /**
   * Dialog's width
   */
  width: PropTypes.string,
  /**
   * Show/hide handler
   */
  open: PropTypes.bool,
};

Dialog.defaultProps = {
  actions: [],
  overlay: false,
  width: '410px',
  open: false
};

export {
  Dialog
};
