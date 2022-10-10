import React from 'react';
import { render, screen } from '@testing-library/react';
import { Grid, GridItem } from '.';
import { Sidebar } from '../Sidebar';

test('Grid is rendered properly', () => {
  render(
    <Grid sidebar>
      <Sidebar onColapse={() => {}}>Sidebar</Sidebar>
      <GridItem
        size={{
          sm: 2,
          md: 2,
          lg: 3,
          xl: 3
        }}
      >
        Column
      </GridItem>
      <GridItem
        size={{
          sm: 2,
          md: 2,
          lg: 3,
          xl: 3
        }}
      >
        Column
      </GridItem>
      <GridItem
        size={{
          sm: 2,
          md: 2,
          lg: 3,
          xl: 3
        }}
      >
        Column
      </GridItem>
      <GridItem
        size={{
          sm: 2,
          md: 2,
          lg: 3,
          xl: 3
        }}
      >
        Column
      </GridItem>
    </Grid>
  );
  const gridNode = screen.getByTestId('grid');
  const gridItems = screen.getAllByText('Column');

  expect(gridNode).toBeInTheDocument();
  expect(gridNode).toHaveClass('grid-wrapper');
  // expect(gridNode.firstElementChild).toHaveClass('grid-sidebar');
  expect(gridItems).toHaveLength(4);
});
