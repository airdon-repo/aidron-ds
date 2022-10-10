import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Icon } from '../Icon';

const AccordionTrigger = ({
  value,
  open,
  onClick,
  children
}) => (
  <div
    onClick={open ? () => onClick(undefined) : () => onClick(value)}
    onKeyPress={() => onClick(value)}
    role="button"
    tabIndex={0}
    className={[
      'ragnarok',
      'accordion-trigger',
    ].join(' ')}
  >
    <span className="content">{children}</span>
    <Icon
      size={24}
      color="color-primary-medium"
      icon={open ? 'minus-square' : 'plus-square'}
    />
  </div>
);

const AccordionItem = ({
  value,
  open,
  // selected,
  children
}) => (
  <div
    className={[
      'ragnarok',
      'accordion-item',
      value,
      open ? 'open' : 'close'
    ].join(' ')}
  >
    {children}
  </div>
);

const Accordion = ({
  children,
  selected,
  className
}) => {
  const [value, setValue] = useState(selected);

  useEffect(() => {
    setValue(value);
  }, [selected]);

  const PropedChildren = children && children.map((child, idx) => {
    if (React.isValidElement(child)) {
      if (child.type === AccordionItem) {
        return React.cloneElement(child, {
          key: idx.toString(),
          open: value === child.props.value,
          selected: value,
          children: child.props.children.map((subChild, i) => {
            if (React.isValidElement(subChild)) {
              if (subChild.type === AccordionTrigger) {
                return React.cloneElement(subChild, {
                  key: i.toString(),
                  value: child.props.value,
                  open: value === child.props.value,
                  onClick: setValue
                });
              }
            }
            return React.cloneElement(subChild, {
              className: value === child.props.value ? 'open' : 'close'
            });
          })
        });
      }
      return child;
    }
    return child;
  });

  return (
    <div
      data-testid="accordion"
      className={['ragnarok', 'accordion', className].join(' ')}
    >
      {PropedChildren}
    </div>
  );
};

Accordion.propTypes = {
  /**
   * Which item should be selected by default?
   */
  selected: PropTypes.string,
};

Accordion.defaultProps = {
  selected: undefined,
};

export {
  Accordion,
  AccordionItem,
  AccordionTrigger
};
