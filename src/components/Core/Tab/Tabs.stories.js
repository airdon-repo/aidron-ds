/* eslint-disable import/no-anonymous-default-export */
import React from 'react';

import { Badge } from '../Badge';
import { Icon } from '../Icon';
import { Tabs } from './Tabs';
import { Tab } from './Tab';
import { TabHeader } from './TabHeader';
import { TabContent } from './TabContent';

export default {
  title: 'Core/Tab',
  component: Tabs,
};

const Template = (args) => (
  <Tabs {...args}>
    <Tab alias="tab1">
      <TabHeader>
        <Icon
          icon="zap"
        />
        Tab
        <Badge variant="danger">88</Badge>
      </TabHeader>
      <TabContent>Tab 1</TabContent>
    </Tab>
    <Tab alias="tab2">
      <TabHeader>
        Tab
        <Badge variant="danger">88</Badge>
      </TabHeader>
      <TabContent>Tab 2</TabContent>
    </Tab>
    <Tab alias="tab3">
      <TabHeader>Tab</TabHeader>
      <TabContent>Tab 3</TabContent>
    </Tab>
    <Tab alias="tab4" disabled>
      <TabHeader>
        Tab
        <Badge variant="danger">88</Badge>
      </TabHeader>
      <TabContent>Tab 4</TabContent>
    </Tab>
  </Tabs>
);

export const Basic = Template.bind({});
Basic.args = {
  selected: 'tab2',
};
