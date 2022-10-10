/* eslint-disable import/no-anonymous-default-export */
import React from 'react';

import { List, ListItem } from './List';
import { Avatar } from '../Avatar';
import { Text } from '../Text';
import { Icon } from '../Icon';

export default {
  title: 'Core/List',
  component: List,
};

const Template = (args) => (
  <List {...args}>
    <ListItem trailingIcon="chevron-right" onClick={() => {}}>
      <span>
        <Icon icon="star" className="no-m-left no-m-vertical" style={{ marginRight: '16px' }} />
      </span>
      <span>
        <Avatar
          name="Dwigth Schrute"
          size="sm"
          src="static/media/avatar.7c7145cd.jpg"
          className="no-m-left no-m-vertical"
        />
      </span>
      <span className="d-inline-block" style={{ flex: 1 }}>
        <Text size="xs" weight="bold" className="no-m-vertical">Item</Text>
        <Text size="xs" className="color-neutral-40 no-m-vertical">Description</Text>
      </span>
    </ListItem>
    <ListItem onClick={() => {}}>
      <span>
        <Icon icon="star" className="no-m-left no-m-vertical" style={{ marginRight: '16px' }} />
      </span>
      <span>
        <Avatar
          name="Dwigth Schrute"
          size="sm"
          src="static/media/avatar.7c7145cd.jpg"
          className="no-m-left no-m-vertical"
        />
      </span>
      <span className="d-inline-block" style={{ flex: 1 }}>
        <Text size="xs" weight="bold" className="no-m-vertical">Item</Text>
        <Text size="xs" className="color-neutral-40 no-m-vertical">Description</Text>
      </span>
    </ListItem>
    <ListItem trailingIcon="more-vertical" onRightClick={() => {}}>
      <span>
        <Avatar
          name="Dwigth Schrute"
          size="sm"
          src="static/media/avatar.7c7145cd.jpg"
          className="no-m-left no-m-vertical"
        />
      </span>
      <span className="d-inline-block" style={{ flex: 1 }}>
        <Text size="xs" weight="bold" className="no-m-vertical">Item</Text>
        <Text size="xs" className="color-neutral-40 no-m-vertical">Description</Text>
      </span>
    </ListItem>
  </List>
);

const TemplateSingle = (args) => (
  <List {...args}>
    <ListItem trailingIcon="chevron-right" onClick={() => {}}>
      <span>
        <Icon icon="star" className="no-m-left no-m-vertical" style={{ marginRight: '16px' }} />
      </span>
      <span>
        <Avatar
          name="Dwigth Schrute"
          size="sm"
          src="static/media/avatar.7c7145cd.jpg"
          className="no-m-left no-m-vertical"
        />
      </span>
      <span className="d-inline-block" style={{ flex: 1 }}>
        <Text size="xs" weight="bold" className="no-m-vertical">Item</Text>
        <Text size="xs" className="color-neutral-40 no-m-vertical">Description</Text>
      </span>
    </ListItem>
  </List>
);

export const Basic = Template.bind({});
Basic.args = {
  width: '350px',
  vertical: true,
  active: '1'
};

export const Single = TemplateSingle.bind({});
Single.args = {
  width: '350px',
  vertical: true,
  active: '0'
};

export const Horizontal = Template.bind({});
Horizontal.args = {
  width: '250px',
  vertical: false,
};

Horizontal.parameters = {
  layout: 'padded',
};
