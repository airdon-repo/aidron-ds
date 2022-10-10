import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from '../Button';

const Snackbar = ({
  children,
  isOpen,
  action,
  onColapse,
  display,
  timeoutMs,
  variant,
}) => {
  const [show, setShow] = useState(isOpen);
  if (timeoutMs) {
    setTimeout(() => {
      setShow(false);
    }, timeoutMs);
  }

  useEffect(() => {
    setShow(isOpen);
  }, [isOpen]);

  return (
    <div
      data-testid="snackbar"
      className={[
        'ragnarok',
        'snackbar',
        show ? 'open' : 'close',
        display ? 'row' : '',
        variant,
      ].join(' ')}
    >
      <div>{children && children}</div>
      {action && (
        <div className={display ? 'end' : ''}>
          <Button
            id="colapse"
            size="sm"
            label=""
            onClick={() => {
              onColapse(!isOpen);
            }}
            type="ghost"
            className="no-m"
          >
            {action}
          </Button>
        </div>
      )}
    </div>
  );
};

Snackbar.propTypes = {
  /**
   * Snackbar content
   */
  children: PropTypes.node.isRequired,
  /**
   * Open or close state
   */
  isOpen: PropTypes.bool,
  /**
   * Text state for button
   */
  action: PropTypes.node,
  /**
   * Open/Close handler
   */
  onColapse: PropTypes.func,
  /**
   * Double row in content
   */
  display: PropTypes.bool,
  /**
   * Time for it close in ms
   */
  timeoutMs: PropTypes.number,
  /**
   * Which variant should it be
   */
  variant: PropTypes.oneOf(['danger', 'warning', 'success', 'information']),
};

Snackbar.defaultProps = {
  isOpen: false,
  display: false,
  action: null,
  onColapse: undefined,
  timeoutMs: undefined,
  variant: null,
};

export { Snackbar };
