import React from 'react';
import PropTypes from 'prop-types';
import { LinkText } from '../LinkText';

const BreadcrumbItem = ({
  children,
  path,
  active
}) => (
  <li
    className={[
      'ragnarok',
      'breadcrumb-item',
      active ? 'active' : undefined
    ].join(' ')}
  >
    {active && <span>{children}</span>}
    {!active && (
      <LinkText to={path} size="xxs">
        {children}
      </LinkText>
    )}
  </li>
);

const Breadcrumb = ({
  children,
}) => (
  <nav
    data-testid="breadcrumb"
    className={[
      'ragnarok',
      'breadcrumb',
    ].join(' ')}
  >
    <ol className="breadcrumb-wrapper no-m no-p">
      {children}
    </ol>
  </nav>
);

Breadcrumb.propTypes = {
  /**
   * Which content should it show?
   */
  children: PropTypes.node,
};

Breadcrumb.defaultProps = {
  children: <BreadcrumbItem path="#">Initial</BreadcrumbItem>
};

export {
  Breadcrumb,
  BreadcrumbItem
};
