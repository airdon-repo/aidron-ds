import React from 'react';
import { render, screen } from '@testing-library/react';
import { List, ListItem } from './List';
import { Text } from '../Text';
import { Icon } from '../Icon';
import { Avatar } from '../Avatar';

test('List is rendered properly', () => {
  render(
    <List vertical width="350px">
      <ListItem trailingIcon="chevron-right" onClick={() => {}}>
        <span>
          <Icon icon="star" className="spacing-inset-sm no-p-left no-p-vertical" />
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
          <Text weight="bold" className="no-m-vertical">Item</Text>
          <Text className="color-neutral-40 no-m-vertical">Description</Text>
        </span>
      </ListItem>
      <ListItem onClick={() => {}}>
        <span>
          <Icon icon="star" className="spacing-inset-sm no-p-left no-p-vertical" />
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
          <Text weight="bold" className="no-m-vertical">Item</Text>
          <Text className="color-neutral-40 no-m-vertical">Description</Text>
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
          <Text weight="bold" className="no-m-vertical">Item</Text>
          <Text className="color-neutral-40 no-m-vertical">Description</Text>
        </span>
      </ListItem>
    </List>
  );
  const linkNode = screen.getByTestId('list');

  expect(linkNode).toBeInTheDocument();
  expect(linkNode).toHaveClass('ragnarok');
  expect(linkNode).toHaveClass('list');
});
