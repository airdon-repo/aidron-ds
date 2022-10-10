import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Icon } from '../Icon';

const Check = ({
  value,
  children,
  disabled,
  two,
  handleChange
}) => {
  const [checkedValue, setCheckedValue] = useState(value);
  const handleCheckValue = () => {
    if (!two) {
      if (checkedValue === '0') {
        setCheckedValue('1');
      }
      if (checkedValue === '1') {
        setCheckedValue('2');
      }
      if (checkedValue === '2') {
        setCheckedValue('0');
      }
      if (handleChange) handleChange(checkedValue);
    } else {
      if (checkedValue === '0') {
        setCheckedValue('1');
      }
      if (checkedValue === '1') {
        setCheckedValue('0');
      }
      if (handleChange) handleChange(checkedValue);
    }
  };

  useEffect(() => {
    setCheckedValue(value);
  }, [value]);

  return (
    <label
      htmlFor="check-input"
      data-testid="check"
      className={[
        'ragnarok',
        'check',
        'check-outer'
      ].join(' ')}
    >
      <span
        role="checkbox"
        tabIndex="-1"
        aria-labelledby={`check-label-${children ? children.replace(' ', '-') : ''}`}
        aria-checked={checkedValue === '0' ? 0 : 1}
        onClick={disabled ? undefined : () => handleCheckValue()}
        onKeyPress={disabled ? undefined : () => handleCheckValue()}
        className={[
          'ragnarok',
          'check-wrapper',
          disabled ? 'disabled' : ''
        ].join(' ')}
      >
        <input
          data-testid="check-input"
          type="checkbox"
          name="check-input"
          checked={checkedValue === '0' ? 0 : 1}
          disabled={disabled}
          hidden
          readOnly
          // onChange={(e) => handleChange(e.target.value)}
          value={checkedValue}
          className={[
            'ragnarok',
            'check-input',
            checkedValue === '0' ? '' : 'checked'
          ].join(' ')}
        />
        <span className="check-control">
          {checkedValue === '1' && (
            <Icon
              icon="check"
              size={10}
              stroke={4}
            />
          )}
          {checkedValue === '2' && (
            <Icon
              icon="minus"
              size={10}
              stroke={4}
            />
          )}
        </span>
      </span>
      {children && <span id={`check-label-${children.replace(' ', '-')}`} className="check-label">{children}</span>}
    </label>
  );
};

Check.propTypes = {
  /**
   * Initial value
   */
  value: PropTypes.oneOf(['0', '1', '2']),
   /**
   * Should it be disabled?
   */
  disabled: PropTypes.bool,
  /**
   * Should it have a two step check instead of three?
   */
  two: PropTypes.bool,
  /**
   * OnChange handler
   */
  handleChange: PropTypes.func,
};

Check.defaultProps = {
  disabled: false,
  value: '0',
  two: false,
  handleChange: undefined,
};

export {
  Check
};
