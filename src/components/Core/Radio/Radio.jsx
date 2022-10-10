import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { RadioOption } from './RadioOption';

const Radio = ({
  disabled,
  selected,
  label,
  children,
  vertical = false,
  handleChange,
  className
}) => {
  const [selectedValue, setSelectedValue] = useState(selected);

  useEffect(() => {
    handleChange(selectedValue);
  }, [selectedValue]);

  useEffect(() => {
    setSelectedValue(selected);
  }, [selected]);

  const PropedChildren = children && children.map((child, idx) => {
    let subChildren;
    if (React.isValidElement(child) && child.type !== RadioOption) {
      if (!Array.isArray(child.props.children)) {
        if (child.props.children.type === RadioOption) {
          subChildren = React.cloneElement(child.props.children, {
            key: idx.toString(),
            disabled,
            label,
            onClick: setSelectedValue,
            selected: selectedValue === child.props.children.props.value
          });
        } else {
          subChildren = child.props.children;
        }
      } else if (Array.isArray(child.props.children)) {
        subChildren = child.props.children.map((subChild, i) => {
          if (subChild.type === RadioOption) {
            return (
              React.cloneElement(subChild, {
                key: `sub-${i.toString()}`,
                disabled,
                label,
                onClick: setSelectedValue,
                selected: selectedValue === subChild.props.value
              })
            );
          }
          return subChild;
        });
      } else {
        subChildren = child.props.children;
      }
      return React.cloneElement(child, {
        key: `sub-${idx.toString()}`,
        children: subChildren,
      });
    }
    if (React.isValidElement(child) && child.type === RadioOption) {
      return React.cloneElement(child, {
        key: idx.toString(),
        disabled,
        label,
        onClick: setSelectedValue,
        selected: selectedValue === child.props.value
      });
    }
    return child;
  });

  return (
    <div
      data-testid="radio"
      className={[
        'ragnarok',
        'radio',
        disabled ? 'disabled' : '',
        className
      ].join(' ')}
      style={vertical ? { flexDirection: 'column' } : {}}
    >
      {PropedChildren && PropedChildren}
    </div>
  );
};

Radio.propTypes = {
  /**
   * Should it be disabled?
   */
  disabled: PropTypes.bool,
  /**
   * Which item should be selected by default?
   */
  selected: PropTypes.string.isRequired,
  /**
   * Internal Identificator
   */
  label: PropTypes.string,
  /**
   * Should it be displayed vertically?
   */
  vertical: PropTypes.bool,
  /**
   * Optional change handler
   */
  handleChange: PropTypes.func,
};

Radio.defaultProps = {
  disabled: false,
  label: '',
  vertical: false,
  handleChange: undefined,
};

export {
  Radio
};
