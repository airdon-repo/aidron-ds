/* eslint-disable import/no-anonymous-default-export */
import React from 'react';

import { Grid } from './Grid';
import { GridItem } from './GridItem';
import { Sidebar } from '../Sidebar';

export default {
  title: 'Core/Grid',
  component: Grid,
};

const Template = (args) => (
  <Grid
    {...args}
  >
    <Sidebar onColapse={() => {}}>Sidebar</Sidebar>
    <GridItem
      className="red-medium spacing-inset-md"
      size={{
        sm: 2, md: 2, lg: 3, xl: 3
      }}
    >
      Column 1
    </GridItem>
    <GridItem
      className="blue-medium spacing-inset-md"
      size={{
        sm: 2, md: 2, lg: 3, xl: 3
      }}
    >
      Column 2
    </GridItem>
    <GridItem
      className="green-medium spacing-inset-md"
      size={{
        sm: 2, md: 2, lg: 3, xl: 3
      }}
    >
      Column 3
    </GridItem>
    <GridItem
      className="yellow-medium spacing-inset-md"
      size={{
        sm: 2, md: 2, lg: 3, xl: 3
      }}
    >
      Column 4
    </GridItem>
  </Grid>
);

export const WithSidebar = Template.bind({});
WithSidebar.args = {
  sidebar: true,
};

export const WithoutSidebar = Template.bind({});
WithoutSidebar.args = {
  sidebar: false,
};
