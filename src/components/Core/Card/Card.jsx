import React from 'react';
import PropTypes from 'prop-types';

const Card = ({
  children,
  ...args
}) => (
  <div
    data-testid="card"
    className={['ragnarok', 'card'].join(' ')}
    {...args}
  >
    {children}
  </div>
  );

Card.propTypes = {
  /**
   * Card contents
   */
  children: PropTypes.node,
};

Card.defaultProps = {
  children: 'Lorem Ipsum Dolor Sit Amet'
};

export {
  Card
};
