import React from 'react';
import PropTypes from 'prop-types';

const RadioOption = ({
  key,
  value,
  selected,
  children,
  label,
  disabled,
  onClick,
  onChange,
  className
}) => (
  <label
    htmlFor={label}
    key={key}
    className={[
      'ragnarok',
      'radio-outer',
      className
    ].join(' ')}
  >
    <span
      role="radio"
      onClick={!(!disabled && onClick) ? undefined : () => onClick(value)}
      onKeyPress={!(!disabled && onClick) ? undefined : () => onClick(value)}
      tabIndex={key}
      aria-checked={selected}
      className={[
        'ragnarok',
        'radio-wrapper'
      ].join(' ')}
    >
      <input
        type="radio"
        name={label}
        id={key}
        checked={selected}
        disabled={disabled}
        onChange={(e) => onChange(e)}
        value={value}
        className={[
          'ragnarok',
          'radio-input',
          selected ? 'checked' : ''
        ].join(' ')}
      />
      <span className="radio-control" />
    </span>
    {children && <span className="radio-label">{children}</span>}
  </label>
);

RadioOption.propTypes = {
  /**
   * Should it be disabled?
   */
  disabled: PropTypes.bool,
  /**
   * Radio contents
   */
  label: PropTypes.string,
};

RadioOption.defaultProps = {
  disabled: false,
  label: '',
  // onChange: undefined,
};

export {
  RadioOption
};
