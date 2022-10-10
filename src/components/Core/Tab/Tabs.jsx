import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Tab } from './Tab';
import { TabHeader } from './TabHeader';
import { TabContent } from './TabContent';

const Tabs = ({
  children,
  selected,
  ...args
}) => {
  const [which, setWhich] = useState(selected);
  useEffect(() => {
    setWhich(selected);
  }, [selected]);
  const TabElements = {
    headers: children && children.map((child, idx) => {
      if (React.isValidElement(child) && child.type === Tab) {
        return child?.props?.children.map((navTab) => {
            if (React.isValidElement(navTab) && navTab.type === TabHeader) {
              return React.cloneElement(navTab, {
                key: `headerkey${idx.toString()}`,
                index: `header${idx.toString()}`,
                selected: child.props.alias === which,
                alias: child?.props?.alias,
                disabled: child?.props?.disabled,
                onClick: setWhich
              });
            }
            return false;
          }).filter(Boolean);
      }
      return false;
    }).filter(Boolean).flat(),
    contents: children && children.map((child, index) => {
      if (React.isValidElement(child) && child.type === Tab) {
        return child?.props?.children.map((contTab) => {
            if (React.isValidElement(contTab) && contTab.type === TabContent) {
              return React.cloneElement(contTab, {
                key: `contentkey${index.toString()}`,
                index: `content${index.toString()}`,
                selected: child.props.alias === which,
                alias: child?.props?.alias
              });
            }
            return false;
          }).filter(Boolean);
      }
      return false;
    }).filter(Boolean).flat()
  };
  return (
    <div
      data-testid="tabs"
      role="tablist"
      className={[
        'ragnarok',
        'tabs',
      ].join(' ')}
      {...args}
    >
      {TabElements?.headers && (
        <div
          data-testid="tabs-controller"
          className={[
            'ragnarok',
            'tabs-controller',
          ].join(' ')}
        >
          {TabElements.headers.map((el) => el)}
        </div>
      )}
      {TabElements?.contents && (
        <div
          data-testid="tabs-inner"
          className={[
            'ragnarok',
            'tabs-inner',
          ].join(' ')}
        >
          {TabElements.contents.map((el) => el)}
        </div>
      )}
    </div>
  );
};

Tabs.propTypes = {
  /**
   * Which content should it show?
   */
  children: PropTypes.node.isRequired,
  /**
   * Default content to be shown
   */
  selected: PropTypes.string
};

Tabs.defaultProps = {
  selected: ''
};

export {
  Tabs
};
