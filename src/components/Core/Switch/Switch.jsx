import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const Switch = ({
  value,
  children,
  disabled,
  handleChange
}) => {
  const [checkedValue, setCheckedValue] = useState(value);
  useEffect(() => {
    handleChange(checkedValue);
  }, [checkedValue]);
  useEffect(() => {
    setCheckedValue(value);
  }, [value]);
  return (
    <div
      className={[
        'ragnarok',
        'switch-outer',
        disabled ? 'disabled' : undefined
      ].join(' ')}
    >
      {children && <span id={`switch-label-${children.replace(' ', '-')}`} className="switch-label">{children}</span>}
      <label
        htmlFor="switch-input"
        data-testid="switch"
        className={[
          'ragnarok',
          'switch',
          disabled ? 'disabled' : undefined
        ].join(' ')}
      >
        <input
          data-testid="switch-input"
          type="checkbox"
          name="switch-input"
          checked={checkedValue}
          disabled={disabled}
          hidden
          onChange={(e) => handleChange(e.target.value)}
          value={checkedValue}
          className={[
            'ragnarok',
            'switch-input',
            disabled ? 'disabled' : undefined,
            !checkedValue ? '' : 'checked'
          ].join(' ')}
        />
        <span
          className={[
            'switch-hit',
            disabled ? 'disabled' : undefined,
          ].join(' ')}
          role="switch"
          tabIndex="-1"
          aria-labelledby={`switch-label-${children.replace(' ', '-')}`}
          aria-checked={checkedValue}
          onClick={!disabled ? () => setCheckedValue(!checkedValue) : undefined}
          onKeyPress={!disabled ? () => setCheckedValue(!checkedValue) : undefined}
        />
      </label>
    </div>
  );
};

Switch.propTypes = {
  /**
   * Initial value
   */
  value: PropTypes.bool,
   /**
   * Should it be disabled?
   */
  disabled: PropTypes.bool,
  /**
   * OnChange handler
   */
  handleChange: PropTypes.func,
};

Switch.defaultProps = {
  disabled: false,
  value: false,
  handleChange: undefined,
};

export {
  Switch
};
