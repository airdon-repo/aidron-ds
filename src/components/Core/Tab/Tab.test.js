import React from 'react';
import { render, screen } from '@testing-library/react';
import { Tabs } from './Tabs';
import { Tab } from './Tab';
import { TabHeader } from './TabHeader';
import { TabContent } from './TabContent';

test('Tabs are rendered properly', () => {
  render(
    <Tabs selected="tab3">
      <Tab alias="tab1">
        <TabHeader>Tab</TabHeader>
        <TabContent>Tab 1</TabContent>
      </Tab>
      <Tab alias="tab2">
        <TabHeader>Tab</TabHeader>
        <TabContent>Tab 2</TabContent>
      </Tab>
      <Tab alias="tab3">
        <TabHeader>Tab</TabHeader>
        <TabContent>Tab 3</TabContent>
      </Tab>
      <Tab alias="tab4" disabled>
        <TabHeader>Tab</TabHeader>
        <TabContent>Tab 4</TabContent>
      </Tab>
    </Tabs>
  );
  const tabsWrapperNode = screen.getByTestId('tabs');
  const tabsButtonsNode = screen.getByTestId('tabs-controller');
  const tabsContentsNode = screen.getByTestId('tabs-inner');

  const buttons = tabsButtonsNode.getElementsByClassName('tab-header');
  const contents = tabsContentsNode.getElementsByClassName('tab-content');
  const selected = tabsContentsNode.getElementsByClassName('selected');

  expect(tabsWrapperNode).toBeInTheDocument();
  expect(tabsButtonsNode).toBeInTheDocument();
  expect(tabsContentsNode).toBeInTheDocument();

  expect(tabsWrapperNode).toHaveClass('ragnarok');
  expect(tabsButtonsNode).toHaveClass('ragnarok');
  expect(tabsContentsNode).toHaveClass('ragnarok');

  expect(tabsWrapperNode).toHaveClass('tabs');
  expect(tabsButtonsNode).toHaveClass('tabs-controller');
  expect(tabsContentsNode).toHaveClass('tabs-inner');

  expect(buttons).toHaveLength(4);
  expect(contents).toHaveLength(4);
  expect(selected).toHaveLength(1);
});
