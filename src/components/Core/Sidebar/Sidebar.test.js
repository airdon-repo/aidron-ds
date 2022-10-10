import React from 'react';
import { render, screen } from '@testing-library/react';
import { Sidebar } from './Sidebar';
import { Avatar } from '../Avatar';
import { Icon } from '../Icon';
import { Text } from '../Text';
import { List, ListItem } from '../List';

test('Sidebar is rendered properly', () => {
  render(
    <Sidebar>
      <div className="profile">
        <Avatar
          name="Dwigth Schrute"
          size="md"
          src="static/media/avatar.7c7145cd.jpg"
        />
        <div className="details">
          <Text weight="bold" size="sm">Dwigth</Text>
          <Text size="xs">Planner</Text>
        </div>
      </div>
      <section>
        <Text allcaps size="xxs">Section</Text>
        <List
          active="3"
        >
          {['star', 'zap', 'phone', 'pie-chart', 'star'].map((x, index) => (
            <ListItem
              key={index.toString()}
            >
              <span>
                <Icon
                  className="spacing-inset-sm no-p-left no-p-vertical"
                  icon={x}
                />
              </span>
              <span
                className="d-inline-block"
                style={{
                  flex: 1
                }}
              >
                <Text
                  className="no-m-vertical"
                  weight="bold"
                >
                  Item
                </Text>
              </span>
            </ListItem>
          ))}
        </List>
      </section>
    </Sidebar>
  );
  const sidebarNode = screen.getByTestId('sidebar');
  const button = sidebarNode.getElementsByClassName('button button-sm button-ghost icon');

  expect(sidebarNode).toBeInTheDocument();
  expect(sidebarNode).toHaveClass('ragnarok');
  expect(sidebarNode).toHaveClass('sidebar');
  expect(button).toHaveLength(1);
});

