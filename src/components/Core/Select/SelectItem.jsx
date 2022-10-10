import React from 'react';
import PropTypes from 'prop-types';

import { Icon } from '../Icon';

const SelectItem = ({
  value,
  children,
  selected,
  onSelect,
  ...args
}) => (
  <button
    type="button"
    key={value.toString()}
    className={[
      'ragnarok',
      'menu-select-item',
      selected ? 'selected-item' : ''
    ].join(' ')}
    onClick={() => onSelect(value)}
    {...args}
  >
    <span>
      <Icon
        icon="check"
      />
    </span>
    <span className="button-content">{children}</span>
  </button>
);

SelectItem.propTypes = {
  /**
   * Function to select item
   */
  onSelect: PropTypes.func,
  /**
   * Which iten is selected?
   */
  selected: PropTypes.bool,
  /**
   * Option contents
   */
  children: PropTypes.any,
};

SelectItem.defaultProps = {
  children: '',
  selected: false,
  onSelect: undefined
};

export {
  SelectItem
};
