import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledGridItem = styled.div.attrs({ className: 'grid-item' })`
  min-height: 10px;
`;

const GridItem = (args) => {
  const sm = args?.size?.sm ? args.size.sm : 1;
  const md = args?.size?.md ? args.size.md : sm;
  const lg = args?.size?.lg ? args.size.lg : md;
  const xl = args?.size?.xl ? args.size.xl : lg;
  return (
    <StyledGridItem
      data-sm={sm}
      data-md={md}
      data-lg={lg}
      data-xl={xl}
      {...args}
    >
      {args.children}
    </StyledGridItem>
  );
};

GridItem.propTypes = {
  /**
   * How big should the GridItem be?
   */
  size: PropTypes.object,
  /**
   * GridItem contents
   */
  children: PropTypes.any,
};

GridItem.defaultProps = {
  size: { sm: 1 },
  children: []
};

export { GridItem };
