import React from 'react';
import PropTypes from 'prop-types';

const TabHeader = ({
  index,
  children,
  selected,
  disabled,
  alias = index.toString(),
  onClick
}) => {
  const PropedChildren = typeof children === 'object' && children?.map((child) => {
    if (typeof child === 'string') {
      return <span>{child}</span>;
    }
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        disabled
      });
    }
    return child;
  });
  return (
    <button
      role="tab"
      type="button"
      tabIndex={index}
      onClick={!disabled ? () => onClick(alias) : undefined}
      onKeyPress={() => {}}
      className={[
        'ragnarok',
        'tab-header',
        disabled ? 'disabled' : undefined,
        selected ? 'selected' : undefined,
      ].join(' ')}
    >
      {PropedChildren || children}
    </button>
  );
};

TabHeader.propTypes = {
  /**
   * Which content should it show?
   */
  children: PropTypes.node.isRequired,
  /**
   * Is it selected?
   */
  selected: PropTypes.bool,
  /**
   * Should it be disabled?
   */
  disabled: PropTypes.bool,
  /**
   * Alias linking TabHeader with TabContent
   */
  alias: PropTypes.string,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

TabHeader.defaultProps = {
  selected: false,
  disabled: false,
  alias: '',
  onClick: () => {}
};

export {
  TabHeader
};
