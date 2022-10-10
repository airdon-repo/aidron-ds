/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from 'react';

import { Sidebar } from './Sidebar';
import { Avatar } from '../Avatar';
import { Text } from '../Text';
import { Icon } from '../Icon';
import { List, ListItem } from '../List';

export default {
  title: 'Core/Sidebar',
  component: Sidebar,
};

const Template = (args) => {
  const [open, setOpen] = useState(args.open);
  return (
    <Sidebar open={open} onColapse={setOpen}>
      <div className="profile">
        <Avatar
          name="Dwigth Schrute"
          size={open ? 'lg' : 'md'}
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
                  className="no-m-left no-m-vertical"
                  style={{ marginRight: '16px' }}
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
};

export const Basic = Template.bind({});
Basic.args = {
  open: true
};
